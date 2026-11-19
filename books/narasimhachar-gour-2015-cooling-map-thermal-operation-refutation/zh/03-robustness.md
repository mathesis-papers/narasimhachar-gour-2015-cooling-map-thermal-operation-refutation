# 为什么再大的有限浴也不能逼近？

精确矛盾不一定抗误差。要排除极限，必须让误差下界与环境大小无关。作者把上一章的“残差为零”换成“残差很小”。以下三个结果来自原论文第 3 节的书面证明；公开 Lean 定理的结论没有这些定量断言。

对 $g\times g$ 矩阵定义归一化长度

$$
\|A\|_{2,g}=\sqrt{\operatorname{Tr}(AA^\dagger)/g}.
$$

除以 $g$ 很关键：每个酉矩阵的长度都正好是 $1$，与环境基态简并度无关。

::: {.remark #gram-gap title="原论文引理 3：统一 Gram 间隙" mathesis="collected:narasimhachar-gour-2015-cooling-map-thermal-operation-refutation:3:s3"}
对每个整数 $g\geq1$ 及任意四个 $g\times g$ 酉矩阵，令 $D_{jk}=\operatorname{Tr}(V_jV_k^\dagger)/g$。则

$$
\delta:=\max_{j,k}|D_{jk}-C_{jk}|\geq\frac1{144}.
$$
:::

展开两个残差的长度平方，用 $D$ 与 $C$ 各元素最多相差 $\delta$，得到残差长度至多 $(1+a+b)\sqrt\delta=12\sqrt\delta/5$。令 $A=aV_0+bV_1$，其算子范数（最大长度放大倍数）至多 $a+b=7/5$。因 $V_2$ 是酉矩阵，

$$
\|AA^\dagger-I\|_{2,g}
\leq(7/5+1)\|A-V_2\|_{2,g}
\leq\frac{144}{25}\sqrt\delta.
$$

另一个组合也有相同界。除以 $ab=12/25$，便得 $\|X+X^\dagger\|_{2,g}\leq12\sqrt\delta$ 和 $\|X^\dagger-X\|_{2,g}\leq12\sqrt\delta$。将二者相减再除以二，三角不等式给出

$$
1=\|X\|_{2,g}\leq12\sqrt\delta.
$$

平方即为 $\delta\geq1/144$。任何大小的矩阵都受同一障碍限制。

## 从近似概率到近似酉块

近似到达目标的热操作不必精确保留概率，所以还不能直接用上一章引理。作者补上这座桥。记 $\tau=\mathcal T(\rho)$，$\ell_k=1-P_{k|k}$，平均能量损失为 $L=\operatorname{Tr}(H_S(\rho-\tau))$。最小正能隙是 $1$，所以

$$
L=\frac14\sum_{j<k}(E_k-E_j)P_{j|k}\geq\frac14\sum_k\ell_k.
$$

环境基态到基态的块 $T_k$ 可能只有收缩性。用奇异值分解把它补成酉矩阵 $V_k$：每个奇异值 $0\leq s\leq1$ 满足 $(1-s)^2\leq1-s^2$，因而 $\|T_k-V_k\|_{2,g}^2\leq\ell_k$。

将环境混合态看成更大纯态的一部分，再比较两套输出向量，可得 $\|\tau-D/4\|_1\leq2\sqrt{8L}$。这里 $\|M\|_1$ 是奇异值之和，称为**迹范数**；我们不用常见的再除以二的距离约定。

设 $\varepsilon=\|\tau-\sigma\|_1$。因输入和目标的平均能量相同，且 $\|H_S-(7/2)I\|_\infty=7/2$，有 $L\leq7\varepsilon/2$，于是

$$
\max_{j,k}|D_{jk}-C_{jk}|\leq4\varepsilon+16\sqrt{7\varepsilon}.
$$

在 $\varepsilon\leq10^{-8}$ 时，右侧至多 $0.00000004+0.004234<0.006944<1/144$，与统一间隙矛盾。

::: {.remark #closure-gap title="原论文推论 4：迹范数分离" mathesis="collected:narasimhachar-gour-2015-cooling-map-thermal-operation-refutation:3:s4"}
对固定输入 $\rho$，每个上述有限基态空间热输出 $\tau$ 均满足 $\|\tau-\sigma\|_1>10^{-8}$。因此 $\sigma$ 不属于这些输出的闭包；即使允许环境大小沿序列无限增长也不能收敛到它。
:::

## 给稍微温暖的浴留下多大余地？

有限 Gibbs 浴若有激发态总概率 $p$，其状态可写为 $(1-p)P_0/g+p\omega_{\mathrm{exc}}$，与 $P_0/g$ 的迹范数差为 $2p$。对同一个联合酉矩阵，忽略环境不会放大这个差。由三角不等式得到：

::: {.remark #gibbs-tail title="原论文推论 5：有限 Gibbs 尾项" mathesis="collected:narasimhachar-gour-2015-cooling-map-thermal-operation-refutation:3:s5"}
对相同固定输入和目标，每个有限 Gibbs 浴的守恒能量输出满足 $\|\tau-\sigma\|_1>10^{-8}-2p$。精确实现必须有 $p>5\cdot10^{-9}$。
:::

这是必要条件，不是充分条件。当右侧为负时，这个界没有排除能力；它并未解决任意正温度下的可达性。
