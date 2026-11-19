# Building the target from a right triangle

## From a probability table to a coherence table

A four-level state is represented by a $4\times4$ matrix $\rho$. It must be positive semidefinite, meaning $x^\dagger\rho x\geq0$ for every complex vector $x$, and its diagonal must sum to $1$. The symbol $\dagger$ means transpose and complex conjugate. These conditions make the table consistent with probabilities. A pure state $|\psi\rangle$ has matrix $|\psi\rangle\langle\psi|$.

Choose an input whose four amplitudes are all $1/2$:

$$
\begin{gathered}
H_S=\operatorname{diag}(0,1,3,7),\\
|+\rangle=\frac12\sum_{j=0}^3|j\rangle,\qquad \rho=|+\rangle\langle+|.
\end{gathered}
$$

Every entry of $\rho$ is $1/4$. The six positive energy gaps are $1,2,3,4,6,7$, all different. This meets the original problem's assumptions on distinct levels and distinct positive gaps.

Build a matrix from four two-dimensional row vectors:

$$
\begin{gathered}
B=\begin{pmatrix}1&0\\0&1\\3/5&4/5\\3/5&4i/5\end{pmatrix},\\
C=BB^\dagger,\qquad \sigma=C/4.
\end{gathered}
$$

Each row has length $1$, using $(3/5)^2+(4/5)^2=1$ in the last two rows. Hence $C$ has diagonal entries $1$, and $x^\dagger Cx=\|B^\dagger x\|^2\geq0$. Its first two rows are independent, so $C$ has rank two. Therefore $\sigma$ is a legitimate rank-two state, with all four energy probabilities still equal to $1/4$.

The table $C$ is a **Gram matrix**: it records the pairwise inner products of the rows. For a concrete coherence entry,

$$
C_{23}=\frac9{25}-\frac{16}{25}i,\qquad
\sigma_{23}=\frac9{100}-\frac4{25}i.
$$

Complex conjugation matters: $C_{32}=\overline{C_{23}}$. The target changes the magnitudes and phases of off-diagonal entries rather than moving probability down an energy level.

## Two meanings of “allowed”

A **cooling map** uses matrices $K_r$ to define $\Phi(\rho)=\sum_rK_r\rho K_r^\dagger$, with $\sum_rK_r^\dagger K_r=I$. Each $K_r$ is diagonal or a single downward transition $c|j\rangle\langle k|$ with $j<k$. These are Kraus operators. An individual branch need not be reversible; the sum describes a channel preserving total probability.

Our example needs just two:

$$
\begin{gathered}
K_0=\operatorname{diag}(1,0,3/5,3/5),\\
K_1=\operatorname{diag}(0,1,4/5,4i/5).
\end{gathered}
$$

At each diagonal position the squared moduli sum to $1$, giving the completeness condition. Since every input entry is $1/4$,

$$
\Phi(\rho)_{jk}=\frac14\sum_{r=0}^1B_{jr}\overline{B_{kr}}=C_{jk}/4.
$$

This is an allowed cooling channel; it preserves every input's energy probabilities. “Cooling” includes no energy change, just as “non-increasing” includes equality.

The other rule is a **finite ground-space thermal operation**. Choose any nonzero finite environment with energy operator $H_A$, full ground projector $P_0$, and $g=\operatorname{Tr}P_0\geq1$. Set

$$
\begin{gathered}
\mathcal T(\rho)=\operatorname{Tr}_A\bigl[U(\rho\otimes P_0/g)U^\dagger\bigr],\\
[U,H_S\otimes I+I\otimes H_A]=0.
\end{gathered}
$$

The matrix $U$ is unitary: joint evolution is reversible and preserves lengths. The bracket is a commutator; its vanishing expresses conservation of total energy. The partial trace $\operatorname{Tr}_A$ gives the state observed when the environment is ignored. The state $P_0/g$ weights all lowest-energy directions equally; it is not an arbitrarily selected pure ground state.

The cooling channel already sends $\rho$ to $\sigma$. We now ask whether any thermal operation, with complete freedom to choose its finite environment and $U$, can realize **that very same pair of states**.
