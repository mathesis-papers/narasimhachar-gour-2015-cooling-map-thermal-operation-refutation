# Robust separation of cooling and ground-space thermal transitions

This package contains a counterexample to Conjecture 1 in Narasimhachar and
Gour, *Low-temperature thermodynamics with quantum coherence* (2015),
[arXiv:1409.7740v3](https://arxiv.org/abs/1409.7740v3), Supplementary Sec. S2 F,
p. S11. It extends the unitary-moment obstruction of Dykema and Juschenko
(2009) to exclude approximation by finite ground-space thermal outputs,
beyond the exact qutrit separation of Maestro (2026), cited in the note.
For the displayed transition, every such output has trace-norm error greater
than 10^-8. Three explicit vectors also refute Conjecture 2 in versions 1 and 2
of the source (Supplementary Sec. II F, p. S11).
Combining the four-level witness with the prior qutrit closure theorem
gives the minimum dimension four for closure separation when system
levels and positive gaps are distinct.

## Contents and rebuilding

- `note.tex`: self-contained LaTeX, including the bibliography.
- `note.pdf`: readable mathematical note.
- `verify.py`: exact rational complex arithmetic for the displayed example.
- `checker-output.json`: the finite checks and their mathematical scope.
- `metadata.json`: title, creators, license, problem identity, and source link.

Build with **Tectonic 0.17.0**:

```sh
tectonic note.tex
```

Alternatively run `pdflatex note.tex` twice. The bibliography is embedded;
BibTeX and external bibliography files are unnecessary. The proof uses no
generated figures or external data. The source archive contains these text
sources and the finite-check output; the PDF is supplied separately.

Reproduce the finite checks with Python 3.10 or later, using its standard library:

```sh
python3 verify.py > checker-output.json
```

The checker verifies the displayed Gram matrix, Kraus completeness and output,
all principal minors of the target, the two zero residual norms, distinct gaps,
the nonzero determinant in the unitary obstruction, the padded four-level Gram
identity, the nonintegral rank forced by the three-vector example, and the
rational constants in the uniform Gram-gap and trace-error bounds.
The arbitrary-ancilla argument, quantitative norm estimates,
parameter and dimension families, vector conjecture, failure of Property S2.6,
and exclusion of the closed convex hull of optimally coherent channels have
written proofs in the note. Closure separation extends to every pure input
with at least four occupied distinct energy levels. The checker performs
31 finite checks; the arbitrary-dimension statements have written proofs.
A finite Gibbs bath with excited-state probability p gives error greater
than 10^-8 - 2p; exact realization requires p > 5 × 10^-9.

The declaration `D5.S3.QuantumChannels.CoolingMapThermalOperationRefutation.result`
in the [pinned Lean source](https://github.com/the-omega-institute/trureturing/blob/0eae8e045cb2ba958e2097dbac034f62f9c1dd7a/D5/S3/QuantumChannels/CoolingMapThermalOperationRefutation.lean)
states the negation of the source's finite ground-space transition claim and
uses the concrete four-level witness in the note. Its scope is the exact
transition with energies 0, 1, 3, 7 and the uniform pure input; the quantitative
bounds and sibling consequences are the written extensions described above.

## Creators and license

Haobo Ma (ChronoAI Pte Ltd, Singapore), followed by Wenlin Zhang
(National University of Singapore; ChronoAI Pte Ltd, Singapore).
The note and accompanying original sources are licensed under
Creative Commons Attribution 4.0 International (CC BY 4.0).
