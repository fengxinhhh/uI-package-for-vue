

# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

适用广泛的基础单选

![image-20210714193504520](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210714193504520.png)

`v-model`的值为当前被选中的`el-option`的 value 属性值

```
<template>
	<fl-Select v-model = "value" :dataSource = "selectData"></fl-Select>
</template>
<script>
  export default {
    data() {
      return {
        dataSource:
          [
            {
              label: 1,
              value: "双皮奶",
            },
            {
              label: 2,
              value: "黄金糕",
            },
            {
              label: 3,
              value: "双黄蛋",
            },
            {
              label: 4,
              value: "鸡米花",
            },
            {
              label: 5,
              value: "双肉肠",
            },
      	],
      };
    },
  };
</script>
```

## 有禁用选项

![image-20210714200910409](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210714200910409.png)

在`dataSource`中设定`disabled`值为 true，即可禁用该选项。

数据改变视图。

```
<template>
	<fl-Select v-model = "value" :dataSource = "selectData"></fl-Select>
</template>
<script>
  export default {
    data() {
      return {
        dataSource:
          [
            {
              label: 1,
              value: "双皮奶",
            },
            {
              label: 2,
              value: "黄金糕",
              disabled: true,
            },
            {
              label: 3,
              value: "双黄蛋",
            },
            {
              label: 4,
              value: "鸡米花",
              disabled: true,
            },
            {
              label: 5,
              value: "双肉肠",
            },
      	],
      };
    },
  };
</script>
```

## 禁用状态

选择器不可用状态

![image-20210714201625059](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210714201625059.png)

为`fl-Select`设置`disabled`属性，则整个选择器不可用

```
<template>
	<fl-Select v-model = "value" :dataSource = "selectData" disabled></fl-Select>
</template>
<script>
  export default {
    data() {
      return {
        dataSource:
          [
            {
              label: 1,
              value: "双皮奶",
            },
            {
              label: 2,
              value: "黄金糕",
              disabled: true,
            },
            {
              label: 3,
              value: "双黄蛋",
            },
            {
              label: 4,
              value: "鸡米花",
              disabled: true,
            },
            {
              label: 5,
              value: "双肉肠",
            },
      	],
      };
    },
  };
</script>
```

## 可清空单选 / 多选

包含清空按钮，可将所有类型选择器都清空为初始状态

![image-20210714202212012](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210714202212012.png)

```
<template>
	<fl-Select v-model = "value" :dataSource = "selectData" clearable></fl-Select>
</template>
<script>
  export default {
    data() {
      return {
        dataSource:
          [
            {
              label: 1,
              value: "双皮奶",
            },
            {
              label: 2,
              value: "黄金糕",
              disabled: true,
            },
            {
              label: 3,
              value: "双黄蛋",
            },
            {
              label: 4,
              value: "鸡米花",
              disabled: true,
            },
            {
              label: 5,
              value: "双肉肠",
            },
      	],
      };
    },
  };
</script>
```

## 基础多选

适用性较广的基础多选，用 Tag 展示已选项

![image-20210714202955842](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210714202955842.png)

为`fl-Select`设置`isCheckSelect`属性即可启用多选，此时`v-model`绑定的将是使用' , '所分割的多个选项值。

```
<template>
	<fl-Select v-model = "value" :dataSource = "selectData" isCheckSelect></fl-Select>
</template>
<script>
  export default {
    data() {
      return {
        dataSource:
          [
            {
              label: 1,
              value: "双皮奶",
            },
            {
              label: 2,
              value: "黄金糕",
              disabled: true,
            },
            {
              label: 3,
              value: "双黄蛋",
            },
            {
              label: 4,
              value: "鸡米花",
              disabled: true,
            },
            {
              label: 5,
              value: "双肉肠",
            },
      	],
      };
    },
  };
</script>
```

## 自定义模板

可以展示第二个子选项备注在下拉列表的右侧。

![image-20210714203329557](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210714203329557.png)

你只需要做的是改造`dataSource`，给每个选项对象添加`title`属性即可。

```
<template>
	<fl-Select v-model = "value" :dataSource = "selectData" isCheckSelect></fl-Select>
</template>
<script>
  export default {
    data() {
      return {
        dataSource:
          [
            {
              label: 1,
              value: "双皮奶",
            },
            {
              label: 2,
              value: "黄金糕",
              title: "垃圾食品",
              disabled: true,
            },
            {
              label: 3,
              value: "双黄蛋",
              title: "垃圾食品",
            },
            {
              label: 4,
              value: "鸡米花",
              disabled: true,
              title: "油炸食品",
            },
            {
              label: 5,
              value: "双肉肠",
              title: "民间小吃",
            },
      	],
      };
    },
  };
</script>
```

## 分组

多种分类进行分组展示

![image-20210714203709878](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210714203709878.png)

对`fl-Select`配置`optionGroup`后只需要对`dataSource`进行改造即可实现分组效果。

```
<template>
	<fl-Select v-model = "value" :dataSource = "selectData" optionGroup></fl-Select>
</template>
<script>
  export default {
    data() {
      return {
        selectData: [
            {
              menu: "食物",
              data: [
                {
                  label: 1,
                  value: "双皮奶",
                  title: "垃圾食品",
                },
                {
                  label: 2,
                  value: "黄金糕",
                  title: "垃圾食品",
                  disabled: true,
                },
                {
                  label: 3,
                  value: "大汉堡",
                  title: "垃圾食品",
                },
                {
                  label: 4,
                  value: "鸡米花",
                  title: "健康食品",
                },
                {
                  label: 5,
                  value: "大肉包",
                },
                {
                  label: 6,
                  value: "爆米花",
                },
              ],
            },
            {
              menu: "城市",
              data: [
                {
                  label: 1,
                  value: "苏州",
                  title: "人上人",
                },
                {
                  label: 2,
                  value: "南京",
                  title: "人上人",
                  disabled: true,
                },
                {
                  label: 3,
                  value: "上海",
                  title: "苏城后花园",
                },
                {
                  label: 4,
                  value: "新疆",
                  title: "人间天堂",
                },
              ],
            },
         ],
      };
    },
  };
</script>
```

## 可搜索

可以利用搜索功能快速查找选项，仅在单选`select`中支持。

![image-20210714204233301](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210714204233301.png)

为`fl-Select`设置`avaSearch`属性即可启用搜索。

```
<template>
	<fl-Select v-model = "value" :dataSource = "selectData" avaSearch></fl-Select>
</template>
<script>
  export default {
    data() {
      return {
        dataSource:
          [
            {
              label: 1,
              value: "双皮奶",
            },
            {
              label: 2,
              value: "黄金糕",
              title: "垃圾食品",
              disabled: true,
            },
            {
              label: 3,
              value: "双黄蛋",
              title: "垃圾食品",
            },
            {
              label: 4,
              value: "鸡米花",
              disabled: true,
              title: "油炸食品",
            },
            {
              label: 5,
              value: "双肉肠",
              title: "民间小吃",
            },
      	],
      };
    },
  };
</script>
```



## Attributes

| 参数            | 说明                           | 类型    | 可选值        | 默认值 |
| --------------- | ------------------------------ | ------- | ------------- | ------ |
| `v-model`       | 绑定值                         | string  | ——            | ——     |
| `dataSource`    | select数据源                   | Array   | 多选型/单选型 | ——     |
| `disabled`      | 禁用选项                       | boolean | true/false    | false  |
| `clearable`     | 可清空选中项                   | boolean | true/false    | false  |
| `isCheckSelect` | 开启多选                       | boolean | true/false    | false  |
| `optionGroup`   | 开启分组                       | boolean | true/false    | false  |
| `avaSearch`     | 开启搜索                       | boolean | true/false    | false  |
| `handleClick`   | 选中选项后的回调，获取选中项值 | event   | ——            | ——     |

