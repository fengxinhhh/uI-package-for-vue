# InputNumber 计数器

仅允许输入标准的数字值，可定义范围

## 基础用法

![image-20210714121411853](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210714121411853.png)

要使用它，只需要在`el-input-number`元素中使用`v-model`绑定变量即可，变量的初始值即为默认值。

```
<template>
  <fl-InputNumber v-model = "num" :max = 10 :min = 0 @handleClick="handleClick"></fl-InputNumber>
</template>

<script>
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleClick(value) {
        console.log(value);
      }
    }
  };
</script>
```

## 步数

允许定义递增递减的步数控制

![image-20210714121853357](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210714121853357.png)

设置`step`属性可以控制步长，接受一个`Number`。

```
<template>
  <fl-InputNumber v-model = "num" :max = 10 :min = 0 :step = 2 @handleClick="handleClick"></fl-InputNumber>
</template>

<script>
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleClick(value) {
        console.log(value);
      }
    }
  };
</script>
```

## 严格步数

strictly`属性接受一个`Boolean`。如果这个属性被设置为`true，则只能输入步数的倍数。

![image-20210714121853357](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210714121853357.png)

```
<template>
  <fl-InputNumber v-model = "num" :max = 10 :min = 0 :step = 2 strictly @handleClick="handleClick"></fl-InputNumber>
</template>

<script>
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleClick(value) {
        console.log(value);
      }
    }
  };
</script>
```

## 精度

设置 `precision` 属性可以控制数值精度，接收一个 `Number`。

`precision` 的值必须是一个非负整数，并且不能小于 `step` 的小数位数。

![image-20210714131903726](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210714131903726.png)

```
<template>
  <fl-InputNumber v-model = "num" :max = 10 :min = 0 :step = 2 :precision= 2 strictly @handleClick="handleClick"></fl-InputNumber>
</template>

<script>
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleClick(value) {
        console.log(value);
      }
    }
  };
</script>
```

## 尺寸

额外提供了 `big`、`small` 两种尺寸的数字输入框

![image-20210714132038068](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210714132038068.png)

```
<template>
  <fl-InputNumber v-model = "num" :max = 10 :min = 0 :step = 2 :precision= 2 strictly small @handleClick="handleClick"></fl-InputNumber>
</template>

<script>
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleClick(value) {
        console.log(value);
      }
    }
  };
</script>
```



## Attributes

| 参数        | 说明                           | 类型    | 可选值 | 默认值 |
| ----------- | ------------------------------ | ------- | ------ | ------ |
| v-model     | 绑定值                         | number  | ——     | 1      |
| min         | 计数器的最小值                 | number  | ——     | ——     |
| max         | 计数器的最大值                 | number  | ——     | ——     |
| step        | 计数器步长                     | number  | ——     | 1      |
| strictly    | 开启严格模式，只能输入step倍数 | boolean | ——     | false  |
| precision   | 保留小数点位数                 | number  | ——     | 0      |
| big         | 大尺寸                         | boolean | ——     | false  |
| small       | 小尺寸                         | boolean | ——     | false  |
| handleClick | 改变数值后的回调，获取更新数值 | event   | ——     | ——     |

