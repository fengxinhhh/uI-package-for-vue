# Input输入框

##### 通过鼠标或键盘输入文本

fl-Input为受控组件，它总会显示 Vue 绑定值。

通常情况下，应当处理 `input` 事件，并更新组件的绑定值（或使用`v-model`）。否则，输入框内显示的值将不会改变。

不支持 `v-model` 修饰符。



## 基础用法

<img src="C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210710162327212.png" alt="image-20210710162327212" style="zoom:150%;" />

```
<fl-Input v-model = "text" placeholder="请输入内容"></fl-Input>

<script>
export default {
  data() {
    return {
      text: ''
    }
  }
}
</script>
```

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件

<img src="C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210710162411488.png" alt="image-20210710162411488" style="zoom:150%;" />

```
<fl-Input 
    v-model = "text" 
    placeholder="请输入内容"
    :disabled="disabled">
</fl-Input>

<script>
export default {
  data() {
    return {
      text: '',
      disabled: true,
    }
  }
}
</script>
```

## 可清空状态

<img src="C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210710162515746.png" alt="image-20210710162515746" style="zoom:150%;" />

使用`clearable`属性即可得到一个可清空的输入框

```
<fl-Input 
    v-model = "text" 
    placeholder="请输入内容"
    clearable>
</fl-Input>

<script>
export default {
  data() {
    return {
      text: ''
    }
  }
}
</script>
```

## 不同宽度

使用`width`属性即可得到一个自定义宽度的文本框

<img src="C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210710162648634.png" alt="image-20210710162648634" style="zoom:150%;" />

```
<fl-Input 
    v-model = "text" 
    placeholder="请输入内容"
    width = 400>
</fl-Input>

<script>
export default {
  data() {
    return {
      text: ''
    }
  }
}
</script>
```

## 密码框

使用`showPassword`属性即可得到一个可切换显示隐藏的密码框

<img src="C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210710162139903.png" alt="image-20210710162139903" style="zoom:150%;" />

```
<fl-Input 
    v-model = "text" 
    placeholder="请输入密码"
    showPassword>
</fl-Input>

<script>
export default {
  data() {
    return {
      text: ''
    }
  }
}
</script>
```

## 复合型输入框

可前置或后置元素，一般为标签或文本

<img src="C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210710163247764.png" alt="image-20210710163247764" style="zoom:150%;" />

```
<fl-Input 
    v-model = "text" 
    placeholder="请输入内容"
    width = 400>
    <div slot ="beforeContent">Http://</div>
    <div slot ="afterContent">.com</div>
</fl-Input>

<script>
export default {
  data() {
    return {
      text: ''
    }
  }
}
</script>
<style>
.beforeContent{
  background: red !important;
  width:300px !important;
}
.afterContent{
  background: blue !important;
  width:200px !important;
}
</style>
```

## 带输入建议

使用`useSearch`属性即可设置为一个带输入建议的文本框，

通过绑定`searchList`属性设置输入建议的数据，

同时，你也可以通过绑定`handClick`事件获取每次通过选择输入建议得到的具体数据内容。

<img src="C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210710163911821.png" alt="image-20210710163911821" style="zoom:150%;" />

```
<fl-Input 
    v-model = "text" 
    placeholder="请输入内容"
    width = 400
    useSearch
    :searchList = "searchData"
    @handClick = "handClick">
</fl-Input>

<script>
export default {
  data() {
    return {
      text: '',
      searchData:[
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
          { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
          { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
      ],
    }
  },
  methods:{
  	handClick(data){
      console.log(data)
    }
  }
}
</script>
```

## 输入长度限制

使用`maxlength`和`minlength`属性限制文本输入框的文本输入。

当设置`maxlength`就会在文本框右侧会自动展示出文本输入长度，

当设置`minlength`时，当输入长度不满足条件时会出现提示。

<img src="C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210710174214374.png" alt="image-20210710174214374" style="zoom:150%;" />

```
<fl-Input 
    v-model = "text" 
    placeholder="请输入内容"
    minlength = 2
    maxlength = 10>
</fl-Input>

<script>
export default {
  data() {
    return {
      text: ''
    }
  }
}
</script>
```



## Input Attributes

|     参数     |         说明         |     类型      |           可选值           |          默认值           |
| :----------: | :------------------: | :-----------: | :------------------------: | :-----------------------: |
|   v-model    |        绑定值        | string/number |             ——             |            ——             |
|  maxlength   |     最大输入长度     | string/number |             ——             |            ——             |
|  minlength   |     最小输入长度     | string/number |             ——             |            ——             |
| placeholder  |     文本提示输入     |    string     |             ——             | "请输入内容"/"请输入密码" |
|  clearable   |      是否可清空      |    boolean    |             ——             |           false           |
| showPassword |   切换为密码文本框   |    boolean    |             ——             |           false           |
|   disabled   |         禁用         |    boolean    |             ——             |           false           |
|    width     |      文本框宽度      | string/number |             ——             |            180            |
|  useSearch   |    使用带建议输入    |    boolean    |             ——             |           false           |
|  searchList  |   带建议输入的数据   |     Array     |             ——             |            []             |
|     slot     |  输入框头部尾部插槽  |     tags      | beforeContent/afterContent |            ——             |
|  handClick   | 选择带建议输入的回调 |     event     |             ——             |            ——             |



