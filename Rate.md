# Rate 评分

评分组件

## 基础用法

点击后锁定当前评分。

![image-20210721202601789](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210721202601789.png)

```
<template>
	<Rate @handleClick = 'getStarNum'></Rate>
</template>
export default {
    <script>
		methods: {
            getStarNum(num){
              console.log(num)
            }
         },
    </script>
}	
```

## 不同大小

添加`size`属性。

![image-20210721203007037](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210721203007037.png)

```
<template>
	<Rate size = "40" @handleClick = 'getStarNum'></Rate>
</template>
export default {
    <script>
		methods: {
            getStarNum(num){
              console.log(num)
            }
         },
    </script>
}	
```

## 显示评分文本

添加`showText`属性。

![image-20210721203126062](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210721203126062.png)

```
<template>
	<Rate size = "40" showText @handleClick = 'getStarNum'></Rate>
</template>
export default {
    <script>
		methods: {
            getStarNum(num){
              console.log(num)
            }
         },
    </script>
}	
```



## Attributes

| 参数          | 说明                   | 类型      | 可选值         | 默认值  |
| ------------- | ---------------------- | --------- | -------------- | ------- |
| `size`        | 星的大小               | `String`  | ——             | `20`    |
| `showText`    | 显示文本               | `Boolean` | `true / false` | `false` |
| `handleClick` | 点击后的回调，返回星数 | `event`   | ——             | ——      |
|               |                        |           |                |         |
|               |                        |           |                |         |

