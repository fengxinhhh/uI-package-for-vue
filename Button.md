# fl-Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

使用`type`、`round`、`big` 、`small`属性来定义 fl-Button 的样式。

<img src="C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210712094716422.png" alt="image-20210712094716422" style="zoom:150%;" />

```
<div>
    <fl-fl-Button>基本按钮</fl-fl-Button>  
    <fl-Button type = "primary">基本按钮</fl-fl-Button> 
    <fl-Button type = "success">基本按钮</fl-fl-Button> 
    <fl-Button type = "info">基本按钮</fl-fl-Button> 
    <fl-Button type = "warning">基本按钮</fl-fl-Button> 
    <fl-Button type = "danger">基本按钮</fl-fl-Button> 
</div>
<div>
    <fl-Button big>大型按钮</fl-fl-Button>  
    <fl-Button type = "primary" big>大型按钮</fl-fl-Button> 
    <fl-Button type = "success" big>大型按钮</fl-fl-Button> 
    <fl-Button type = "info" big>大型按钮</fl-fl-Button> 
    <fl-Button type = "warning" big>大型按钮</fl-fl-Button> 
    <fl-Button type = "danger" big>大型按钮</fl-fl-Button> 
</div>
<div>
    <fl-Button small>小型按钮</fl-Button>  
    <fl-Button type = "primary" small>小型按钮</fl-Button> 
    <fl-Button type = "success" small>小型按钮</fl-Button> 
    <fl-Button type = "info" small>小型按钮</fl-Button> 
    <fl-Button type = "warning" small>小型按钮</fl-Button> 
    <fl-Button type = "danger" small>小型按钮</fl-Button> 
</div>
<div>
    <fl-Button round>圆角按钮</fl-Button>  
    <fl-Button type = "primary" round>圆角按钮</fl-Button> 
    <fl-Button type = "success" round>圆角按钮</fl-Button> 
    <fl-Button type = "info" round>圆角按钮</fl-Button> 
    <fl-Button type = "warning" round>圆角按钮</fl-Button> 
    <fl-Button type = "danger" round>圆角按钮</fl-Button> 
</div>
```

## 禁用状态

按钮不可用状态。

<img src="C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210712094424728.png" alt="image-20210712094424728" style="zoom:150%;" />

你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```
<div>
      <fl-Button>基本按钮</fl-Button>  
      <fl-Button type = "primary" disabled>基本按钮</fl-Button> 
      <fl-Button type = "success" disabled>基本按钮</fl-Button> 
      <fl-Button type = "info" disabled>基本按钮</fl-Button> 
      <fl-Button type = "warning" disabled>基本按钮</fl-Button> 
      <fl-Button type = "danger" disabled>基本按钮</fl-Button> 
</div>
```

## 文字按钮

没有边框和背景色的按钮。

<img src="C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210712095032981.png" alt="image-20210712095032981" style="zoom:150%;" />

```
<div>
    <fl-Button type = "text">文本按钮</fl-Button> 
    <fl-Button type = "text" disabled>文本按钮</fl-Button> 
</div>
```



## Attributes

| 参数     | 说明         | 类型    | 可选值                                             | 默认值 |
| -------- | ------------ | ------- | -------------------------------------------------- | ------ |
| type     | 类型         | string  | primary / success / warning / danger / info / text | ——     |
| round    | 是否圆角按钮 | boolean | ——                                                 | false  |
| disabled | 是否禁用状态 | boolean | ——                                                 | false  |
| big      | 大型尺寸     | boolean | ——                                                 | false  |
| small    | 小型尺寸     | boolean | ——                                                 | false  |

