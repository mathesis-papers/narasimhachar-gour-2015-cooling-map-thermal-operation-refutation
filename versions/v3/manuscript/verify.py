import itertools
import json
from fractions import Fraction


def scalar(real=0, imag=0):
    return Fraction(real), Fraction(imag)


def add(left, right):
    return left[0] + right[0], left[1] + right[1]


def negative(value):
    return -value[0], -value[1]


def multiply(left, right):
    return left[0] * right[0] - left[1] * right[1], left[0] * right[1] + left[1] * right[0]


def conjugate(value):
    return value[0], -value[1]


def total(values):
    result = scalar()
    for value in values:
        result = add(result, value)
    return result


def determinant(matrix):
    if not matrix:
        return scalar(1)
    return total(
        multiply(multiply(scalar((-1) ** column), matrix[0][column]), determinant([
            row[:column] + row[column + 1:] for row in matrix[1:]
        ])) for column in range(len(matrix))
    )


def check(condition, label):
    if not condition:
        raise AssertionError(label)
    return label


def main():
    coefficient_a = Fraction(3, 5)
    coefficient_b = Fraction(4, 5)
    factor = [
        [scalar(1), scalar()],
        [scalar(), scalar(1)],
        [scalar(coefficient_a), scalar(coefficient_b)],
        [scalar(coefficient_a), scalar(0, coefficient_b)],
    ]
    gram = [[total(multiply(factor[row][column], conjugate(factor[other][column]))
                   for column in range(2)) for other in range(4)] for row in range(4)]
    target = [[multiply(scalar(Fraction(1, 4)), entry) for entry in row] for row in gram]
    checks = []
    checks.append(check(all(gram[index][index] == scalar(1) for index in range(4)), 'unit Gram diagonal'))
    checks.append(check(all(gram[row][column] == conjugate(gram[column][row])
                            for row in range(4) for column in range(4)), 'Hermitian Gram matrix'))
    checks.append(check(total(target[index][index] for index in range(4)) == scalar(1), 'target trace one'))
    principal_minors = []
    for size in range(1, 5):
        for subset in itertools.combinations(range(4), size):
            minor = determinant([[target[row][column] for column in subset] for row in subset])
            checks.append(check(minor[1] == 0 and minor[0] >= 0, 'nonnegative principal minor ' + str(subset)))
            principal_minors.append(str(minor[0]))
    checks.append(check(determinant([gram[0][:2], gram[1][:2]]) == scalar(1)
                        and all(value == scalar() for value in [
                            determinant([[gram[row][column] for column in subset] for row in subset])
                            for subset in itertools.combinations(range(4), 3)
                        ]), 'Gram rank two'))
    kraus = [[factor[index][column] for index in range(4)] for column in range(2)]
    checks.append(check(all(total(multiply(conjugate(operator[index]), operator[index])
                                  for operator in kraus) == scalar(1)
                            for index in range(4)), 'Kraus completeness'))
    output = [[total(multiply(multiply(operator[row], scalar(Fraction(1, 4))),
                              conjugate(operator[column])) for operator in kraus)
               for column in range(4)] for row in range(4)]
    checks.append(check(output == target, 'cooling output equals target'))
    residuals = [
        [scalar(-coefficient_a), scalar(-coefficient_b), scalar(1), scalar()],
        [scalar(-coefficient_a), scalar(0, -coefficient_b), scalar(), scalar(1)],
    ]
    for index, coefficients in enumerate(residuals):
        norm_squared = total(multiply(multiply(coefficients[row], conjugate(coefficients[column])),
                                      gram[row][column]) for row in range(4) for column in range(4))
        checks.append(check(norm_squared == scalar(), 'zero Gram residual norm ' + str(index + 1)))
    cross = coefficient_a * coefficient_b
    obstruction = determinant([[scalar(cross), scalar(cross)],
                               [scalar(0, -cross), scalar(0, cross)]])
    checks.append(check(obstruction == scalar(0, 2 * cross * cross) and obstruction != scalar(),
                        'nonzero unitarity obstruction determinant'))
    levels = [0, 1, 3, 7]
    gaps = sorted(levels[upper] - levels[lower] for lower in range(4) for upper in range(lower + 1, 4))
    checks.append(check(gaps == [1, 2, 3, 4, 6, 7], 'distinct positive energy gaps'))
    residual_coefficient_sum = 1 + coefficient_a + coefficient_b
    checks.append(check(residual_coefficient_sum == Fraction(12, 5),
                        'residual coefficient sum 12/5'))
    unitarity_error_coefficient = residual_coefficient_sum ** 2 / cross
    checks.append(check(unitarity_error_coefficient == 12,
                        'unitarity error coefficient 12'))
    gram_gap = 1 / unitarity_error_coefficient ** 2
    checks.append(check(gram_gap == Fraction(1, 144), 'uniform Gram gap constant 1/144'))
    trace_error = Fraction(1, 10 ** 8)
    checks.append(check(gram_gap > 4 * trace_error
                        and (gram_gap - 4 * trace_error) ** 2 > 16 ** 2 * 7 * trace_error,
                        'strict trace-error threshold 1/100000000'))
    padded_vectors = [[conjugate(entry) for entry in row] + [scalar(), scalar()]
                      for row in factor]
    checks.append(check(all(total(multiply(conjugate(padded_vectors[row][entry]),
                                          padded_vectors[column][entry]) for entry in range(4))
                            == gram[row][column] for row in range(4) for column in range(4)),
                        'padded four-level Gram identity'))
    impossible_projection_rank = 3 * Fraction(1, 2)
    checks.append(check(impossible_projection_rank == Fraction(3, 2)
                        and impossible_projection_rank.denominator != 1,
                        'three-vector projection rank 3/2 is nonintegral'))
    print(json.dumps({
        'arithmetic': 'exact rational real and imaginary parts',
        'statement': 'finite algebraic checks for the four-level cooling transition',
        'checks': checks,
        'principal_minors': principal_minors,
        'obstruction_determinant': {'real': str(obstruction[0]), 'imaginary': str(obstruction[1])},
        'energy_gaps': gaps,
        'gram_gap_lower_bound': str(gram_gap),
        'trace_error_excluded_through': str(trace_error),
        'proof_scope': 'The arbitrary-ancilla exclusion, norm estimates, parameter and dimension extensions, vector conjecture and closed-mixture consequences have written proofs in note.tex. These checks cover finite identities and rational constants.',
        'status': 'all finite checks satisfied',
    }, indent=2))


if __name__ == '__main__':
    main()
