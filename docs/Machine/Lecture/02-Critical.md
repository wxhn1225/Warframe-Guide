# 暴击

暴击：使武器有**概率**造成**其他倍数**的伤害
  + **概率**：暴击几率
  + **其他倍数**：暴击倍率

---

## 基础
![CC+CM.png](src/CC+CM.png)
+ **暴击几率**：16%
+ **暴击倍率**：2倍  
有 **16\%** 的概率造成 **2倍** 的伤害，暴击后的伤害就是  <span title="初始面板" style="text-decoration: underline red;">40</span> × <span title="暴击倍率" style="text-decoration: underline red;">2</span> = 80 。

:::tip
鼠标悬停在<span style="color:#ff0000; font-size:15px; font-weight:bold">红色下划线</span>的内容会有详细说明
:::


<img src="./src/CC.png" style="display: inline-block; width: 40%;"><img src="./src/CM.png" style="display: inline-block; width: 39%;">
![CC+CM1.png](src/CC+CM1.png)  
此时我们上2个Mod，算法回顾[上一节内容](01-DMG.md)，可以很轻松得到：
+ **暴击几率**：16% × (1 + <span title="关键延迟" style="text-decoration: underline red;">200%</span>) = 48%
+ **暴击倍率**：2 × (1 + <span title="弱点感应" style="text-decoration: underline red;">120%</span>) = 4.4  
那么此时就有 **48\%** 的概率造成 **4.4倍** 的伤害，暴击后的伤害就是  <span title="初始面板" style="text-decoration: underline red;">40</span> × <span title="暴击倍率" style="text-decoration: underline red;">4.4</span> = 176 。


## 进阶

### 暴击等级
