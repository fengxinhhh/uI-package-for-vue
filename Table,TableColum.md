# Table 表格

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

## 基础表格

基础的表格展示用法。

![image-20210718041459722](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210718041459722.png)

当`fl-Table、fl-TableColums`元素中注入`data`对象数组后，在`fl-TableColums`中用`dataSource`属性来绑定数据源（表格数组），用`tableKey`绑定当前列展示的下标，用`width`来绑定当前列的宽度，即可实现一个基础表格。



```
<fl-Table>
    <div slot = "data">
        <fl-TableColums
            width = "200"
            tableKey = 'date'
            label = "日期"
            :dataSource = "tableData">
        </fl-TableColums>
    </div>
    <div slot = "name">
        <fl-TableColums 
            width = "200" 
            tableKey = 'name' 
            label = "姓名" 
            :dataSource = "tableData">
        </fl-TableColums>
    </div>
    <div slot = "address">
        <fl-TableColums 
            width = "300" 
            tableKey = 'address' 
            label = "地址"
            :dataSource = "tableData">
        </fl-TableColums>
    </div>
</fl-Table>

 <script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }
    }
 </script>

```

## 尺寸修改

为`Table`设置`width/height`属性即可生成自定义宽高的表格。

![image-20210719014132868](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210719014132868.png)

```
<fl-Table width = "500" height = "400">
    <div slot = "data">
        <fl-TableColums
            width = "200"
            tableKey = 'date'
            label = "日期"
            :dataSource = "tableData">
        </fl-TableColums>
    </div>
    <div slot = "name">
        <fl-TableColums 
            width = "200" 
            tableKey = 'name' 
            label = "姓名" 
            :dataSource = "tableData">
        </fl-TableColums>
    </div>
    <div slot = "address">
        <fl-TableColums 
            width = "300" 
            tableKey = 'address' 
            label = "地址"
            :dataSource = "tableData">
        </fl-TableColums>
    </div>
</fl-Table>

 <script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }
    }
 </script>

```



## 改变列对齐方式

为指定的`fl-TableColums`绑定`align`属性即可自定义对齐方式，可选值为`left`、`right`、`center`。

![image-20210718042438321](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210718042438321.png)

```
<fl-Table>
    <div slot = "data">
        <fl-TableColums
            width = "200"
            tableKey = 'date'
            label = "日期"
            align = "center"
            :dataSource = "tableData">
        </fl-TableColums>
    </div>
    <div slot = "name">
        <fl-TableColums 
            width = "200" 
            tableKey = 'name' 
            label = "姓名" 
            align = "left"
            :dataSource = "tableData">
        </fl-TableColums>
    </div>
    <div slot = "address">
        <fl-TableColums 
            width = "300" 
            tableKey = 'address' 
            label = "地址"
            align = "right"
            :dataSource = "tableData">
        </fl-TableColums>
    </div>
</fl-Table>

 <script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }
    }
 </script>
```

## 可编辑的表格

为表格添加名为`option`的插槽，并在插槽中自定义模板即可在表格尾部添加编辑内容。

请注意：`option`为固定命名，修改将无法生效。

`handleClick`为操作栏的回调函数，用于获取所操作的行数据。

![image-20210718042644566](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210718042644566.png)

```
<fl-Table>
    <div slot = "data">
        <fl-TableColums
            width = "200"
            tableKey = 'date'
            label = "日期"
            align = "center"
            :dataSource = "tableData">
        </fl-TableColums>
    </div>
    <div slot = "name">
        <fl-TableColums 
            width = "200" 
            tableKey = 'name' 
            label = "姓名" 
            align = "left"
            :dataSource = "tableData">
        </fl-TableColums>
    </div>
    <div slot = "address">
        <fl-TableColums 
            width = "300" 
            tableKey = 'address' 
            label = "地址"
            align = "right"
            :dataSource = "tableData">
        </fl-TableColums>
    </div>
    <div slot = "option">
        <fl-TableColums 
        width = "400" 
        align = "center"
        tableKey = 'option' 
        label = "操作"
        :dataSource = "tableData">
          <div slot = "option1" slot-scope="scope" style = "display:flex;justify-content:center;">
            <Button type = "primary" size = "small" @handleClick = "deleteData(scope)">删除</Button>
            <Button type = "danger" size = "small" @handleClick = "updateData(scope)">编辑</Button>
          </div>
        </fl-TableColums>
    </div>
</fl-Table>

 <script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      },
      methods: {
      	handleClick(data){
      		console.log(data)
      	}
      }
    }
 </script>
```

## 行唯一ID

为行头添加一个固定索引以便区分每行数据。

![image-20210718042911587](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210718042911587.png)

只需在表头添加一个`tableKey`为id的字段，同时在表单源数据中声明即可。

```
<fl-Table>
	<div slot = "id">
        <fl-TableColums
          width = "100"
          align = "center"
          tableKey = 'id'
          label = "ID"
          :dataSource = "tableData">
        </fl-TableColums>
    </div>
    <div slot = "data">
        <fl-TableColums
            width = "200"
            tableKey = 'date'
            label = "日期"
            align = "center"
            :dataSource = "tableData">
        </fl-TableColums>
    </div>
    <div slot = "name">
        <fl-TableColums 
            width = "200" 
            tableKey = 'name' 
            label = "姓名" 
            align = "left"
            :dataSource = "tableData">
        </fl-TableColums>
    </div>
    <div slot = "address">
        <fl-TableColums 
            width = "300" 
            tableKey = 'address' 
            label = "地址"
            align = "right"
            :dataSource = "tableData">
        </fl-TableColums>
    </div>
    <div slot = "option">
        <fl-TableColums 
        width = "400" 
        align = "center"
        tableKey = 'option' 
        label = "操作"
        :dataSource = "tableData">
          <div slot = "option1" slot-scope="scope" style = "display:flex;justify-content:center;">
            <Button type = "primary" size = "small" @handleClick = "deleteData(scope)">删除</Button>
            <Button type = "danger" size = "small" @handleClick = "updateData(scope)">编辑</Button>
          </div>
        </fl-TableColums>
    </div>
</fl-Table>

 <script>
    export default {
      data() {
        return {
          tableData: [{
          	id:1,
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
          	id:2,
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
          	id:3,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
          	id:4,
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }
    }
 </script>
```



## 单选

在行头添加单选框并在选中时获取数据。

![image-20210718043227048](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210718043227048.png)

在你想要的位置添加一对`<fl-TableColums>`标签，并设定`slot`插槽值为`radio1`，`tableKey`为`radio`即可。

同时绑定`radioChange`事件，即可获取每次选中的回调，获得数据。

```
<fl-Table>
	<div slot = "radio1">
        <TableColums
          width = "50"
          align = "center"
          tableKey = 'radio'
          label = ""
          :dataSource = "tableData"
          @radioChange = 'radioChange'>
          </TableColums>
     </div>
	<div slot = "id">
        <fl-TableColums
          width = "100"
          align = "center"
          tableKey = 'id'
          label = "ID"
          :dataSource = "tableData">
        </fl-TableColums>
    </div>
    <div slot = "data">
        <fl-TableColums
            width = "200"
            tableKey = 'date'
            label = "日期"
            align = "center"
            :dataSource = "tableData">
        </fl-TableColums>
    </div>
    <div slot = "name">
        <fl-TableColums 
            width = "200" 
            tableKey = 'name' 
            label = "姓名" 
            align = "left"
            :dataSource = "tableData">
        </fl-TableColums>
    </div>
    <div slot = "address">
        <fl-TableColums 
            width = "300" 
            tableKey = 'address' 
            label = "地址"
            align = "right"
            :dataSource = "tableData">
        </fl-TableColums>
    </div>
    <div slot = "option">
        <fl-TableColums 
        width = "400" 
        align = "center"
        tableKey = 'option' 
        label = "操作"
        :dataSource = "tableData">
          <div slot = "option1" slot-scope="scope" style = "display:flex;justify-content:center;">
            <Button type = "primary" size = "small" @handleClick = "deleteData(scope)">删除</Button>
            <Button type = "danger" size = "small" @handleClick = "updateData(scope)">编辑</Button>
          </div>
        </fl-TableColums>
    </div>
</fl-Table>

 <script>
    export default {
      data() {
        return {
          tableData: [{
          	id:1,
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
          	id:2,
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
          	id:3,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
          	id:4,
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      },
      methods: {
        radioChange(data){
          console.log(data)
        }
      },
    }
 </script>
```

## 多选

在行头添加单选框并在选中时获取数据。

![image-20210718043644852](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210718043644852.png)

在你想要的位置添加一对`<fl-TableColums>`标签，并设定`slot`插槽值为`checked1`，`tableKey`为`checked`即可。

同时绑定`checkedChange`事件，即可获取每次选中的回调，获得数据。

## 排序

可对自定义字段进行升降序排序。

![image-20210718233844399](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210718233844399.png)

为`table-colums`标签加入`avaSearch`属性即可添加上一对升降序排序按钮。

```
<fl-Table>
	<div slot = "radio1">
        <TableColums
          width = "50"
          align = "center"
          tableKey = 'radio'
          label = ""
          :dataSource = "tableData"
          @radioChange = 'radioChange'>
          </TableColums>
     </div>
	<div slot = "id">
        <fl-TableColums
          width = "100"
          align = "center"
          tableKey = 'id'
          label = "ID"
          :dataSource = "tableData"
          avaSearch>
        </fl-TableColums>
    </div>
    <div slot = "data">
        <fl-TableColums
            width = "200"
            tableKey = 'date'
            label = "日期"
            align = "center"
            :dataSource = "tableData"
            avaSearch>
        </fl-TableColums>
    </div>
    <div slot = "name">
        <fl-TableColums 
            width = "200" 
            tableKey = 'name' 
            label = "姓名" 
            align = "left"
            :dataSource = "tableData">
        </fl-TableColums>
    </div>
    <div slot = "address">
        <fl-TableColums 
            width = "300" 
            tableKey = 'address' 
            label = "地址"
            align = "right"
            :dataSource = "tableData">
        </fl-TableColums>
    </div>
    <div slot = "option">
        <fl-TableColums 
        width = "400" 
        align = "center"
        tableKey = 'option' 
        label = "操作"
        :dataSource = "tableData">
          <div slot = "option1" slot-scope="scope" style = "display:flex;justify-content:center;">
            <Button type = "primary" size = "small" @handleClick = "deleteData(scope)">删除</Button>
            <Button type = "danger" size = "small" @handleClick = "updateData(scope)">编辑</Button>
          </div>
        </fl-TableColums>
    </div>
</fl-Table>

 <script>
    export default {
      data() {
        return {
          tableData: [{
          	id:1,
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
          	id:2,
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
          	id:3,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
          	id:4,
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      },
      methods: {
        radioChange(data){
          console.log(data)
        }
      },
    }
 </script>
```

## 筛选

设置`avaFilter`属性可对指定字段进行筛选显示。

![image-20210719014232441](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210719014232441.png)

```
<fl-Table>
	<div slot = "radio1">
        <TableColums
          width = "50"
          align = "center"
          tableKey = 'radio'
          label = ""
          :dataSource = "tableData"
          @radioChange = 'radioChange'>
          </TableColums>
     </div>
	<div slot = "id">
        <fl-TableColums
          width = "100"
          align = "center"
          tableKey = 'id'
          label = "ID"
          :dataSource = "tableData"
          avaSearch>
        </fl-TableColums>
    </div>
    <div slot = "data">
        <fl-TableColums
            width = "200"
            tableKey = 'date'
            label = "日期"
            align = "center"
            :dataSource = "tableData"
            avaSearch
            avaFilter>
        </fl-TableColums>
    </div>
    <div slot = "name">
        <fl-TableColums 
            width = "200" 
            tableKey = 'name' 
            label = "姓名" 
            align = "left"
            :dataSource = "tableData">
        </fl-TableColums>
    </div>
    <div slot = "address">
        <fl-TableColums 
            width = "300" 
            tableKey = 'address' 
            label = "地址"
            align = "right"
            :dataSource = "tableData">
        </fl-TableColums>
    </div>
    <div slot = "option">
        <fl-TableColums 
        width = "400" 
        align = "center"
        tableKey = 'option' 
        label = "操作"
        :dataSource = "tableData">
          <div slot = "option1" slot-scope="scope" style = "display:flex;justify-content:center;">
            <Button type = "primary" size = "small" @handleClick = "deleteData(scope)">删除</Button>
            <Button type = "danger" size = "small" @handleClick = "updateData(scope)">编辑</Button>
          </div>
        </fl-TableColums>
    </div>
</fl-Table>

 <script>
    export default {
      data() {
        return {
          tableData: [{
          	id:1,
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
          	id:2,
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
          	id:3,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
          	id:4,
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      },
      methods: {
        radioChange(data){
          console.log(data)
        }
      },
    }
 </script>
```



## Attributes

| 参数            | 说明                                 | 类型      | 可选值              | 默认值       |
| --------------- | ------------------------------------ | --------- | ------------------- | ------------ |
| `width`         | 表格宽度                             | `String`  | ——                  | ——           |
| `height`        | 表格宽度                             | `String`  | ——                  | ——           |
| `dataSource`    | 数据源                               | `Array`   | ——                  | ——           |
| `align`         | 表格列的对齐方式                     | `String`  | `left/right/center` | `left`       |
| `tableKey`      | 表格列展示属性，与`dataSource`映射   | `String`  | ——                  | ——           |
| `label`         | 表格头展示标题文本                   | `String`  | ——                  | ——           |
| `avaSort`       | 支持搜索                             | `Boolean` | `false`             | `false/true` |
| `avaFilter`     | 支持表格内容筛选                     | `Boolean` | `false`             | `false/true` |
| `radioChange`   | 单选选中后的回调事件，返回选中行     | `event`   | ——                  | ——           |
| `checkedChange` | 多选选中后的回调事件，返回多个选中行 | `event`   | ——                  | ——           |
| `send`          | 点击表格后的回调事件，返回点击所在行 | `event`   | ——                  | ——           |

