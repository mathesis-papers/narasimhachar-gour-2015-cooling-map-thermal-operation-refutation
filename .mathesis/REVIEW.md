# 逐条陈述比较

比较对象为公开第 3 版原论文、所钉 Lean 源码、对应 Blueprint 与 Golden/Frozen 声明。这里只记录数学对应关系；不改变目录的证明状态或凭据。所钉声明的种类和成员资格由对应冻结状态给出。

全称命题中的环境量化为任意 m>0、任意 e:Fin m→ℝ、任意守恒酉矩阵；groundSet 收集所有最低能量坐标，groundState 按其基数归一化，IsDensity 是半正定且迹一。实对角哈密顿量表示任意有限厄米环境在能量基下的形式。

| Result | Verdict | Compared declaration | Commit | Scope |
| --- | --- | --- | --- | --- |
| population-blocks | variant | D5/S3/QuantumChannels/CoolingMapThermalOperationRefutation.result | 0eae8e045cb2ba958e2097dbac034f62f9c1dd7a | 原论文引理 1 对所有严格有序四能级及全支撑纯输入量化；公开 result 仅否定全称精确等价。内部 population_support、block_unitary、block_coherences 只处理 0,1,3,7 和 Pm。任意振幅的完整一般引理尚无匹配公开冻结声明。 |
| exact-witness | variant | D5/S3/QuantumChannels/CoolingMapThermalOperationRefutation.result | 0eae8e045cb2ba958e2097dbac034f62f9c1dd7a | 原论文定理 2 指定 H=diag(0,1,3,7)、Pm 为均匀纯态的密度矩阵、factor 的两列 Kraus 及 sigma=BB*/4，并排除所有 m>0、实能谱 e、完整基态空间、守恒酉 U。内部 thermal_impossible 正是这一排除，但为 private；公开 result 的结论只是 ¬claim，不能由其类型读出固定见证。本行保留固定见证，不作 same。请求是公开已有证明的精确见证，不重做否定全称命题的证明。 |
| gram-gap | variant | D5/S3/QuantumChannels/CoolingMapThermalOperationRefutation.result | 0eae8e045cb2ba958e2097dbac034f62f9c1dd7a | 任意整数 g>=1、四个 g 维酉矩阵的 max-entry 距离至少 1/144。内部 gram_null 与 unitary_obstruction 只给零残差的精确矛盾；公开 result 没有矩阵范数或统一常数。 |
| closure-gap | variant | D5/S3/QuantumChannels/CoolingMapThermalOperationRefutation.result | 0eae8e045cb2ba958e2097dbac034f62f9c1dd7a | 固定输入的每个热输出与 sigma 的完整迹范数严格大于 10^-8，排除随环境变化的闭包极限。result 只排除精确实现，缺少泄漏、酉补全及范数估计。 |
| gibbs-tail | variant | D5/S3/QuantumChannels/CoolingMapThermalOperationRefutation.result | 0eae8e045cb2ba958e2097dbac034f62f9c1dd7a | 有限 Gibbs 浴任意激发概率 p 的误差严格大于 10^-8-2p，精确实现需 p>5e-9；p=0 退回推论 4，负右端不提供排除。result 的 groundState 仅为 p=0，且无定量界。 |
| parameter-family | variant | D5/S3/QuantumChannels/CoolingMapThermalOperationRefutation.result | 0eae8e045cb2ba958e2097dbac034f62f9c1dd7a | 任意 a,b>0、a²+b²=1、sin(theta)非零、全支撑归一化纯输入、任意严格有序四能级的精确分离；不含退化边界或统一鲁棒常数。result 的私有 factor、levels、Pm 固定，未量化这些参数。 |
| occupied-levels | variant | D5/S3/QuantumChannels/CoolingMapThermalOperationRefutation.result | 0eae8e045cb2ba958e2097dbac034f62f9c1dd7a | 任意有限系统及至少四个非零能量振幅的纯输入，存在对角冷却通道使输出在热输出闭包外；只需能级互异，不要求正能隙互异。result 未有高维/任意输入/极限结论。 |
| vector-obstruction | variant | D5/S3/QuantumChannels/CoolingMapThermalOperationRefutation.result | 0eae8e045cb2ba958e2097dbac034f62f9c1dd7a | 包含两项：早期 v1/v2 猜想 2 的 C³ 三向量反例（投影秩 3/2 矛盾），及 v3 S2.6 对秩二 C 的失败。公开 result 无向量族、正交组或投影秩结论；v3 源文未断言 S2.6 普适，其充分性保留。 |
| convex-mixtures | variant | D5/S3/QuantumChannels/CoolingMapThermalOperationRefutation.result | 0eae8e045cb2ba958e2097dbac034f62f9c1dd7a | 固定通道在最优相干冷却通道闭凸包外；使用原文 S2.10 的逼近结果。result 没有通道范数、凸混合或闭包结论；不反驳 S2.10 本身。 |
| dimension-threshold | variant | D5/S3/QuantumChannels/CoolingMapThermalOperationRefutation.result | 0eae8e045cb2ba958e2097dbac034f62f9c1dd7a | 能级及正能隙互异假设下，闭包分离最小维数四。依赖先前二能级精确结果及 Maestro 三能级闭包、Dykema–Juschenko 2.8。result 未证明维数下界、三能级逼近或闭包结论；三能级已有精确分离。 |
| exact-universality-refuted | same | D5/S3/QuantumChannels/CoolingMapThermalOperationRefutation.result | 0eae8e045cb2ba958e2097dbac034f62f9c1dd7a | 本行特意只陈述 ¬claim，完整展开 d、严格实能谱、互异正能隙、所有密度矩阵、有限冷却 Kraus 和 m>0 实能谱全基态均匀热实现的全称命题。与公开 theorem result 类型相同；它是 s2 固定见证结果的逻辑后果，不是 s2 整个陈述的等同。Pm 的各项为 1/4，私有 levels/factor 与原文逐项一致。 |

## 检索与证据边界

在上述提交检查了 QuantumChannels 和 Quantum/Thermal 的完整目录清单、相关冻结状态与本模块 Blueprint，并检查 SchurChannelMixedUnitaryDistance、UnitaryKrausMixingInvariance 的公开源码。前者是 Schur 通道与混合酉通道距离关系，后者是 Kraus 表示不变性，均不陈述本稿所列热输出结果。全仓递归树截断，因此改读相关目录；检索结论限于这些对象，不声称穷尽全库。内部私有引理支持固定见证的证明，但不是可以单独引用的公开冻结定理。

本文第 3 版 DOI 10.5281/zenodo.24209470 已核实，双语阅读版已引用；其余十项继续以注明原文和范围的 remark 保留，均有规范共享请求。引用不会改变 Lean 覆盖范围，也不借原问题或先前文献 DOI 冒充本稿证明依据。第 2 章明确解释两项 s2 映射的逻辑关系。

## Exact-version DOI reconciliation

The operator rechecked the already-published version, authors, licence and PDF/source SHA-256 against `verified-existing-doi.json`. Version DOI: 10.5281/zenodo.24209470. Concept DOI: 10.5281/zenodo.24209469. Frozen publisher metadata and manuscript bytes remain unchanged. Existing attributed prose and precise Lean comparisons are retained; this citation repair adds no mathematical claim, receipt or credit.
