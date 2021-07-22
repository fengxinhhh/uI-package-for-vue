## Collapse 折叠面板

通过折叠面板收纳内容区域

## 基础用法

可同时展开多个面板，面板之间不影响。

![image-20210719124634318](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210719124634318.png)

由于标题名称和展示内容不同，推荐使用数组保存所有的标题和显示内容，通过`v-for`遍历`fl-CollapseItem`更加简洁的展示代码。

通过`:title`传递每一个标题。

```
<Collapse>
    <CollapseItem  v-for = "(item,index) in collapseData" :key = "index" :title = "item.title">
    	<b>{{item.content}}</b>
    </CollapseItem>
</Collapse>
<script>
	export default {
		data() {
          return {
              collapseData:[
                {
                  title:'标题1',
                  content:'与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；'
                },
                {
                  title:'标题2',
                  content:'控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；'
                },
                {
                  title:'标题3',
                  content:'清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；'
                },
                {
                  title:'标题4',
                  content:'用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；'
                },
              ]
          }
	}
</script>
```

## 自定义宽度

配置`width`设置折叠面板总宽度。

![image-20210719130259833](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210719130259833.png)

```
<Collapse width = "400">
    <CollapseItem  v-for = "(item,index) in collapseData" :key = "index" :title = "item.title">
    	<b>{{item.content}}</b>
    </CollapseItem>
</Collapse>
<script>
	export default {
		data() {
          return {
              collapseData:[
                {
                  title:'标题1',
                  content:'与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；'
                },
                {
                  title:'标题2',
                  content:'控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；'
                },
                {
                  title:'标题3',
                  content:'清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；'
                },
                {
                  title:'标题4',
                  content:'用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；'
                },
              ]
          }
	}
</script>
```

## 自定义展开列高度

配置`height`设置展开列高度。

![image-20210719125320760](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210719125320760.png)

```
<Collapse>
    <CollapseItem  v-for = "(item,index) in collapseData" :key = "index" :title = "item.title" height = "100">
    	<b>{{item.content}}</b>
    </CollapseItem>
</Collapse>
<script>
	export default {
		data() {
          return {
              collapseData:[
                {
                  title:'标题1',
                  content:'与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；'
                },
                {
                  title:'标题2',
                  content:'控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；'
                },
                {
                  title:'标题3',
                  content:'清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；'
                },
                {
                  title:'标题4',
                  content:'用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；'
                },
              ]
          }
	}
</script>
```



## 手风琴效果

每次只能展开一个面板，其余面板会自动收起。

![image-20210719125007677](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20210719125007677.png)

通过 `accordion` 属性来设置是否以手风琴模式显示。

```
<Collapse>
    <CollapseItem  v-for = "(item,index) in collapseData" :key = "index" :title = "item.title" accordion>
    	<b>{{item.content}}</b>
    </CollapseItem>
</Collapse>
<script>
	export default {
		data() {
          return {
              collapseData:[
                {
                  title:'标题1',
                  content:'与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；'
                },
                {
                  title:'标题2',
                  content:'控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；'
                },
                {
                  title:'标题3',
                  content:'清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；'
                },
                {
                  title:'标题4',
                  content:'用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；'
                },
              ]
          }
	}
</script>
```



## Attributes

| 参数           | 说明                           | 类型      | 可选值 | 默认值 |
| -------------- | ------------------------------ | --------- | ------ | ------ |
| `title`        | 折叠面板标题                   | `String`  | ——     | ——     |
| `width`        | 折叠面板宽度                   | `String`  | ——     | ——     |
| `height`       | 折叠面板高度                   | `String`  | ——     | ——     |
| `accordion`    | 是否使用手风琴                 | `Boolean` | ——     | ——     |
| `handleToggle` | 展开面板的回调事件，接受标题名 | `event`   | ——     | ——     |

