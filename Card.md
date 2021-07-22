

# Card 卡片

将信息聚合在卡片容器中展示。

## 基础用法

包含左侧标题、右侧标题、内容和底部内容。

![image-20210719102917818](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210719102917818.png)

Card 组件包括`header-left`、`header-right`、`content`和`footer`部分组成，`header`部分需要有显式具名 slot 分发，同时也是可选的。

```
<fl-Card class = "card">
    <div slot = "header-left">
    	<span>标题左侧</span>
    </div>
    <div slot = "header-right">
    	<fl-Button type = "danger" circle>操作</fl-Button>
    </div>
    <div slot = "content" class = "content">
    	<p v-for = "item in data" :key = "item">{{item}}</p>
    </div>
    <div slot = "footer" class = "footer">
    	footer
    </div>
</fl-Card>
<script>
export default {
  data() {
      return {
          data: ['主题内容1','主题内容2','主题内容3','主题内容4']
      }
  },
}
</script>
<style>
.card{
  width:700px;
  height:600px;
  padding:15px;
  margin:30px 0 0 50px;
}
.content{
  margin-top:30px;
  height:450px;
}
.footer{
  display: flex;
}
</style>
```

## 边框卡片

为卡片添加`border`属性即可添加边框。

![image-20210719103439518](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210719103439518.png)

```
<fl-Card class = "card" border>
    <div slot = "header-left">
    	<span>标题左侧</span>
    </div>
    <div slot = "header-right">
    	<fl-Button type = "danger" circle>操作</fl-Button>
    </div>
    <div slot = "content" class = "content">
    	<p v-for = "item in data" :key = "item">{{item}}</p>
    </div>
    <div slot = "footer" class = "footer">
    	footer
    </div>
</fl-Card>
<script>
export default {
  data() {
      return {
          data: ['主题内容1','主题内容2','主题内容3','主题内容4']
      }
  },
}
</script>
<style>
.card{
  width:700px;
  height:600px;
  padding:15px;
  margin:30px 0 0 50px;
}
.content{
  margin-top:30px;
  height:450px;
}
.footer{
  display: flex;
}
</style>
```



## 简单卡片

卡片可以只有内容区域。

![image-20210719103343583](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210719103343583.png)

```
<fl-Card class = "card" border>
    <div slot = "content" class = "content">
    	<p v-for = "item in data" :key = "item">{{item}}</p>
    </div>
</fl-Card>
<script>
export default {
  data() {
      return {
          data: ['主题内容1','主题内容2','主题内容3','主题内容4']
      }
  },
}
</script>
<style>
.card{
  width:700px;
  height:600px;
  padding:15px;
  margin:30px 0 0 50px;
}
.content{
  margin-top:30px;
  height:450px;
}
.footer{
  display: flex;
}
</style>
```

## 阴影卡片

阴影包裹的卡片。

![image-20210719103636084](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210719103636084.png)

为`Fl-Card`添加`shadow`即可生效。

```
<fl-Card class = "card" shadow>
    <div slot = "header-left">
    	<span>标题左侧</span>
    </div>
    <div slot = "header-right">
    	<fl-Button type = "danger" circle>操作</fl-Button>
    </div>
    <div slot = "content" class = "content">
    	<p v-for = "item in data" :key = "item">{{item}}</p>
    </div>
    <div slot = "footer" class = "footer">
    	footer
    </div>
</fl-Card>
<script>
export default {
  data() {
      return {
          data: ['主题内容1','主题内容2','主题内容3','主题内容4']
      }
  },
}
</script>
<style>
.card{
  width:700px;
  height:600px;
  padding:15px;
  margin:30px 0 0 50px;
}
.content{
  margin-top:30px;
  height:450px;
}
.footer{
  display: flex;
}
</style>
```

## 带图片的精美卡片

支持任意形式的插槽添加，灵活简洁。

![image-20210719103911350](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210719103911350.png)

```
<fl-Card class = "card" shadow headerBorder>
      <div slot = "header-left">
        <span>标题左侧</span>
      </div>
      <div slot = "header-right">
        <fl-Button type = "danger" circle>操作</fl-Button>
      </div>
      <div slot = "content" class = "content">
        <img src = "../src/assets/image/5.jpg" width = "200" height = "200">
        <p>好看的小姐姐</p>
      </div>
      <div slot = "footer" class = "footer">
        <span>2021-7-19</span>
        <fl-Button type = "danger" circle>操作</fl-Button>
      </div>
</fl-Card>
<style>
.card{
  width:500px;
  height:400px;
  padding:15px;
  margin:30px 0 0 50px;
}
.content{
  margin-top:30px;
  height:300px;
}
.footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
```



## Attributes

| 参数     | 说明     | 类型      | 可选值                                    | 默认值  |
| -------- | -------- | --------- | ----------------------------------------- | ------- |
| `border` | 带有边框 | `boolean` | `true/false`                              | `false` |
| `shadow` | 带有阴影 | `boolean` | `true/false`                              | `false` |
| `slot`   | 插槽     | `tag`     | `header-left/header-right/content/footer` | ——      |
|          |          |           |                                           |         |
|          |          |           |                                           |         |

