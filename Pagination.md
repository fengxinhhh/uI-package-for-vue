# Pagination 分页

当数据量过多时，使用分页分解数据。

## 基础用法

数据较少的效果

![image-20210722051144368](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210722051144368.png)

数据较多的效果

![image-20210722051231525](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210722051231525.png)

当总数据量大于`50`条时会自动呈现如上的第二种效果，可配合`maxShowPageCard`设置每一组分页的页签量。

同时`pageSizeList`为必填选项，第一个下标的值即为每页所展示的数量。

```
<template>
	 <fl-Pagination
      :total = 80
      :maxShowPageCard = 5
      :pageSizeList = [8,15,20,30]
      @changePageNum = "changePageNum"
      @changePageSize = "changePageSize">
      </fl-Pagination>
</template>
<script>
	export default{
		methods: {
            changePageNum(data){
              console.log(data)
            },
            changePageSize(data){
              console.log(data)
            }
         },
	}
</script>
```

## 文字注释

带有文字提示的分页器

![image-20210722051650554](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210722051650554.png)

设置`showInfo`即可。

```
<template>
	 <fl-Pagination
      :total = 80
      :maxShowPageCard = 5
      :pageSizeList = [8,15,20,30]
      showInfo
      @changePageNum = "changePageNum"
      @changePageSize = "changePageSize">
      </fl-Pagination>
</template>
<script>
	export default{
		methods: {
            changePageNum(data){
              console.log(data)
            },
            changePageSize(data){
              console.log(data)
            }
         },
	}
</script>
```

## 下拉选择每页显示数量

带有`select`选择每页`pagesize`的分页器。

![image-20210722051811157](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210722051811157.png)

设置`choosePageSizeBySelect`属性即可，`select`选择数量由`pageSizeList`自定义。

```
<template>
	 <fl-Pagination
      :total = 80
      :maxShowPageCard = 5
      :pageSizeList = [8,15,20,30]
      showInfo
      choosePageSizeBySelect
      @changePageNum = "changePageNum"
      @changePageSize = "changePageSize">
      </fl-Pagination>
</template>
<script>
	export default{
		methods: {
            changePageNum(data){
              console.log(data)
            },
            changePageSize(data){
              console.log(data)
            }
         },
	}
</script>
```

## 输入文本跳转

带有`input`文本框输入跳转指定页码的分页器。

![image-20210722051952943](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210722051952943.png)

设置`choosePageNumByInput`属性即可。

```
<template>
	 <fl-Pagination
      :total = 80
      :maxShowPageCard = 5
      :pageSizeList = [8,15,20,30]
      showInfo
      choosePageSizeBySelect
      choosePageNumByInput
      @changePageNum = "changePageNum"
      @changePageSize = "changePageSize">
      </fl-Pagination>
</template>
<script>
	export default{
		methods: {
            changePageNum(data){
              console.log(data)
            },
            changePageSize(data){
              console.log(data)
            }
         },
	}
</script>
```

## 回调函数

通过`changePageNum`和`changePageSize`自定义函数可在每次页码和页数发生变化时获得事件监听。

![image-20210722051952943](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210722051952943.png)

```
<template>
	 <fl-Pagination
      :total = 80
      :maxShowPageCard = 5
      :pageSizeList = [8,15,20,30]
      @changePageNum = "changePageNum"
      @changePageSize = "changePageSize">
      </fl-Pagination>
</template>
<script>
	export default{
		methods: {
            changePageNum(data){
              console.log(data)
            },
            changePageSize(data){
              console.log(data)
            }
         },
	}
</script>
```



## Attributes

| 参数                     | 类型      | 说明                                   | 可选值         | 默认值           |
| ------------------------ | --------- | -------------------------------------- | -------------- | ---------------- |
| `total`                  | `Number`  | 数据总数                               | ——             | ——               |
| `maxShowPageCard`        | `Number`  | 总数据量大于`50`时，每个分页组显示数量 | ——             | `5`              |
| `pageSizeList`           | `Array`   | `pageSize`列表                         | ——             | `index`为`0`的值 |
| `showInfo`               | `Boolean` | 显示分页文本信息                       | `false / true` | `false`          |
| `choosePageSizeBySelect` | `Boolean` | 是否配置下拉框                         | `false / true` | `false`          |
| `choosePageNumByInput`   | `Boolean` | 是否配置文本框                         | `false / true` | `false`          |
| `changePageNum`          | `event`   | 监听页码改变的回调                     | ——             | ——               |
| `changePageSize`         | `event`   | 监听每页数量改变的回调                 | ——             | ——               |

