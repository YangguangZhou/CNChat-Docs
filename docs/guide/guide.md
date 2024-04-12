# 使用教程

## 注册与登录

::: warning ⚠️注意：
- 为防止恶意注册，仅支持[QQ邮箱](https://mail.qq.com)注册。
- 未收到验证码邮件请检查邮箱是否输入有误、以及垃圾信箱。
- RawChat账号与官网账号**相互独立**，数据不互通。
- 为保证账号安全性，目前没有开放密码修改入口，
要改密码请将需要修改的密码发送邮件到 RawChat@qq.com。
:::

看到下图界面则代表登录成功：
![登录成功](https://cdn.jerryz.com.cn/gh/YangguangZhou/RawChat-Docs@main/docs/public/2.png)


## 页面介绍

![页面介绍](https://cdn.jerryz.com.cn/gh/YangguangZhou/RawChat-Docs@main/docs/public/3.png)


## 换车
1. 上车（选择账号）
- 由于RawChat本质上是使用后台内置的<span style="color: #da9c06;">Plus账号</span>、<span style="color: #355adb;">Team账号</span>，在次数用完时就需要切换到其他账号使用。
    1. <span style="color: #da9c06;">Plus账号</span>4.0的限制是每3小时40次（官网的限制）
    2. <span style="color: #355adb;">Team账号</span>4.0的限制是每3小时100次（官网的限制）
- 在这里可以看到当前的账号列表、编号、账号类型丨状态
- 账号类型有两种：<span style="color: #da9c06;">3.5</span>和<span style="color: #ae69ff;">Plus</span>，前者是GPT 4.0，后者则是GPT 3.5。
    1. 状态为<span style="background-color: rgba(183, 237, 177, 0.8);">空闲丨推荐</span>，代表该账号当前次数充足，可放心使用。
    2. 状态为<span style="background-color: rgba(254, 212, 164, 0.8);">繁忙丨可用</span>，代表该账号该时段已消耗了部分次数。
    3. 状态为<span style="background-color: rgba(251, 191, 188, 0.8);">PLUS停运丨将于xx秒恢复</span>，代表该账号该时段已无可用Plus次数，并会告知在多久后能用。
    4. 状态为<span style="background-color: rgba(187, 191, 196, 0.8);">翻车丨不可用</span>，代表该账号已下线。

2. 换车
- 当您在使用过程中，遇见当前账号使用次数耗尽时（如下图）：

![次数耗尽](https://cdn.jerryz.com.cn/gh/YangguangZhou/RawChat-Docs@main/docs/public/4.png)

- 此时需要您点击右上角的<span style="background-color: rgba(205, 178, 250, 0.8);">换车</span>按钮，回到上车界面选择其他账号。

3. 跨车会话
- 跨车会话为点击对话切换账号，假如有A、B、C三条对话记录，A对话属于号1，B对话属于号2，C对话属于号3（在哪个号进行对话就属于哪个号）。
- 如图，如果要在号1打开号2的对话，就需要进行跨车验证。
![跨车验证](https://cdn.jerryz.com.cn/gh/YangguangZhou/RawChat-Docs@main/docs/public/5.png)
- 点击重置按钮即可完成跨车验证。

::: tip 📌 解释
RawChat做了些技术上的处理，把您所有的对话都保存到一起了，当要查阅某个对话记录时，就可以很方便的找到对应的对话。
如果不保存到一起，就需要您记住在哪个账号进行的会话，显然这是十分麻烦的事情。
:::

4. 换车并继续对话
- 在上面提到当前使用的Plus账号无次数时，需开启一个新对话才能继续使用，但此时已经和GPT进行了一些对话，而开启新对话又要从头开始，确实会带来一些麻烦。
- 为了能续上对话，可以把当前对话的所有内容复制，再开启一个新的对话粘贴进去并带上新的问题，大部分场景都是可以续上对话的，下面演示一下。
    1. 全选并复制当前对话的所有上下文内容。
    ![全选并复制](https://cdn.jerryz.com.cn/gh/YangguangZhou/RawChat-Docs@main/docs/public/6.png)
    2. 开启新的对话，粘贴前面复制的内容，并且带上新的问题，点击发送。
    ![粘贴并发送](https://cdn.jerryz.com.cn/gh/YangguangZhou/RawChat-Docs@main/docs/public/7.png)
    3. 通过回答，可以看到GPT是可以识别出前面的对话内容的，并且继续前面的对话（因为复制的内容是有You：ChatGPT：的前缀的，所以GPT可以正确的识别出提问和回答）。
    ![回答](https://cdn.jerryz.com.cn/gh/YangguangZhou/RawChat-Docs@main/docs/public/8.png)


当您理解并掌握切换账号的原因和机制，就可以非常丝滑的使用RawChat了