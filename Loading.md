# Loading 加载

加载数据时显示动效。

## 旋转加载

在表格等容器中加载数据时显示。

![image-20210721224706964](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210721224706964.png)

添加`loadingRound`属性即可。

```
<Loading loadingRound></Loading>
```



## 省略加载

加载数据时显示省略样式的加载。

![image-20210721224846510](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210721224846510.png)

添加`loadingRow`属性即可

```
<Loading loadingRow></Loading>
```



## 地球式环绕加载

加载数据时显示地球式环绕加载。

![image-20210721225119224](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210721225119224.png)

添加`loadingColums`属性即可

```
<Loading loadingColums></Loading>
```



## Attributes

| 参数            | 说明           | 类型      | 可选值         | 默认值  |
| --------------- | -------------- | --------- | -------------- | ------- |
| `loadingRound`  | 旋转加载       | `Boolean` | `true / false` | `false` |
| `loadingRow`    | 省略加载       | `Boolean` | `true / false` | `false` |
| `loadingColums` | 地球式环绕加载 | `Boolean` | `true / false` | `false` |

