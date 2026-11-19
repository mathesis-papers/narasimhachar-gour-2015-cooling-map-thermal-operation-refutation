# Why can no larger finite bath approach the target?

An exact contradiction need not survive error. To exclude a limiting sequence, we need an error bound independent of bath size. The authors replace “the residual is zero” by “the residual is small.” The next three results have written proofs in Section 3 of the manuscript; the public Lean theorem's conclusion contains none of these quantitative assertions.

For a $g\times g$ matrix define the normalized length

$$
\|A\|_{2,g}=\sqrt{\operatorname{Tr}(AA^\dagger)/g}.
$$

Dividing by $g$ is essential: every unitary has length exactly $1$, independent of ground degeneracy.

::: {.remark #gram-gap title="Manuscript Lemma 3: a uniform Gram gap" mathesis="collected:narasimhachar-gour-2015-cooling-map-thermal-operation-refutation:3:s3"}
For every integer $g\geq1$ and every four $g\times g$ unitaries, put $D_{jk}=\operatorname{Tr}(V_jV_k^\dagger)/g$. Then

$$
\delta:=\max_{j,k}|D_{jk}-C_{jk}|\geq\frac1{144}.
$$
:::

Expand the two squared residual lengths. Each Gram entry differs by at most $\delta$, so each residual has length at most $(1+a+b)\sqrt\delta=12\sqrt\delta/5$. For $A=aV_0+bV_1$, the operator norm, or maximum length amplification, is at most $a+b=7/5$. Since $V_2$ is unitary,

$$
\|AA^\dagger-I\|_{2,g}
\leq(7/5+1)\|A-V_2\|_{2,g}
\leq\frac{144}{25}\sqrt\delta.
$$

The other combination obeys the same bound. Dividing by $ab=12/25$ gives $\|X+X^\dagger\|_{2,g}\leq12\sqrt\delta$ and $\|X^\dagger-X\|_{2,g}\leq12\sqrt\delta$. Subtract these expressions, divide by two, and apply the triangle inequality:

$$
1=\|X\|_{2,g}\leq12\sqrt\delta.
$$

Squaring yields $\delta\geq1/144$. The same obstruction controls matrices of every size.

## From almost unchanged populations to almost unitary blocks

A thermal operation close to the target need not preserve populations exactly, so Chapter 2's lemma does not yet apply. The authors supply the bridge. Write $\tau=\mathcal T(\rho)$, $\ell_k=1-P_{k|k}$, and let $L=\operatorname{Tr}(H_S(\rho-\tau))$ be the average energy loss. The smallest positive energy gap is $1$, hence

$$
L=\frac14\sum_{j<k}(E_k-E_j)P_{j|k}\geq\frac14\sum_k\ell_k.
$$

A ground-to-ground block $T_k$ may only be a contraction. Its singular value decomposition supplies a unitary $V_k$: for each singular value $0\leq s\leq1$, the inequality $(1-s)^2\leq1-s^2$ gives $\|T_k-V_k\|_{2,g}^2\leq\ell_k$.

View the mixed bath as part of a larger pure state and compare the two sets of output vectors. This gives $\|\tau-D/4\|_1\leq2\sqrt{8L}$. Here $\|M\|_1$ is the sum of singular values, called the **trace norm**. We use the full norm, without the common extra factor $1/2$ in trace distance.

Put $\varepsilon=\|\tau-\sigma\|_1$. The input and target have the same mean energy, and $\|H_S-(7/2)I\|_\infty=7/2$, so $L\leq7\varepsilon/2$. Consequently,

$$
\max_{j,k}|D_{jk}-C_{jk}|\leq4\varepsilon+16\sqrt{7\varepsilon}.
$$

For $\varepsilon\leq10^{-8}$ the right side is at most $0.00000004+0.004234<0.006944<1/144$, contradicting the uniform Gram gap.

::: {.remark #closure-gap title="Manuscript Corollary 4: trace-norm separation" mathesis="collected:narasimhachar-gour-2015-cooling-map-thermal-operation-refutation:3:s4"}
For the fixed input $\rho$, every finite ground-space thermal output $\tau$ satisfies $\|\tau-\sigma\|_1>10^{-8}$. Thus $\sigma$ lies outside the closure of these outputs, even allowing bath size to grow without bound along a sequence.
:::

## What if the bath is slightly warm?

A finite Gibbs bath with total excited-state probability $p$ has state $(1-p)P_0/g+p\omega_{\mathrm{exc}}$. Its trace-norm difference from $P_0/g$ is $2p$. Using the same joint unitary and ignoring the environment cannot increase that difference. The triangle inequality then gives:

::: {.remark #gibbs-tail title="Manuscript Corollary 5: a finite Gibbs-tail bound" mathesis="collected:narasimhachar-gour-2015-cooling-map-thermal-operation-refutation:3:s5"}
For the same fixed input and target, every energy-conserving output with a finite Gibbs bath satisfies $\|\tau-\sigma\|_1>10^{-8}-2p$. An exact realization requires $p>5\cdot10^{-9}$.
:::

This is a necessary condition, not a sufficient one. When the right side is negative the bound gives no exclusion; it does not settle reachability at arbitrary positive temperature.
