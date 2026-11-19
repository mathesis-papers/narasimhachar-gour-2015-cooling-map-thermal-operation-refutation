# 从一个例子到四能级阈值

以下推广均来自原论文第 4 节的书面论证，不能从上一章的一个数值例子自动推出。

::: {.remark #parameter-family title="原论文推论 6：参数族" mathesis="collected:narasimhachar-gour-2015-cooling-map-thermal-operation-refutation:3:s6"}
将 $B$ 中的 $3/5,4/5$ 换为任意实数 $a,b>0$、$a^2+b^2=1$，将末行的 $i$ 换为 $e^{i\theta}$，且 $\sin\theta\ne0$。取任意严格递增四能级能谱及任意归一化纯输入 $\sum_j\alpha_j|j\rangle$，每个 $\alpha_j\ne0$。所得对角冷却通道的输出不能由任何精确有限基态空间热操作达到。
:::

这里 $X+X^\dagger=0$ 与 $e^{-i\theta}X+e^{i\theta}X^\dagger=0$ 共同给出 $-2i\sin\theta\,X=0$。$ab>0$ 和 $\sin\theta\ne0$ 正是矛盾所需；不能把边界 $a=0$、$b=0$ 或 $\theta=0,\pi$ 也写进结论。该参数族只声称精确分离，没有给所有参数同一个 $10^{-8}$ 界。

::: {.remark #occupied-levels title="原论文推论 7：至少四个占据能级" mathesis="collected:narasimhachar-gour-2015-cooling-map-thermal-operation-refutation:3:s7"}
对每个具有互异有序能级的有限系统，以及每个至少有四个非零能量振幅的纯输入，存在一个对角冷却通道，其输出不属于上述有限基态空间热输出的闭包。
:::

选四个有占据的能级，给它们分配 $B$ 的四行，其他能级用 $(1,0)$。这样仍是完整的两个对角 Kraus 算子。若存在收敛到目标的热输出序列，其能量损失趋零，所以每个被占据能级的泄漏 $\ell_k$ 都趋零。补成的酉块于是给出趋向 $C$ 的四酉 Gram 矩阵，违反 $1/144$ 的间隙。这里不用不同正能隙互异，也不对所有输入给统一的迹范数常数。

## 早期向量问题与混合问题

::: {.remark #vector-obstruction title="原论文推论 8：三个向量与 S2.6" mathesis="collected:narasimhachar-gour-2015-cooling-map-thermal-operation-refutation:3:s8"}
Narasimhachar–Gour 的 arXiv 第 1、2 版附录 II F（S11 页）猜想 2，对 $\mathbb C^3$ 中三个向量已为假。第 3 版 Property S2.6 所规定的秩维数基态空间向量条件，对本例秩二矩阵 $C$ 不成立。
:::

三向量取 $v_0=e_0$、$v_1=e_1$、$v_2=(-ie_0+e_1)/\sqrt2$。早期猜想要求有三个酉矩阵 $U_t$，使对每个 $j$，三个 $U_tv_j$ 构成正交归一组。把它们作为列形成 $M_j$，则 $V_j=M_j^\dagger$ 的归一化迹 Gram 项等于 $v_j^\dagger v_k$。零残差给 $V_2=(iV_0+V_1)/\sqrt2$。共同右乘一个酉矩阵可令 $V_0=I$；此时 $V_2$ 的酉性迫使 $V_1=V_1^\dagger$，而正交性给 $\operatorname{Tr}V_1=0$。所以 $(I+V_1)/2$ 是投影，却应有秩 $3/2$。投影的秩必须为整数，矛盾。这采用 Musat–Rørdam 与 Maestro 使用的先前机制。对 S2.6，规定的两个正交向量会同样构造出代表 $C$ 的二维酉矩阵，违反第 2 章的障碍。

必须区分版本：第 3 版并未把 S2.6 当作普遍成立的断言；本文否定其普适性，不否定它作为充分条件的作用。

::: {.remark #convex-mixtures title="原论文推论 9：最优相干通道的混合不够" mathesis="collected:narasimhachar-gour-2015-cooling-map-thermal-operation-refutation:3:s9"}
第 1 章的冷却通道不属于最优相干冷却通道的闭凸包。
:::

“凸混合”是先随机选一个通道再执行它；“闭”还允许这种混合的极限。最优相干冷却通道在给定保留概率 $q_j$ 时，其相干矩阵取秩一形式 $Q_{jk}=\sqrt{q_jq_k}z_j\overline{z_k}$，$|z_j|=1$，从而同时达到相干模长界。原文推论 S2.10 证明它们的有限混合可由有限基态空间热通道逼近。如果这些混合又能逼近本例通道，对固定输入的输出就会趋于 $\sigma$，违反分离界。这里**使用并保留** S2.10，而不是反驳它。

::: {.remark #dimension-threshold title="原论文推论 10：闭包分离的最小维数" mathesis="collected:narasimhachar-gour-2015-cooling-map-thermal-operation-refutation:3:s10"}
在能级互异且不同正能隙互异的假设下，存在冷却转移落在有限基态空间热输出闭包之外的最小系统维数是四。
:::

一能级无需论证，二能级精确等价由 Narasimhachar–Gour 的 S2.7 给出。三能级的近似结论采用 Maestro 已有的闭包论证：把冷却相干矩阵 $Q$ 的零行列删去，设 $q_j=Q_{jj}>0$，归一化成 $R_{jk}=Q_{jk}/\sqrt{q_jq_k}$。大小至多三的复相关矩阵可分解成相位向量的秩一矩阵的凸混合（Dykema–Juschenko，推论 2.8）。将 $\sqrt{q_j}$ 乘回并补回零行，就把该通道写成最优相干通道的混合，且向下跃迁概率保持相同。S2.10 给出菱形范数意义的热通道逼近，因而每个固定输入的输出也能逼近。第四维则由本例排除。

| 系统维数（上述一般能谱条件） | 精确与近似的区别 |
| --- | --- |
| 1、2 | 冷却转移可精确热实现。 |
| 3 | 已有精确分离；但每个冷却通道仍可任意热逼近。 |
| 4 | 本例连任意逼近也不可能。 |

四是**闭包分离**的阈值，不是精确分离的阈值。实相关矩阵还有另一条边界：Dykema–Juschenko 的定理 3.1 用 Clifford 矩阵给任意维数的精确有限酉矩表示，因此对应的实对角冷却通道可用完全简并的环境精确实现。本例的复相位不是装饰。

## 文献、范围与继续工作

Narasimhachar 与 Gour 在 2015 年提出状态转移等价问题。Maestro v0.1 于 2026 年先给出三能级精确分离并说明三能级闭包；本例不能取代那一优先权。酉矩障碍的脉络更早：Kümmerer（1986，见 Haagerup–Musat 的记载），Dykema–Juschenko（2009 年预印本），Haagerup–Musat（2010 年预印本、2011 年期刊）。本论文把有理四能级障碍用于单个热转移，并给出定量闭包分离与推广。

本结论不改变原文的冷却判据 S2.4、二能级结果、秩一结果和 Gibbs 保持结果；不解决任意正温度、无限环境或催化模型。它也不求 Dykema–Juschenko 另一个平方根例子的精确去极化边界。不要把一篇论文中的不同模型混为一谈。

报告沿着同一条教学路线，并在附录保留估计细节。

::: {.slides src="seminar"}
中英文逐帧对应的学术报告，含讲者备注。
:::

想参与形式化，可从[概率保持到酉块](https://github.com/the-omega-institute/trureturing-requests/issues/76)、[公开固定见证](https://github.com/the-omega-institute/trureturing-requests/issues/77)、[统一 Gram 间隙](https://github.com/the-omega-institute/trureturing-requests/issues/78)或[迹范数闭包分离](https://github.com/the-omega-institute/trureturing-requests/issues/79)开始；后续还有 [Gibbs 尾项](https://github.com/the-omega-institute/trureturing-requests/issues/80)、[参数族](https://github.com/the-omega-institute/trureturing-requests/issues/81)、[四个占据能级](https://github.com/the-omega-institute/trureturing-requests/issues/82)、[向量问题](https://github.com/the-omega-institute/trureturing-requests/issues/83)、[凸混合](https://github.com/the-omega-institute/trureturing-requests/issues/84)与[维数阈值](https://github.com/the-omega-institute/trureturing-requests/issues/85)。每个链接都说明了一条具体待形式化的数学陈述；参与方式见[贡献指南](https://github.com/the-omega-institute/trureturing/blob/dev/docs/CONTRIBUTING.md)。形式证明贡献者与原始数学作者的贡献分别署名。

### 主要原始资料

- Haobo Ma、Wenlin Zhang：[本文第 3 版](https://mathesis-omega-research.apps.chrono-ai.fun/papers/narasimhachar-gour-2015-cooling-map-thermal-operation-refutation?version=3)，第 2–4 节。
- V. Narasimhachar、G. Gour，*Low-temperature thermodynamics with quantum coherence*，2015，[DOI 10.1038/ncomms8689](https://doi.org/10.1038/ncomms8689)，[arXiv 第 3 版](https://arxiv.org/abs/1409.7740v3) S2 F、S2.6–S2.10；早期向量猜想见第 1、2 版。
- K. Dykema、K. Juschenko，*Matrices of unitary moments*，2009 年预印本，2011 年期刊，[DOI 10.7146/math.scand.a-15186](https://doi.org/10.7146/math.scand.a-15186)，推论 2.8、命题 2.10、推论 2.11、定理 3.1。
- U. Haagerup、M. Musat，*Factorization and dilation problems for completely positive maps on von Neumann algebras*，[DOI 10.1007/s00220-011-1216-y](https://doi.org/10.1007/s00220-011-1216-y)，尤其 Remark 4.8(2)。
- M. Musat、M. Rørdam，*Non-closure of quantum correlation matrices and factorizable channels that require infinite dimensional ancilla*，[DOI 10.1007/s00220-019-03449-w](https://doi.org/10.1007/s00220-019-03449-w)，命题 3.2、例 3.4。
- Maestro v0.1，*Minimum Bath Dimension for Qutrit Cooling Maps*，2026-08-27，[第 1.0 版全文](https://pudimphysics.org/research/RO-2026-0004/releases/v1.0/combined.pdf?download=1)，Letter 第 1 页、Supplement 第 1–2 页。

<section hidden="hidden">

```{=typst}
#pagebreak()
```

</section>
