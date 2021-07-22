# Cascader 级联选择器

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。

## 基础用法

![image-20210715192411392](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210715192411392.png)

只需为` Cascader` 的`dataSource`可渲染出一个级联选择器。

```
<template>
	<Cascader :dataSource = "dataSource" @change = "getList"></Cascader>
</template>
<script>
  export default {
    data() {
      return {
        dataSource: [
                {
                  value: "shejiyuanze",
                  label: "设计原则",
                  children: [
                    {
                      value: "yizhi",
                      label: "一致",
                      children: [
                        {
                          value: "tiqiu",
                          label: "踢球",
                        },
                        {
                          value: "shuijiao",
                          label: "睡觉",
                        },
                      ],
                    },
                    {
                      value: "tuanjie",
                      label: "团结",
                      children: [
                        {
                          value: "chifan",
                          label: "吃饭",
                        },
                      ],
                    },
                  ],
                },
                {
                  value: "kaoshiguize",
                  label: "考试规则",
                  children: [
                    {
                      value: "anjing",
                      label: "安静",
                      children: [
                        {
                          value: "zuobi",
                          label: "作弊",
                        },
                        {
                          value: "jiaojuan",
                          label: "交卷",
                        },
                      ],
                    },
                    {
                      value: "lianhe",
                      label: "联合",
                      children: [
                        {
                          value: "shuxue",
                          label: "数学",
                        },
                      ],
                    },
                  ],
                },
              ],
            }
         },
         methods: {
            getList(data) {
              console.log(data);
            },
         },
   }
</script>
```



## 禁用选项

通过在数据源中设置 `disabled` 字段来声明该选项是禁用的

![image-20210715192847237](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210715192847237.png)

```
<template>
	<Cascader :dataSource = "dataSource" @change = "getList"></Cascader>
</template>
<script>
  export default {
    data() {
      return {
        dataSource: [
                {
                  value: "shejiyuanze",
                  label: "设计原则",
                  children: [
                    {
                      value: "yizhi",
                      label: "一致",
                      children: [
                        {
                          value: "tiqiu",
                          label: "踢球",
                          disabled: true,
                        },
                        {
                          value: "shuijiao",
                          label: "睡觉",
                        },
                      ],
                    },
                    {
                      value: "tuanjie",
                      label: "团结",
                      children: [
                        {
                          value: "chifan",
                          label: "吃饭",
                          disabled: true,
                        },
                      ],
                    },
                  ],
                },
                {
                  value: "kaoshiguize",
                  label: "考试规则",
                  children: [
                    {
                      value: "anjing",
                      label: "安静",
                      children: [
                        {
                          value: "zuobi",
                          label: "作弊",
                        },
                        {
                          value: "jiaojuan",
                          label: "交卷",
                          disabled: true,
                        },
                      ],
                    },
                    {
                      value: "lianhe",
                      label: "联合",
                      children: [
                        {
                          value: "shuxue",
                          label: "数学",
                        },
                      ],
                    },
                  ],
                },
              ],
            }
         },
         methods: {
            getList(data) {
              console.log(data);
            },
         },
   }
</script>
```

## 可清空

通过 `clearable` 设置输入框可清空

![image-20210715193015994](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210715193015994.png)

```
<template>
	<Cascader :dataSource = "dataSource" @change = "getList" clearable></Cascader>
</template>
<script>
  export default {
    data() {
      return {
        dataSource: [
                {
                  value: "shejiyuanze",
                  label: "设计原则",
                  children: [
                    {
                      value: "yizhi",
                      label: "一致",
                      children: [
                        {
                          value: "tiqiu",
                          label: "踢球",
                          disabled: true,
                        },
                        {
                          value: "shuijiao",
                          label: "睡觉",
                        },
                      ],
                    },
                    {
                      value: "tuanjie",
                      label: "团结",
                      children: [
                        {
                          value: "chifan",
                          label: "吃饭",
                          disabled: true,
                        },
                      ],
                    },
                  ],
                },
                {
                  value: "kaoshiguize",
                  label: "考试规则",
                  children: [
                    {
                      value: "anjing",
                      label: "安静",
                      children: [
                        {
                          value: "zuobi",
                          label: "作弊",
                        },
                        {
                          value: "jiaojuan",
                          label: "交卷",
                          disabled: true,
                        },
                      ],
                    },
                    {
                      value: "lianhe",
                      label: "联合",
                      children: [
                        {
                          value: "shuxue",
                          label: "数学",
                        },
                      ],
                    },
                  ],
                },
              ],
            }
         },
         methods: {
            getList(data) {
              console.log(data);
            },
         },
   }
</script>
```



## 仅显示最后一级

可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。

![image-20210715193200469](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210715193200469.png)

属性`showAll定义了是否显示完整的路径，将其赋值为`false`则仅显示最后一级

```
<template>
	<Cascader :dataSource = "dataSource" @change = "getList" :showAll = false></Cascader>
</template>
<script>
  export default {
    data() {
      return {
        dataSource: [
                {
                  value: "shejiyuanze",
                  label: "设计原则",
                  children: [
                    {
                      value: "yizhi",
                      label: "一致",
                      children: [
                        {
                          value: "tiqiu",
                          label: "踢球",
                          disabled: true,
                        },
                        {
                          value: "shuijiao",
                          label: "睡觉",
                        },
                      ],
                    },
                    {
                      value: "tuanjie",
                      label: "团结",
                      children: [
                        {
                          value: "chifan",
                          label: "吃饭",
                          disabled: true,
                        },
                      ],
                    },
                  ],
                },
                {
                  value: "kaoshiguize",
                  label: "考试规则",
                  children: [
                    {
                      value: "anjing",
                      label: "安静",
                      children: [
                        {
                          value: "zuobi",
                          label: "作弊",
                        },
                        {
                          value: "jiaojuan",
                          label: "交卷",
                          disabled: true,
                        },
                      ],
                    },
                    {
                      value: "lianhe",
                      label: "联合",
                      children: [
                        {
                          value: "shuxue",
                          label: "数学",
                        },
                      ],
                    },
                  ],
                },
              ],
            }
         },
         methods: {
            getList(data) {
              console.log(data);
            },
         },
   }
</script>
```

## 可搜索

可以快捷地搜索选项并选择。

![image-20210715193331272](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210715193331272.png)

设置`avaSearch`属性，即可开启搜索功能。

```
<template>
	<Cascader :dataSource = "dataSource" @change = "getList" avaSearch></Cascader>
</template>
<script>
  export default {
    data() {
      return {
        dataSource: [
                {
                  value: "shejiyuanze",
                  label: "设计原则",
                  children: [
                    {
                      value: "yizhi",
                      label: "一致",
                      children: [
                        {
                          value: "tiqiu",
                          label: "踢球",
                          disabled: true,
                        },
                        {
                          value: "shuijiao",
                          label: "睡觉",
                        },
                      ],
                    },
                    {
                      value: "tuanjie",
                      label: "团结",
                      children: [
                        {
                          value: "chifan",
                          label: "吃饭",
                          disabled: true,
                        },
                      ],
                    },
                  ],
                },
                {
                  value: "kaoshiguize",
                  label: "考试规则",
                  children: [
                    {
                      value: "anjing",
                      label: "安静",
                      children: [
                        {
                          value: "zuobi",
                          label: "作弊",
                        },
                        {
                          value: "jiaojuan",
                          label: "交卷",
                          disabled: true,
                        },
                      ],
                    },
                    {
                      value: "lianhe",
                      label: "联合",
                      children: [
                        {
                          value: "shuxue",
                          label: "数学",
                        },
                      ],
                    },
                  ],
                },
              ],
            }
         },
         methods: {
            getList(data) {
              console.log(data);
            },
         },
   }
</script>
```



## Attributes

| 参数         | 说明                                     | 类型    | 可选值       | 默认值 |
| ------------ | ---------------------------------------- | ------- | ------------ | ------ |
| `dataSource` | 用于展示的数据源                         | Array   | ——           | ——     |
| `disabled`   | 是否禁用某一选项                         | boolean | true / false | false  |
| `clearable`  | 是否支持清空选项                         | boolean | true / false | false  |
| `showAll`    | 输入框中是否显示选中值的完整路径         | boolean | true / false | false  |
| `avaSearch`  | 是否支持搜索                             | boolean | true / false | false  |
| `change`     | 最后一层节点被选中的回调，以数组返回三项 | event   | ——           | ——     |

