## ree 树形控件

用清晰的层级结构展示信息，可展开或折叠。

## 基础用法

基础的树形结构展示。

![image-20210722115105606](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210722115105606.png)

通过`dataSource`绑定数据源，使用`afterToggle`获得每次展开收起的回调方法。

同时你还可以配置数据源中的`display`决定默认展开的选项。

```
<template>
	<Tree :dateSource = "treeData" @afterToggle = "afterToggle"></Tree>
</template>
<script>
	export default{
		data() {
          return {
               data: [{
                  label: '一级 1',
                  display:false,
                  children: [{
                    label: '二级 1-1',
                    display:false,
                    children: [{
                      label: '三级 1-1-1',
                      display:false,
                    }]
                  }]
                }, {
                  label: '一级 2',
                  display:false,
                  children: [{
                    label: '二级 2-1',
                    display:false,
                    children: [{
                      label: '三级 2-1-1',
                      display:false,
                    }]
                  }, {
                    label: '二级 2-2',
                    display:false,
                    children: [{
                      label: '三级 2-2-1',
                      display:false,
                    }]
                  }]
                }, {
                  label: '一级 3',
                  display:false,
                  children: [{
                    label: '二级 3-1',
                    display:false,
                    children: [{
                      label: '三级 3-1-1',
                      display:false,
                    }]
                  }, {
                    label: '二级 3-2',
                    display:false,
                    children: [{
                      label: '三级 3-2-1',
                      display:false,
                    }]
                  }]
                }],
            }
		}
	}
</script>
```

## 可选择

适用于需要选择层级时使用。

![image-20210722115912469](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210722115912469.png)

为了更好的使用选择树形选择器，你需要配置`avaChecked`与`defaultOpen`属性。

你可以通过`checked`决定每次渲染时默认选中的选项。

```
<template>
	<Tree :dateSource = "treeData" @afterToggle = "afterToggle" @handleChecked = "handleChecked" avaChecked defaultOpen></Tree>
</template>
<script>
	export default{
		data() {
          return {
               data: [{
                  label: '一级 1',
                  checked: false,
                  children: [{
                    label: '二级 1-1',
                    checked: false,
                    children: [{
                      label: '三级 1-1-1',
                      checked: false,
                    }]
                  }]
                }, {
                  label: '一级 2',
                  checked: false,
                  children: [{
                    label: '二级 2-1',
                    checked: false,
                    children: [{
                      label: '三级 2-1-1',
                      checked: false,
                    }]
                  }, {
                    label: '二级 2-2',
                    checked: false,
                    children: [{
                      label: '三级 2-2-1',
                      checked: false,
                    }]
                  }]
                }, {
                  label: '一级 3',
                  checked: false,
                  children: [{
                    label: '二级 3-1',
                    checked: false,
                    children: [{
                      label: '三级 3-1-1',
                      checked: false,
                    }]
                  }, {
                    label: '二级 3-2',
                    checked: false,
                    children: [{
                      label: '三级 3-2-1',
                      checked: false,
                    }]
                  }]
                }],
            }
		}
	}
</script>
```

## 禁用状态

可将 Tree 的某些节点设置为禁用状态。

通过对`dataSource`中的选项进行`disabled`属性的配置。

![image-20210722120507832](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210722120507832.png)

```
<template>
	<Tree :dateSource = "treeData" @afterToggle = "afterToggle" @handleChecked = "handleChecked" avaChecked defaultOpen></Tree>
</template>
<script>
	export default{
		data() {
          return {
               data: [{
                  label: '一级 1',
                  checked: false,
                  children: [{
                    label: '二级 1-1',
                    checked: false,
                    children: [{
                      label: '三级 1-1-1',
                      checked: false,
                      disabled: true,
                    }]
                  }]
                }, {
                  label: '一级 2',
                  checked: false,
                  disabled: true,
                  children: [{
                    label: '二级 2-1',
                    checked: false,
                    children: [{
                      label: '三级 2-1-1',
                      checked: false,
                    }]
                  }, {
                    label: '二级 2-2',
                    checked: false,
                    children: [{
                      label: '三级 2-2-1',
                      checked: false,
                    }]
                  }]
                }, {
                  label: '一级 3',
                  checked: false,
                  children: [{
                    label: '二级 3-1',
                    checked: false,
                    disabled: true,
                    children: [{
                      label: '三级 3-1-1',
                      checked: false,
                    }]
                  }, {
                    label: '二级 3-2',
                    checked: false,
                    children: [{
                      label: '三级 3-2-1',
                      checked: false,
                    }]
                  }]
                }],
            }
		}
	}
</script>
```

## 手风琴模式

对于同一级的节点，每次只能展开一个。

![image-20210722120700229](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210722120700229.png)

配置`onlyShowOne`属性即可。

```
<template>
	<Tree :dateSource = "treeData" @afterToggle = "afterToggle" @handleChecked = "handleChecked" avaChecked defaultOpen showOnlyOne></Tree>
</template>
<script>
	export default{
		data() {
          return {
               data: [{
                  label: '一级 1',
                  checked: false,
                  children: [{
                    label: '二级 1-1',
                    checked: false,
                    children: [{
                      label: '三级 1-1-1',
                      checked: false,
                      disabled: true,
                    }]
                  }]
                }, {
                  label: '一级 2',
                  checked: false,
                  disabled: true,
                  children: [{
                    label: '二级 2-1',
                    checked: false,
                    children: [{
                      label: '三级 2-1-1',
                      checked: false,
                    }]
                  }, {
                    label: '二级 2-2',
                    checked: false,
                    children: [{
                      label: '三级 2-2-1',
                      checked: false,
                    }]
                  }]
                }, {
                  label: '一级 3',
                  checked: false,
                  children: [{
                    label: '二级 3-1',
                    checked: false,
                    disabled: true,
                    children: [{
                      label: '三级 3-1-1',
                      checked: false,
                    }]
                  }, {
                    label: '二级 3-2',
                    checked: false,
                    children: [{
                      label: '三级 3-2-1',
                      checked: false,
                    }]
                  }]
                }],
            }
		}
	}
</script>
```

## 在点击和收缩展开时做些什么

你可以通过`@afterToggle`和`@handleChecked`这两个内置事情，监听点击和收缩展开时的回调函数。

返回的将是正在被操作的节点。

```
<Tree
      :dateSource = "treeData"
      avaChecked
      defaultOpen
      onlyShowOne
      @afterToggle = "afterToggle"
      @handleChecked = "handleChecked"
 ></Tree>
```



## Attributes

| 参数                     | 类型      | 说明                 | 可选值         | 默认值  |
| ------------------------ | --------- | -------------------- | -------------- | ------- |
| `dateSource`             | `Array`   | 数据源               | ——             | ——      |
| `avaChecked`             | `Boolean` | 激活多选`Tree`选择器 | `false / true` | `false` |
| `defaultOpen`            | `Boolean` | 默认展开的配置       | `false / true` | `false` |
| `dateSource -> display`  | `Boolean` | 是否展开             | `false / true` | `false` |
| `dateSource -> checked`  | `Boolean` | 是否默认选中         | `false / true` | `false` |
| `dateSource -> disabled` | `Boolean` | 是否默认禁用         | `false / true` | `false` |
| `onlyShowOne`            | `Boolean` | 手风琴模式           | `false / true` | `false` |
| `afterToggle`            | `event`   | 展开和收缩的事件     | ——             | ——      |
| `handleChecked`          | `event`   | 被选中的事件         | ——             | ——      |

