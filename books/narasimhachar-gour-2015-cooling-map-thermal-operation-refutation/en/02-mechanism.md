# Why two coherence relations cannot coexist

## Unchanged populations eliminate every downward transition

Imagine moving sand among four floors, only downward, and finishing with precisely the original amount on every floor. No sand can actually have moved. An average-energy identity turns that intuition into an argument for a quantum environment.

Let $P_{j|k}$ be the probability of moving from system level $k$ to level $j$, with input probabilities $p_k=|\alpha_k|^2$ all positive. A bath starting at its lowest energy cannot supply energy, so $P_{j|k}=0$ when $j>k$. Energy conservation also says that, for a fixed output level and bath energy, at most one input level contributes an amplitude. Thus cross terms between different input levels vanish in output populations. The probabilities really do transform by a classical matrix $P$.

If every population is unchanged, the total energy loss is zero, but

$$
0=\sum_{j<k}(E_k-E_j)P_{j|k}p_k.
$$

Every summand is nonnegative, and both the gap and $p_k$ are strictly positive. Every downward-transition probability must therefore vanish. This does not assume away coherence: energy conservation first eliminates the population cross terms, then nonnegativity does the work.

::: {.remark #population-blocks title="Manuscript Lemma 1: population preservation forces unitary blocks" mathesis="collected:narasimhachar-gour-2015-cooling-map-thermal-operation-refutation:3:s1"}
For every strictly increasing four-level spectrum and normalized pure input $|\psi\rangle=\sum_k\alpha_k|k\rangle$ with every $\alpha_k\ne0$, any thermal operation defined above preserving all its populations admits four $g\times g$ unitaries $V_0,\ldots,V_3$ such that

$$
\mathcal T(|\psi\rangle\langle\psi|)_{jk}
=\alpha_j\overline{\alpha_k}\,\frac{\operatorname{Tr}(V_jV_k^\dagger)}g.
$$

This is the written result in Section 2 of Haobo Ma and Wenlin Zhang's version 3, with arbitrary finite environment and arbitrary ground degeneracy.
:::

Why unitary blocks? Each forbidden downward probability is a sum of squared amplitudes. A zero sum forces every amplitude to vanish. If the system remains at level $k$, energy conservation also leaves the bath at its lowest energy. Joint evolution therefore restricts to a $g\times g$ block $V_k$ on “level $k$ times the bath ground space.” Its columns are orthonormal and its input and output dimensions agree, so it is unitary. Ignoring the bath gives the normalized trace above: another Gram matrix, now of matrices rather than row vectors.

## Transferring linear relations through a Gram matrix

Suppose a thermal operation reached $\sigma=C/4$. Since every input amplitude is $1/2$, the lemma would give

$$
\frac1g\operatorname{Tr}(V_jV_k^\dagger)=C_{jk}.
$$

The rows of $B$ obey two simple relations. The matrices must obey the same ones:

$$
\begin{gathered}
V_2=aV_0+bV_1,\\
V_3=aV_0+ibV_1,\\
a=3/5,\qquad b=4/5.
\end{gathered}
$$

To see why, expand the squared length of $R=V_2-aV_0-bV_1$. The expansion uses only pairwise inner products. These agree with those of the rows of $B$, whose corresponding residual is zero. Thus $\operatorname{Tr}(RR^\dagger)/g=0$. This is the average of the squared moduli of all entries, forcing $R=0$. The other relation works the same way.

Set $X=V_0V_1^\dagger$. Using $a^2+b^2=1$, expand the identity “a unitary times its conjugate transpose equals $I$” for each relation:

$$
I=I+ab(X+X^\dagger),\qquad
I=I+iab(X^\dagger-X).
$$

Since $ab\ne0$, the first says $X^\dagger=-X$ and the second says $X^\dagger=X$. Together they force $X=0$. Yet a product of unitaries is unitary, so it cannot be zero on a nonzero space. That is the contradiction.

::: {.remark #exact-witness title="Manuscript Theorem 2: exact separation of the fixed state pair" mathesis="collected:narasimhachar-gour-2015-cooling-map-thermal-operation-refutation:3:s2"}
The data $H_S,\rho,\sigma,K_0,K_1$ of Chapter 1 define a cooling transition $\rho\mapsto\sigma$. No thermal operation of the specified form realizes it, for any nonzero finite environment spectrum, any ground degeneracy, or any energy-conserving unitary. The argument above is the proof from Section 2.
:::

## What does the public formal theorem state?

Here is a logical consequence of Theorem 2, stated separately. Let $\mathcal A$ be this universal assertion: for every finite system dimension $d$, every strictly increasing real energy spectrum $E$ with distinct positive gaps, and all density matrices $\rho,\sigma$, a cooling transition given by finitely many diagonal or single-lowering Kraus operators has a realization by a positive-dimensional finite environment, its uniform full-ground-space state, and a total-energy-conserving unitary.

::: {.theorem #exact-universality-refuted title="Universal exact-transition equivalence fails" mathesis="collected:narasimhachar-gour-2015-cooling-map-thermal-operation-refutation:3:s2" lean="D5/S3/QuantumChannels/CoolingMapThermalOperationRefutation.result"}
$\neg\mathcal A$: the universal exact-realization assertion from cooling transitions to the specified thermal operations is false.
:::

The linked Lean proof verifies that this universal exact-realization assertion is false. It uses the four-level construction from Chapter 1, but the verified statement above asserts only the failure of the universal rule. The fixed-witness statement in Theorem 2 is more specific, and the quantitative approximation bounds in the next chapter remain separate written results.
