# Cooling without energy loss: why do four levels differ from three?

Imagine a building whose four floors carry energy labels $0,1,3,7$. A perfectly cold environment cannot supply energy, so an object can stay on its floor or move down. That sounds like a complete description of cooling. A quantum system, however, also carries information about how waves on different levels fit together. This paper keeps every energy probability equal to $1/4$ and changes only those relationships. A legitimate abstract cooling rule performs the change. No finite cold bath of the kind defined here can perform it, or even approach it arbitrarily closely.

Source paper: Haobo Ma and Wenlin Zhang, [Four-level closure separation at Narasimhachar–Gour's Conjecture 1 (Supplementary Sec. S2 F, p. S11): beyond Maestro's exact qutrit separation (2026), using Dykema–Juschenko (2009)](https://doi.org/10.5281/zenodo.24209470), version 3. Manuscript references in this reading refer to this version.

The building picture explains energy and probability, but a quantum state is not a coin secretly sitting on one floor. For two levels, the state $(|0\rangle+|1\rangle)/\sqrt2$ and a fifty-fifty random choice of the two levels give the same energy statistics. They behave differently when we first recombine the waves. The first has **coherence**: relative amplitudes that can interfere. The random mixture does not. A table called a density matrix records both kinds of information. Its diagonal lists energy probabilities; its off-diagonal entries record coherences. The counterexample lives off the diagonal.

The paper is by **Haobo Ma** (ChronoAI Pte Ltd, Singapore) and **Wenlin Zhang** (National University of Singapore; ChronoAI Pte Ltd, Singapore). This explanation accompanies public version 3 and retains the authors' recorded names. Read the [original version-3 paper PDF](https://mathesis-omega-research.apps.chrono-ai.fun/api/v1/collected-papers/narasimhachar-gour-2015-cooling-map-thermal-operation-refutation/files/pdf?version=3).

## Three different questions

Can two rules perform the same state transition? That is weaker than asking whether they are the same channel. A channel specifies what happens to every input. Showing that two sets of channels differ does not automatically exhibit one input and target that separate their transition capabilities. This paper supplies a particular pair.

**Exact realization** also differs from **arbitrary approximation**. Rational numbers cannot equal $\sqrt2$, yet they approach it as closely as we like. Proving that every finite scheme misses a target does not rule out a sequence converging to it. Here the target has a small forbidden neighborhood that every finite scheme misses. The conservative error bound is $10^{-8}$; the paper does not claim that constant is optimal.

Finally, “cold bath” has a precise meaning: a nonzero finite environment, initially **uniformly mixed over its entire lowest-energy subspace**, and a joint evolution that conserves total energy exactly. The lowest energy may be degenerate, with no upper bound on that degeneracy. Arbitrary positive-temperature baths, infinite environments and catalysts are outside the main conclusion.

## A route through the argument

Chapter 1 turns a $3$–$4$–$5$ right triangle into a legitimate four-level cooling channel. Chapter 2 explains why no loss of average energy forces four bath actions to be reversible, then finds a contradiction in two algebraic identities. Chapter 3 turns that exact contradiction into a uniform error barrier. Chapter 4 explains extensions, the four-level threshold, earlier literature and the precise reach of the formal proof.

The short film follows the same sequence: levels, a coherence matrix, two incompatible reversible actions, and an error barrier.

::: {.film src="001-coherence-obstruction"}
Cooling without energy loss: identical energy probabilities, unattainable coherence relationships.
:::

You do not need a course in quantum thermodynamics to follow the idea. The starting tools are the complex number $i$, with $i^2=-1$, and the fact that a squared length cannot be negative. The exact formulas are included for readers who want to work through the mechanism.
