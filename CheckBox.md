# Check 多选框

一组备选项中进行多选

## 基础用法

由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

![image-20210712105317889](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210712105317889.png)

更像是一个`CheckBox`组，在界面中无论有多少个多选框，只会使用一对标签。

你只需要提供一个带有label(下标)、value(展示文本)的数组作为`dataSouce`数据源。

```
 <fl-Check-Group :dataSouce = "checkData"></fl-Check-Group>

<script>
  export default {
    data () {
      return {
          checkData:[
              {
                  label:1,
                  value:"多选框1",
              },
              {
                  label:2,
                  value:"多选框2",
              },
              {
                  label:3,
                  value:"多选框3",
              },
              {
                  label:4,
                  value:"多选框4",
              }
          ],
      };
    }
  }
</script>
```

## 禁用状态

多选框不可用状态。

![image-20210712110043959](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210712110043959.png)

设置`disabled`属性即可。

```
<fl-Check-Group :dataSouce = "checkData" disabled></fl-Check-Group>

<script>
  export default {
    data () {
      return {
          checkData:[
              {
                  label:1,
                  value:"多选框1",
              },
              {
                  label:2,
                  value:"多选框2",
              },
              {
                  label:3,
                  value:"多选框3",
              },
              {
                  label:4,
                  value:"多选框4",
              }
          ],
      };
    }
  }
</script>
```



## 带有边框

<img src="C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210712105243658.png" alt="image-20210712105243658"  />

设置`border`属性可以渲染为带有边框的单选框。

```
<fl-Check-Group :dataSouce = "checkData" border></fl-Check-Group>

<script>
  export default {
    data () {
      return {
          checkData:[
              {
                  label:1,
                  value:"多选框1",
              },
              {
                  label:2,
                  value:"多选框2",
              },
              {
                  label:3,
                  value:"多选框3",
              },
              {
                  label:4,
                  value:"多选框4",
              }
          ],
      };
    }
  }
</script>
```

## 布局形式

![image-20210712105433121](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210712105433121.png)

设置`alignX`、`alignY`切换单选框组的横向纵向布局。

```
<fl-Check-Group :dataSouce = "checkData" border></fl-Check-Group>
<fl-Check-Group :dataSouce = "checkData" alignY></fl-Check-Group>

<script>
  export default {
    data () {
      return {
          checkData:[
              {
                  label:1,
                  value:"多选框1",
              },
              {
                  label:2,
                  value:"多选框2",
              },
              {
                  label:3,
                  value:"多选框3",
              },
              {
                  label:4,
                  value:"多选框4",
              }
          ],
      };
    }
  }
</script>
```

## 尺寸

![image-20210712105611745](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210712105611745.png)

通过设置`big`、`small`改变尺寸。

```
<fl-Check-Group :dataSouce = "checkData" small></fl-Check-Group>
<fl-Check-Group :dataSouce = "checkData"></fl-Check-Group>
<fl-Check-Group :dataSouce = "checkData" big></fl-Check-Group>

<script>
  export default {
    data () {
      return {
          checkData:[
              {
                  label:1,
                  value:"多选框1",
              },
              {
                  label:2,
                  value:"多选框2",
              },
              {
                  label:3,
                  value:"多选框3",
              },
              {
                  label:4,
                  value:"多选框4",
              }
          ],
      };
    }
  }
</script>
```



## Attributes

| 参数                | 说明                               | 类型          | 可选值 | 默认值 |
| ------------------- | ---------------------------------- | ------------- | ------ | ------ |
| dataSouce           | 绑定数据源                         | Array         | ——     | ——     |
| label               | 数据源下标                         | Number        | ——     | ——     |
| value               | 数据源展示文本                     | String/Number | ——     | ——     |
| disabled            | 设置禁用                           | boolean       | ——     | false  |
| border              | 设置边框                           | boolean       | ——     | false  |
| alignX              | 横向排列                           | boolean       | ——     | false  |
| alignY              | 纵向排列                           | boolean       | ——     | true   |
| big                 | 大型尺寸                           | boolean       | ——     | false  |
| small               | 小型尺寸                           | boolean       | ——     | false  |
| getCheckedVal(item) | 多选框选中的回调，获取所有选中数据 | event         | ——     | ——     |

