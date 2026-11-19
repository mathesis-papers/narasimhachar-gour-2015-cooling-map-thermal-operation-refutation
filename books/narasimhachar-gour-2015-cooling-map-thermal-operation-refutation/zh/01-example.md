# 用直角三角形造出目标态

## 从概率表到相干表

一个四能级态用 $4\times4$ 矩阵 $\rho$ 表示。它必须是半正定的（对每个复向量 $x$ 都有 $x^\dagger\rho x\geq0$），且对角线之和为 $1$；$\dagger$ 表示转置后取复共轭。这保证表格对应合法概率。纯态 $|\psi\rangle$ 的矩阵是 $|\psi\rangle\langle\psi|$。

取每个振幅都是 $1/2$ 的输入：

$$
\begin{gathered}
H_S=\operatorname{diag}(0,1,3,7),\\
|+\rangle=\frac12\sum_{j=0}^3|j\rangle,\qquad \rho=|+\rangle\langle+|.
\end{gathered}
$$

因此 $\rho$ 的每一个元素都是 $1/4$。六个正能隙为 $1,2,3,4,6,7$，彼此不同；这满足原问题对能级及正能隙的非简并要求。

取四个二维行向量组成矩阵

$$
\begin{gathered}
B=\begin{pmatrix}1&0\\0&1\\3/5&4/5\\3/5&4i/5\end{pmatrix},\\
C=BB^\dagger,\qquad \sigma=C/4.
\end{gathered}
$$

每行长度都是 $1$：第三、四行用到 $(3/5)^2+(4/5)^2=1$。所以 $C$ 的对角线全是 $1$，且 $x^\dagger Cx=\|B^\dagger x\|^2\geq0$。前两行独立，因此 $C$ 的秩为二。于是 $\sigma$ 是合法的秩二态，四个能级概率仍全是 $1/4$。

称 $C$ 为 **Gram 矩阵**：它逐项记录行向量的内积。一个具体相干元素是

$$
C_{23}=\frac9{25}-\frac{16}{25}i,\qquad
\sigma_{23}=\frac9{100}-\frac4{25}i.
$$

这也提醒我们复共轭不能漏掉：$C_{32}=\overline{C_{23}}$。目标的变化不是“概率搬到了较低一层”，而是非对角项的大小与复相位改变了。

## 两种“允许”

**冷却映射**用一组矩阵 $K_r$ 规定 $\Phi(\rho)=\sum_rK_r\rho K_r^\dagger$，且 $\sum_rK_r^\dagger K_r=I$。每个 $K_r$ 必须是对角矩阵，或是单个向下跃迁 $c|j\rangle\langle k|$（$j<k$）。这些矩阵叫 Kraus 算子；单个分支不必是可逆动作。它们的总和才是保留总概率的通道。

本例只需两项：

$$
\begin{gathered}
K_0=\operatorname{diag}(1,0,3/5,3/5),\\
K_1=\operatorname{diag}(0,1,4/5,4i/5).
\end{gathered}
$$

逐个对角位置检查，平方模之和都是 $1$，所以完整性条件成立。输入每项是 $1/4$，于是

$$
\Phi(\rho)_{jk}=\frac14\sum_{r=0}^1B_{jr}\overline{B_{kr}}=C_{jk}/4.
$$

这给出允许的冷却通道，且它对每个输入都保留能级概率。名称“冷却”允许不降能的情形，就像“不增加”允许相等。

另一种规则是**有限基态空间热操作**。取任意有限非零环境，能量算子 $H_A$，完整基态投影 $P_0$，$g=\operatorname{Tr}P_0\geq1$。令

$$
\begin{gathered}
\mathcal T(\rho)=\operatorname{Tr}_A\bigl[U(\rho\otimes P_0/g)U^\dagger\bigr],\\
[U,H_S\otimes I+I\otimes H_A]=0.
\end{gathered}
$$

$U$ 是酉矩阵，表示联合系统中的可逆、保长度演化；方括号为交换子，等于零表示总能量守恒。$\operatorname{Tr}_A$ 是忽略环境后的系统状态。$P_0/g$ 对每个最低能量方向给相同权重，并非任意挑一个纯基态。

冷却通道已经把 $\rho$ 送到 $\sigma$。下一章要检验的是：即便热操作可以任意选择环境和 $U$，是否还有任何一个能完成**这同一对状态**的变化？
