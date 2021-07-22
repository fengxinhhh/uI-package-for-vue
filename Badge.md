# Badge 标记

出现在按钮、图标旁的数字或状态标记。

## 基础用法

展示新消息数量。

![img](file:///C:\Users\mi\AppData\Roaming\Tencent\Users\1244200081\QQ\WinTemp\RichOle\_ZPB~S[XIRQ~QFFW]VGBK01.png)

通过绑定`tagNum`传递显示消息数量。

```
<fl-Badge :tagNum = "5">
	评论
</fl-Badge>
<fl-Badge :tagNum = "9">
	回复
</fl-Badge>
<fl-Badge :tagNum = "12">
	点赞
</fl-Badge>
```



## 自定义颜色

改变消息冒泡框的背景颜色。

```
<fl-Badge :tagNum = "5">
	评论
</fl-Badge>
<fl-Badge tagColor = 'blue' :tagNum = "9">
	回复
</fl-Badge>
<fl-Badge tagColor = 'green' :tagNum = "12">
	点赞
</fl-Badge>
```

![image-20210721211351764](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210721211351764.png)

使用`tagColor`，自定义任意颜色，默认为霸气红。



## 最大值

当`tagNum`超出最大值，使用`+`代替。

![image-20210721210713859](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210721210713859.png)

配置`max`属性。

```
<Badge :tagNum = "5" :max = "6">
	评论
</Badge>
<Badge tagColor = 'blue' :tagNum = "5" :max = "2">
	回复
</Badge>
<Badge tagColor = 'green' :tagNum = "12" :max = "10">
	点赞
</Badge>
```



## Attributes

| 参数       | 说明         | 类型     | 可选值 | 最大值 |
| ---------- | ------------ | -------- | ------ | ------ |
| `tagNum`   | 描述值       | `String` | `>=0`  | ——     |
| `tagColor` | 冒泡框背景色 | `String` | ——     | ——     |
| `max`      | 所支持最大值 | `String` | `>=0`  | ——     |

