# Radio 单选框

在一组备选项中进行单选

## 基础用法

由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

<img src="C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210712101708618.png" alt="image-20210712101708618" style="zoom:150%;" />

更像是一个Radio组，在界面中无论有多少个单选框，只会使用一对标签。

你只需要提供一个带有label(下标)、value(展示文本)的数组作为dataSouce数据源。

```
<fl-Radio-Group :dataSouce = "radioData"></fl-Radio-Group>

<script>
  export default {
    data () {
      return {
          radioData:[
              {
                  label:1,
                  value:"单选框1",
              },
              {
                  label:2,
                  value:"单选框2",
              },
              {
                  label:3,
                  value:"单选框3",
              },
              {
                  label:4,
                  value:"单选框4",
              }
          ],
      };
    }
  }
</script>
```

## 带有边框

<img src="C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210712102312737.png" alt="image-20210712102312737" style="zoom:150%;" />

设置`border`属性可以渲染为带有边框的单选框。

```
<fl-Radio-Group :dataSouce = "radioData" border></fl-Radio-Group>

<script>
  export default {
    data () {
      return {
          radioData:[
              {
                  label:1,
                  value:"单选框1",
              },
              {
                  label:2,
                  value:"单选框2",
              },
              {
                  label:3,
                  value:"单选框3",
              },
              {
                  label:4,
                  value:"单选框4",
              }
          ],
      };
    }
  }
</script>
```

## 布局形式

<img src="C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210712102707222.png" alt="image-20210712102707222" style="zoom:150%;" />

设置`alignX`、`alignY`切换单选框组的横向纵向布局。

```
<fl-Radio-Group :dataSouce = "radioData" alignX></fl-Radio-Group>
<fl-Radio-Group :dataSouce = "radioData" alignY></fl-Radio-Group>

<script>
  export default {
    data () {
      return {
          radioData:[
              {
                  label:1,
                  value:"单选框1",
              },
              {
                  label:2,
                  value:"单选框2",
              },
              {
                  label:3,
                  value:"单选框3",
              },
              {
                  label:4,
                  value:"单选框4",
              }
          ],
      };
    }
  }
</script>
```

## 尺寸

<img src="C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210712103048998.png" alt="image-20210712103048998" style="zoom:150%;" />

通过设置`big`、`small`改变尺寸。

```
<fl-Radio-Group :dataSouce = "radioData" alignX small></fl-Radio-Group>
<fl-Radio-Group :dataSouce = "radioData" alignX></fl-Radio-Group>
<fl-Radio-Group :dataSouce = "radioData" alignX big></fl-Radio-Group>

<script>
  export default {
    data () {
      return {
          radioData:[
              {
                  label:1,
                  value:"单选框1",
              },
              {
                  label:2,
                  value:"单选框2",
              },
              {
                  label:3,
                  value:"单选框3",
              },
              {
                  label:4,
                  value:"单选框4",
              }
          ],
      };
    }
  }
</script>
```



## Attributes

| 参数                        | 说明                                  | 类型          | 可选值 | 默认值 |
| --------------------------- | ------------------------------------- | ------------- | ------ | ------ |
| dataSouce                   | 绑定数据源                            | Array         | ——     | ——     |
| label                       | 数据源下标                            | Number        | ——     | ——     |
| value                       | 数据源展示文本                        | String/Number | ——     | ——     |
| border                      | 设置边框                              | boolean       | ——     | false  |
| alignX                      | 横向排列                              | boolean       | ——     | false  |
| alignY                      | 纵向排列                              | boolean       | ——     | true   |
| big                         | 大型尺寸                              | boolean       | ——     | false  |
| small                       | 小型尺寸                              | boolean       | ——     | false  |
| getCheckedRadio(label,item) | 单选框选中的回调，获取选中label和item | event         | ——     | ——     |

