# From one example to the four-level threshold

These extensions have written arguments in Section 4 of the manuscript. They do not follow automatically from a numerical example.

::: {.remark #parameter-family title="Manuscript Corollary 6: a parameter family" mathesis="collected:narasimhachar-gour-2015-cooling-map-thermal-operation-refutation:3:s6"}
Replace $3/5,4/5$ in $B$ by arbitrary real $a,b>0$ with $a^2+b^2=1$, and replace the last-row $i$ by $e^{i\theta}$ with $\sin\theta\ne0$. For every strictly increasing four-level spectrum and every normalized pure input $\sum_j\alpha_j|j\rangle$ with all $\alpha_j\ne0$, the resulting diagonal cooling channel produces an output unreachable by an exact finite ground-space thermal operation.
:::

The identities $X+X^\dagger=0$ and $e^{-i\theta}X+e^{i\theta}X^\dagger=0$ give $-2i\sin\theta\,X=0$. The requirements $ab>0$ and $\sin\theta\ne0$ are essential; the conclusion does not include $a=0$, $b=0$, or $\theta=0,\pi$. This family asserts exact separation, not a common $10^{-8}$ bound for all parameters.

::: {.remark #occupied-levels title="Manuscript Corollary 7: at least four occupied levels" mathesis="collected:narasimhachar-gour-2015-cooling-map-thermal-operation-refutation:3:s7"}
For every finite system with distinct ordered energies and every pure input with at least four nonzero energy amplitudes, there exists a diagonal cooling channel whose output lies outside the closure of the specified finite ground-space thermal outputs.
:::

Choose four occupied levels and assign the four rows of $B$ to them; assign $(1,0)$ to every other level. The two diagonal Kraus operators remain complete. A sequence of thermal outputs converging to the target would have energy loss tending to zero, hence leakage $\ell_k$ tending to zero at every occupied level. Completing the blocks to unitaries would yield four-unitary Gram matrices converging to $C$, contrary to the $1/144$ gap. Distinct positive gaps are unnecessary here, and no trace-norm constant uniform over all inputs is asserted.

## Earlier vector and mixture questions

::: {.remark #vector-obstruction title="Manuscript Corollary 8: three vectors and S2.6" mathesis="collected:narasimhachar-gour-2015-cooling-map-thermal-operation-refutation:3:s8"}
Conjecture 2 in Supplementary Section II F, p. S11 of Narasimhachar–Gour's arXiv versions 1 and 2 is false already for three vectors in $\mathbb C^3$. The rank-dimensional ground-space vector condition of Property S2.6 in version 3 fails for the present rank-two matrix $C$.
:::

Take $v_0=e_0$, $v_1=e_1$, and $v_2=(-ie_0+e_1)/\sqrt2$. The early conjecture would give three unitaries $U_t$ such that, for each $j$, the three vectors $U_tv_j$ are orthonormal. Form matrices $M_j$ with these columns. Then $V_j=M_j^\dagger$ have normalized trace Gram entries $v_j^\dagger v_k$. A zero residual gives $V_2=(iV_0+V_1)/\sqrt2$. A common right unitary multiplication sets $V_0=I$; unitarity of $V_2$ forces $V_1=V_1^\dagger$, while orthogonality gives $\operatorname{Tr}V_1=0$. Thus $(I+V_1)/2$ is a projection whose rank would be $3/2$. Projection rank is an integer: contradiction. This uses the earlier mechanism of Musat–Rørdam and Maestro. For S2.6, its prescribed two orthogonal vectors would similarly build two-dimensional unitaries representing $C$, contradicting Chapter 2.

Versions matter: version 3 does not assert S2.6 universally. The paper excludes its universality and retains its role as a sufficient condition.

::: {.remark #convex-mixtures title="Manuscript Corollary 9: mixing optimally coherent channels is insufficient" mathesis="collected:narasimhachar-gour-2015-cooling-map-thermal-operation-refutation:3:s9"}
The cooling channel of Chapter 1 lies outside the closed convex hull of optimally coherent cooling channels.
:::

A convex mixture means randomly choosing a channel and then applying it; “closed” also permits limits of such mixtures. For fixed survival probabilities $q_j$, an optimally coherent cooling channel has a rank-one coherence matrix $Q_{jk}=\sqrt{q_jq_k}z_j\overline{z_k}$, $|z_j|=1$, simultaneously attaining the coherence magnitude bounds. The original Corollary S2.10 proves that finite mixtures of these channels are approximable by finite ground-space thermal channels. If such mixtures also approached our channel, their outputs on the fixed input would converge to $\sigma$, contradicting separation. This argument **uses and retains** S2.10 rather than refuting it.

::: {.remark #dimension-threshold title="Manuscript Corollary 10: the minimum dimension for closure separation" mathesis="collected:narasimhachar-gour-2015-cooling-map-thermal-operation-refutation:3:s10"}
Under distinct-level and distinct-positive-gap assumptions, the minimum system dimension admitting a cooling transition outside the closure of finite ground-space thermal outputs is four.
:::

One level is immediate; Narasimhachar–Gour's S2.7 gives exact equivalence for two. For three levels the argument recalls Maestro's prior closure proof. Delete zero rows and columns of the cooling coherence matrix $Q$, set $q_j=Q_{jj}>0$, and normalize to $R_{jk}=Q_{jk}/\sqrt{q_jq_k}$. Every complex correlation matrix of size at most three is a convex mixture of rank-one phase-vector matrices (Dykema–Juschenko, Corollary 2.8). Multiplying back by $\sqrt{q_j}$ and restoring zero rows expresses the channel as a mixture of optimally coherent cooling channels with the same lowering probabilities. S2.10 supplies thermal approximation in diamond norm, hence approximation of outputs for each fixed input. Four levels are excluded by our example.

| System dimension under the stated generic-spectrum assumptions | Exact versus approximate realization |
| --- | --- |
| 1, 2 | Cooling transitions have exact thermal realizations. |
| 3 | Exact separation is known, but every cooling channel remains thermally approximable. |
| 4 | This example excludes arbitrary approximation as well. |

Four is the threshold for **closure separation**, not for exact separation. Real correlation matrices mark another boundary: Dykema–Juschenko's Theorem 3.1 uses Clifford matrices to give exact finite unitary-moment representations in every dimension. The corresponding real diagonal cooling channels are exactly realizable with a fully degenerate bath. Our complex phase is doing mathematical work.

## Literature, boundaries and further work

Narasimhachar and Gour posed the state-transition equivalence question in 2015. Maestro v0.1 established exact qutrit separation and qutrit closure in 2026; this example does not displace that priority. The unitary-moment obstruction has an earlier history: Kümmerer (1986, as recorded by Haagerup–Musat), Dykema–Juschenko (2009 preprint), and Haagerup–Musat (2010 preprint, 2011 journal). This paper applies a rational four-level obstruction to a single thermal transition and supplies quantitative closure separation and extensions.

The result retains the original cooling criterion S2.4, qubit and rank-one results, and Gibbs-preserving results. It does not settle arbitrary positive-temperature baths, infinite environments, or catalysts. It does not calculate the exact depolarizing boundary of Dykema–Juschenko's different square-root example. Results in different thermal models should be kept distinct.

The talk follows the same teaching route, with estimates retained in the appendix.

::: {.slides src="seminar"}
An academic talk with aligned Chinese and English frames and speaker notes.
:::

To contribute formalization, start with [population preservation and unitary blocks](https://github.com/the-omega-institute/trureturing-requests/issues/76), [exposing the concrete witness](https://github.com/the-omega-institute/trureturing-requests/issues/77), [the uniform Gram gap](https://github.com/the-omega-institute/trureturing-requests/issues/78), or [trace-norm closure separation](https://github.com/the-omega-institute/trureturing-requests/issues/79). Further scopes cover the [Gibbs tail](https://github.com/the-omega-institute/trureturing-requests/issues/80), [parameter family](https://github.com/the-omega-institute/trureturing-requests/issues/81), [four occupied levels](https://github.com/the-omega-institute/trureturing-requests/issues/82), [vector problem](https://github.com/the-omega-institute/trureturing-requests/issues/83), [convex mixtures](https://github.com/the-omega-institute/trureturing-requests/issues/84), and [dimension threshold](https://github.com/the-omega-institute/trureturing-requests/issues/85). Each linked problem identifies a precise statement to formalize. The [contribution guide](https://github.com/the-omega-institute/trureturing/blob/dev/docs/CONTRIBUTING.md) explains how to take part. Proof contributors receive attribution alongside the original mathematical authors.

### Principal original sources

- Haobo Ma and Wenlin Zhang, [this paper, version 3](https://mathesis-omega-research.apps.chrono-ai.fun/papers/narasimhachar-gour-2015-cooling-map-thermal-operation-refutation?version=3), Sections 2–4.
- V. Narasimhachar and G. Gour, *Low-temperature thermodynamics with quantum coherence* (2015), [DOI 10.1038/ncomms8689](https://doi.org/10.1038/ncomms8689), [arXiv version 3](https://arxiv.org/abs/1409.7740v3), S2 F, S2.6–S2.10; the earlier vector conjecture is in versions 1 and 2.
- K. Dykema and K. Juschenko, *Matrices of unitary moments*, 2009 preprint, 2011 journal, [DOI 10.7146/math.scand.a-15186](https://doi.org/10.7146/math.scand.a-15186), Corollary 2.8, Proposition 2.10, Corollary 2.11, Theorem 3.1.
- U. Haagerup and M. Musat, *Factorization and dilation problems for completely positive maps on von Neumann algebras*, [DOI 10.1007/s00220-011-1216-y](https://doi.org/10.1007/s00220-011-1216-y), especially Remark 4.8(2).
- M. Musat and M. Rørdam, *Non-closure of quantum correlation matrices and factorizable channels that require infinite dimensional ancilla*, [DOI 10.1007/s00220-019-03449-w](https://doi.org/10.1007/s00220-019-03449-w), Proposition 3.2 and Example 3.4.
- Maestro v0.1, *Minimum Bath Dimension for Qutrit Cooling Maps*, 27 August 2026, [version 1.0 full text](https://pudimphysics.org/research/RO-2026-0004/releases/v1.0/combined.pdf?download=1), Letter p. 1 and Supplement pp. 1–2.
