---
pageClass: bancopy
---
# 使用教程

## 注册与登录

::: warning ⚠️注意：
- 为防止恶意注册，仅支持[QQ邮箱](https://mail.qq.com)注册。
- 未收到验证码邮件请检查邮箱是否输入有误、以及垃圾信箱。
- CNChat账号与官网账号**相互独立**，数据不互通。
- 为保证账号安全性，目前没有开放密码修改入口，
:::

看到下图界面则代表登录成功：
![登录成功](https://cdn.jerryz.com.cn/gh/YangguangZhou/CNChat-Docs@main/docs/public/2.png)


## 页面介绍

![页面介绍](https://cdn.jerryz.com.cn/gh/YangguangZhou/CNChat-Docs@main/docs/public/3.png)


## 换车
<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

## 换车

1. 上车（选择账号）

- 由于ChatGPT本质上是使用后台内置的<span style="color: #da9c06;">Plus账号</span>、<span style="color: #355adb;">Team账号</span>、<span style="color: #8b5cf6;">Pro账号</span>，在次数用完时就需要切换到其他账号使用。

1. <span style="color: #da9c06;">Plus账号</span>4o的限制是每3小时50次（官网的限制）
2. <span style="color: #355adb;">Team账号</span>4o的限制是每3小时100次（官网的限制）
3. <span style="color: #8b5cf6;">Pro账号</span>提供无限制使用GPT-4o、o3和o4-mini等模型，具备更强的推理能力和更快响应速度
- 在这里可以看到当前的账号列表、编号、账号类型丨状态
- 账号类型有三种：<span style="color: #da9c06;">Plus</span>、<span style="color: #355adb;">Team</span>、<span style="color: #8b5cf6;">Pro</span>和<span style="color: #007ec6;">Free</span>，<span style="color: #da9c06;">Plus</span>和<span style="color: #355adb;">Team</span>账号可以使用所有模型，<span style="color: #8b5cf6;">Pro</span>账号提供最高级的无限制访问，<span style="color: #007ec6;">Free</span>账号则是普通账号，只能使用GPT 4o和o4 mini。

1. 状态为<span style="background-color: rgba(183, 237, 177, 0.8);">空闲丨推荐</span>，代表该账号当前次数充足，可放心使用。
2. 状态为<span style="background-color: rgba(254, 212, 164, 0.8);">繁忙丨可用</span>，代表该账号该时段已消耗了部分次数。
3. 状态为<span style="background-color: rgba(251, 191, 188, 0.8);">PLUS停运丨将于xx秒恢复</span>，代表该账号该时段已无可用Plus次数，并会告知在多久后能用。
4. 状态为<span style="background-color: rgba(187, 191, 196, 0.8);">翻车丨不可用</span>，代表该账号已下线。

2. 换车
- 当您在使用过程中，遇见当前账号使用次数耗尽时（如下图）：

![次数耗尽](https://cdn.jerryz.com.cn/gh/YangguangZhou/CNChat-Docs@main/docs/public/4.png)

- 此时需要您点击右上角的<span style="background-color: rgba(205, 178, 250, 0.8);">换车</span>按钮，回到上车界面选择其他账号。

::: tip 📌 解释
CNChat做了些技术上的处理，把您所有的对话都保存到一起了，当要查阅某个对话记录时，就可以很方便的找到对应的对话。
如果不保存到一起，就需要您记住在哪个账号进行的会话，显然这是十分麻烦的事情。
:::

3. 换车并继续对话
- 在上面提到当前使用的Plus账号无次数时，需开启一个新对话才能继续使用，但此时已经和GPT进行了一些对话，而开启新对话又要从头开始，确实会带来一些麻烦。
- 为了能续上对话，可以把当前对话的所有内容复制，再开启一个新的对话粘贴进去并带上新的问题，大部分场景都是可以续上对话的，下面演示一下。
    1. 全选并复制当前对话的所有上下文内容。
    ![全选并复制](https://cdn.jerryz.com.cn/gh/YangguangZhou/CNChat-Docs@main/docs/public/6.png)
    2. 开启新的对话，粘贴前面复制的内容，并且带上新的问题，点击发送。
    ![粘贴并发送](https://cdn.jerryz.com.cn/gh/YangguangZhou/CNChat-Docs@main/docs/public/7.png)
    3. 通过回答，可以看到GPT是可以识别出前面的对话内容的，并且继续前面的对话（因为复制的内容是有You：ChatGPT：的前缀的，所以GPT可以正确的识别出提问和回答）。
    ![回答](https://cdn.jerryz.com.cn/gh/YangguangZhou/CNChat-Docs@main/docs/public/8.png)


当您理解并掌握切换账号的原因和机制，就可以非常丝滑的使用CNChat了

::: info Claude换车：
- Claude的使用也是一样的，达到限制后需要点击换车才能使用，同样需要复制上下文内容才能继续对话
:::

## 联网功能​

联网功能是一个非常强大的功能，可以帮助您快速查询信息，解决问题。​

- 输入`/`可快速调用联网功能。​
![联网](https://cdn.jerryz.com.cn/gh/YangguangZhou/CNChat-Docs@main/docs/public/22.png)
- 在对话中带`联网查询`，`帮我搜索`等关键词，也可以联网功能，值得一提的是，4o模型更新后会根据语境判断是否需要联网，不同于之前需要关键词才能触发。​
- 当触发联网功能后，显示正在搜索"xxx"，说明正在查询中，请耐心等待。​
![联网中](https://cdn.jerryz.com.cn/gh/YangguangZhou/CNChat-Docs@main/docs/public/23.png)

![联网结果](https://cdn.jerryz.com.cn/gh/YangguangZhou/CNChat-Docs@main/docs/public/24.png)

## Canvas画布功能

Canvas采用双屏布局，允许用户在独立窗口中与ChatGPT共同处理任务，超越了传统聊天框的简单对话模式。能够理解更广泛的上下文，支持在线编辑文档、代码审查、内容改写等功能。

![Canvas](https://cdn.jerryz.com.cn/gh/YangguangZhou/CNChat-Docs@main/docs/public/33.png)

## Deep Research 深度研究功能

通过自动浏览网络，生成包含引用的详细报告。用户输入查询后，深度研究会在5到30分钟内分析和综合来自网络的文本、图像和PDF等多种信息来源，最终生成一份全面的报告。

![Deep Research](https://cdn.jerryz.com.cn/gh/YangguangZhou/CNChat-Docs@main/docs/public/34.png)

## 画图功能

OpenAI于2025年3月为其多模态模型GPT-4o上线了原生图像生成功能，该功能直接嵌入GPT-4o的架构中，与文本、音频等能力协同工作。这项技术采用自回归模型，能精准地在图像中渲染文本内容，并严格遵循复杂的指令提示，理解对话上下文，甚至对上传的图像进行二次创作或风格转换。GPT-4o的图像生成能力可用于生成各种风格的绘画、海报、广告、漫画和电商图片等。其主要优势在于能够处理多达10-20个不同对象的复杂指令，并能通过多轮对话进行图像内容的动态调整和迭代

输入`/`可快速调用画图功能。​
![画图](https://cdn.jerryz.com.cn/gh/YangguangZhou/CNChat-Docs@main/docs/public/25.png)

更多高级画图功能介绍请见[进阶教程](https://cn.jerryz.com.cn/advance/dalle3)
​
## 高级语音模式
![语音按钮](https://cdn.jerryz.com.cn/gh/YangguangZhou/CNChat-Docs@main/docs/public/28.png)
点击上图按钮，可以与GPT进行语音对话并看见画面(通过屏幕或摄像头)，让他帮你实时处理问题。​
![语音聊天](https://cdn.jerryz.com.cn/gh/YangguangZhou/CNChat-Docs@main/docs/public/29.png)
​
## 设置界面语言​
点击右上角可以设置界面语言，自动检测环境的默认语言，如有需求可以更改。​
![设置语言](https://cdn.jerryz.com.cn/gh/YangguangZhou/CNChat-Docs@main/docs/public/30.png)
​
## 键盘快捷操作
点击右下角可以进入帮助中心，深入了解ChatGPT。​
![帮助中心](https://cdn.jerryz.com.cn/gh/YangguangZhou/CNChat-Docs@main/docs/public/31.png)
​