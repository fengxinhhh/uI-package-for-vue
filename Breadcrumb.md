# Breadcrumb 面包屑

显示当前页面的路径，快速返回之前的任意页面。

## 基础用法

适用广泛的基础用法。

![image-20210722020041406](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210722020041406.png)

你需要做的是将面包屑导航所包含的标题名和路径名以数组形式存放并绑定`:breadcrumbData`传送。

**具体如下：**

```
<template>
	<Breadcrumb :breadcrumbData = "dataBase" @handleClick = "getPathAfterClick"></Breadcrumb>
</template>
<script>
	export default{
		data() {
              return {
                  dataBase: [
                      {
                          name:'首页',
                          path:'/',
                      },
                      {
                          name:'活动列表',
                          path:'/list',
                      },
                      {
                          name:'活动详情',
                          path:'/more'
                      },
                      {
                          name:'活动分类',
                          path:'/category'
                      }
                  ]
              }
          },
	}
</script>
```

## 图标分隔符

通过设置`iconSplit`属性自定义你所想要的图标分隔符。

![image-20210722020631598](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210722020631598.png)

```
<template>
	<Breadcrumb :breadcrumbData = "dataBase" iconSplit = '>' @handleClick = "getPathAfterClick"></Breadcrumb>
</template>
<script>
	export default{
		data() {
              return {
                  dataBase: [
                      {
                          name:'首页',
                          path:'/',
                      },
                      {
                          name:'活动列表',
                          path:'/list',
                      },
                      {
                          name:'活动详情',
                          path:'/more'
                      },
                      {
                          name:'活动分类',
                          path:'/category'
                      }
                  ]
              }
          },
	}
</script>
```



## 不同的路由跳转方式

你可以设置`replacePath`属性使面包屑导航的所有跳转都为`replace`方式。

![image-20210722020041406](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210722020041406.png)

默认为`push`的路由跳转，无需设置。

```
<template>
	<Breadcrumb :breadcrumbData = "dataBase" iconSplit = '>' @handleClick = "getPathAfterClick" replacePath></Breadcrumb>
</template>
<script>
	export default{
		data() {
              return {
                  dataBase: [
                      {
                          name:'首页',
                          path:'/',
                      },
                      {
                          name:'活动列表',
                          path:'/list',
                      },
                      {
                          name:'活动详情',
                          path:'/more'
                      },
                      {
                          name:'活动分类',
                          path:'/category'
                      }
                  ]
              }
          },
	}
</script>
```



## Attributes

| 参数             | 说明                           | 类型      | 可选值         | 默认值  |
| ---------------- | ------------------------------ | --------- | -------------- | ------- |
| `breadcrumbData` | 面包屑导航数据源               | `Array`   | ——             | ——      |
| `iconSplit`      | 图标分隔符                     | `String`  | ——             | `/`     |
| `handleClick`    | 跳转后的回调函数，返回导航信息 | `event`   | ——             | ——      |
| `replacePath`    | 设置路由跳转模式               | `Boolean` | `true / false` | `false` |

