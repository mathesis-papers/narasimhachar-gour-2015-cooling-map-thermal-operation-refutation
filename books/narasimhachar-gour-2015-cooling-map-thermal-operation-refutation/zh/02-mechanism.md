# 两个相干关系为何不能同时成立

## 概率不变，向下跃迁只能全部消失

想象从四层楼往下搬沙子。只许向下搬，且每一层最后的沙量完全不变，那么实际上没有搬动。把这个直觉写成平均能量的式子，就能处理量子环境。

记 $P_{j|k}$ 为系统从第 $k$ 个能级到第 $j$ 个能级的概率，输入概率 $p_k=|\alpha_k|^2$ 全部为正。环境从基态出发，不能提供能量，所以 $j>k$ 时 $P_{j|k}=0$。能量守恒还说明：对固定的输出能级和环境能量，至多有一个输入能级可贡献振幅，因此在输出概率中没有不同输入能级的交叉项。于是概率确实按经典矩阵 $P$ 变化。

若所有概率不变，总能量损失为零，而

$$
0=\sum_{j<k}(E_k-E_j)P_{j|k}p_k.
$$

各项非负，且每个能隙和 $p_k$ 都严格为正。因此所有向下跃迁概率也为零。这不是把相干性忽略掉的假设，而是先用能量守恒消掉概率交叉项，再由非负性得到的结论。

::: {.remark #population-blocks title="原论文引理 1：概率保持迫使酉块" mathesis="collected:narasimhachar-gour-2015-cooling-map-thermal-operation-refutation:3:s1"}
对任意严格递增的四能级能谱及归一化纯输入 $|\psi\rangle=\sum_k\alpha_k|k\rangle$，若每个 $\alpha_k\ne0$ 且上述热操作保持其所有能级概率，则存在四个 $g\times g$ 酉矩阵 $V_0,\ldots,V_3$，使

$$
\mathcal T(|\psi\rangle\langle\psi|)_{jk}
=\alpha_j\overline{\alpha_k}\,\frac{\operatorname{Tr}(V_jV_k^\dagger)}g.
$$

这是 Haobo Ma 与 Wenlin Zhang 第 3 版第 2 节的书面结果；它允许任意有限环境及任意基态简并度。
:::

为什么是酉矩阵？向下跃迁的概率是振幅平方的和。和为零迫使每个振幅为零。系统保持在第 $k$ 级时，环境也必须保持最低能量。于是联合演化在“第 $k$ 级乘上环境基态空间”上成为一个 $g\times g$ 块 $V_k$。联合矩阵的列正交，而这个块有相同的输入输出维数，因此它是酉的。最后忽略环境，就得到上面的归一化迹。它是四个矩阵之间的内积，恰好又是一个 Gram 矩阵。

## 让 Gram 矩阵传递线性关系

假设目标 $\sigma=C/4$ 可由热操作得到。由于输入振幅都是 $1/2$，引理要求

$$
\frac1g\operatorname{Tr}(V_jV_k^\dagger)=C_{jk}.
$$

矩阵 $B$ 的行满足两个特别简单的关系，因而 $V_j$ 也必须满足同样的关系：

$$
\begin{gathered}
V_2=aV_0+bV_1,\\
V_3=aV_0+ibV_1,\\
a=3/5,\qquad b=4/5.
\end{gathered}
$$

理由是：把差 $R=V_2-aV_0-bV_1$ 的长度平方展开，只会用到两两内积。这些内积与 $B$ 的行完全相同，而对应行的差为零。因此 $\operatorname{Tr}(RR^\dagger)/g=0$。它是所有元素平方模的平均，迫使 $R=0$。另一个关系相同。

令 $X=V_0V_1^\dagger$。由于 $a^2+b^2=1$，展开两次“酉矩阵乘自己的共轭转置等于 $I$”，得到

$$
I=I+ab(X+X^\dagger),\qquad
I=I+iab(X^\dagger-X).
$$

因 $ab\ne0$，第一个式子说 $X^\dagger=-X$，第二个说 $X^\dagger=X$。两者合在一起迫使 $X=0$。然而两个酉矩阵的乘积仍是酉矩阵，不可能在非零空间上等于零。矛盾。

::: {.remark #exact-witness title="原论文定理 2：固定输入输出对的精确分离" mathesis="collected:narasimhachar-gour-2015-cooling-map-thermal-operation-refutation:3:s2"}
第 1 章给出的 $H_S,\rho,\sigma,K_0,K_1$ 构成一个冷却转移 $\rho\mapsto\sigma$；对任意非零有限环境能谱、任意基态简并度和任意总能量守恒酉矩阵，均没有上述形式的热操作实现它。以上给出了第 2 节的论证。
:::

## 形式证明公开陈述了什么？

下面把定理 2 的一个逻辑后果单独陈述。设 $\mathcal A$ 是如下全称命题：对所有有限系统维数 $d$，所有严格递增且不同正能隙互异的实能谱 $E$，以及所有密度矩阵 $\rho,\sigma$，只要存在有限个对角或单向下跃迁 Kraus 算子构成的冷却转移，就存在一个正维数有限环境、完整基态空间均匀态和守恒总能量的联合酉矩阵实现同一转移。

::: {.theorem #exact-universality-refuted title="精确转移的普遍等价性不成立" mathesis="collected:narasimhachar-gour-2015-cooling-map-thermal-operation-refutation:3:s2" lean="D5/S3/QuantumChannels/CoolingMapThermalOperationRefutation.result"}
$\neg\mathcal A$。亦即上述冷却到热操作的全称精确实现断言为假。
:::

链接中的 Lean 证明核验了这条普遍精确实现规则不成立。证明使用第 1 章的四能级构造，但上面经过核验的陈述只断言普遍规则失败。定理 2 指定了具体的反例，结论更具体；下一章关于逼近误差的定量界仍是另外的书面结果。
