# 美句
这个页面会每天更新一个我喜欢的句子，证明我还活着

---

<!-- 基础文字样式 -->
<style>
    .quote-box {
        max-width: 600px;
        margin: 2rem auto;
        padding: 2rem;
        line-height: 1.8;
    }

    /* 样式1：现代简约风 */
    .modern {
        font-family: 'Helvetica Neue', sans-serif;
        color: #2c3e50;
        border-left: 4px solid #3498db;
        padding-left: 1rem;
        font-size: 1.1rem;
    }

    /* 样式2：复古手写风 */
    .vintage {
        font-family: 'Courier New', cursive;
        color: #6b4e3d;
        background: #f9f3e9;
        padding: 1.2rem;
        border-radius: 3px;
        box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
        font-style: italic;
    }

    /* 样式3：优雅衬线体 */
    .elegant {
        font-family: Georgia, serif;
        color: #5a4d4d;
        font-size: 1.2rem;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        letter-spacing: 0.05em;
    }

    /* 样式4：荧光高亮效果 */
    .highlight {
        background: linear-gradient(100deg, transparent 40%, #f9f9d2 40% 60%, transparent 60%);
        font-weight: 500;
        color: #2d3436;
        padding: 0 0.3em;
    }

    /* 样式5：渐变文字效果 */
    .gradient-text {
        background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-weight: bold;
        font-size: 1.3rem;
    }

    /* 样式6：悬浮动画效果 */
    .hover-effect {
        display: inline-block;
        transition: all 0.3s ease;
        cursor: pointer;
        padding: 0.2em 0.5em;
        border-radius: 3px;
    }
    .hover-effect:hover {
        transform: translateY(-3px);
        background: rgba(52, 152, 219, 0.1);
    }
/* 样式7：霓虹灯管效果 */
.neon {
    color: #fff;
    text-shadow: 
        0 0 5px #08f,
        0 0 15px #08f,
        0 0 30px #08f;
    font-family: 'Arial Black', sans-serif;
    animation: neon-pulse 1.5s infinite alternate;
}

/* 样式8：粉笔黑板效果 */
.chalk {
    font-family: 'Chalkboard', cursive;
    color: #f8f8f8;
    background: #1a1a1a;
    padding: 1.5rem;
    border-radius: 8px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    border: 3px dashed #666;
}

/* 样式9：邮票边框效果 */
.stamp {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    border: 2px solid #c0392b;
    border-radius: 8px;
    position: relative;
    background: #fff3f2;
}
.stamp::after {
    content: '';
    position: absolute;
    top: -5px; bottom: -5px;
    left: -5px; right: -5px;
    border: 1px dashed rgba(192,57,43,0.3);
}

/* 样式10：烫金文字效果 */
.gold-emboss {
    color: #d4af37;
    text-shadow: 
        1px 1px 1px #8f7c30,
        -1px -1px 1px #fff9e6;
    font-family: 'Times New Roman', serif;
    letter-spacing: 0.1em;
}

/* 样式11：故障文字效果 */
.glitch {
    position: relative;
    color: #0ff;
    animation: glitch 3s infinite;
}
.glitch::before,
.glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    overflow: hidden;
}
.glitch::before { left: 2px; text-shadow: 2px 0 #f0f; animation: glitch-1 2s infinite; }
.glitch::after { left: -2px; text-shadow: -2px 0 #0f0; animation: glitch-2 2s infinite; }

/* 样式12：引用符号装饰 */
.quote-mark::before {
    content: "“";
    font-size: 3em;
    color: #e74c3c;
    vertical-align: -0.4em;
    margin-right: 0.2em;
}

/* 样式13：打字机效果 */
.typewriter {
    border-right: 3px solid;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 3s steps(20), cursor 0.5s step-end infinite alternate;
}

/* 样式14：模糊悬停效果 */
.blur-hover {
    filter: blur(1px);
    transition: all 0.3s;
}
.blur-hover:hover {
    filter: blur(0);
    text-shadow: 0 0 10px rgba(255,255,255,0.8);
}

/* 动画定义 */
@keyframes neon-pulse {
    from { opacity: 0.8; }
    to { opacity: 1; text-shadow: 0 0 20px #08f, 0 0 40px #08f; }
}

@keyframes glitch {
    0% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
    100% { transform: translate(0); }
}

@keyframes typing { from { width: 0 } }
@keyframes cursor { 50% { border-color: transparent } }
</style>

<div class="quote-box">
<p><b>2025-04-06：</b><span class="vintage">满眼醉意，山河皆你</span></p>
<p><b>2025-04-05：</b><span class="vintage">我以为要是唱的用心良苦，你总会对我多点在乎</span></p>
<p><b>2025-04-04：</b><span class="vintage">穷极所思，可赴千里</span></p>
<p><b>2025-04-03：</b><span class="vintage">喜你为疾，药石无医</span></p>
<p><b>2025-04-02：</b><span class="vintage">此生如若不是你，何愁青丝配白衣</span></p>
</div>

[//]: # ()
[//]: # (<!-- 使用示例 -->)

[//]: # ()
[//]: # (<div class="quote-box">)

[//]: # ()
[//]: # (<span class="modern hover-effect">有些鸟儿是关不住的，它们的羽毛太鲜艳了</span>)

[//]: # ()
[//]: # (    )
[//]: # (<p><span class="vintage">离群索居者，不是野兽，便是神灵</span></p>)

[//]: # ()
[//]: # (    )
[//]: # (<p><span class="elegant">我们都在阴沟里，但仍有人仰望星空</span></p>)

[//]: # ()
[//]: # (    )
[//]: # (<p><span class="highlight gradient-text">每个大人都曾经是孩子，虽然只有少数人记得</span></p>)

[//]: # ()
[//]: # (</div>)

[//]: # ()
[//]: # ()
[//]: # ()
[//]: # (<!-- 使用示例 -->)

[//]: # (<div class="quote-box">)

[//]: # (    <p><span class="neon">代码如诗，逻辑为韵</span></p>)

[//]: # (    )
[//]: # (<p><span class="chalk">知识是黑暗中的火把</span></p>)

[//]: # (    )
[//]: # (<p><span class="stamp gold-emboss">2023珍藏语录</span></p>)

[//]: # (    )
[//]: # (<p><span class="glitch" data-text="数据洪流中的清醒者">数据洪流中的清醒者</span></p>)

[//]: # (    )
[//]: # (<p><span class="quote-mark elegant">真正的发现之旅不在于寻找新大陆，而在于拥有新眼光</span></p>)

[//]: # (    )
[//]: # (<p><span class="typewriter">一行代码，一个世界</span></p>)

[//]: # (    )
[//]: # (<p><span class="blur-hover gradient-text">真理往往藏在迷雾之后</span></p>)

[//]: # (</div>)