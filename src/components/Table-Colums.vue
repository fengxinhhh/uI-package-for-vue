<template>
<div>
    <ul class = "colums" :style = "defaultStyle">
        <!-- 表格标题 -->
        <li :style = "defaultStyle" class = "tableTh">
            <b>{{$attrs.label}}</b>
            <div v-show = "$attrs.avaSort == ''" class = "sortBox">
                <i class = "el-icon-caret-top" @click = "shengxu"></i>
                <i class = "el-icon-caret-bottom" @click = "jiangxu"></i>
                
            </div>
            <i class = "el-icon-arrow-down" @click = "choose" v-show = "this.$attrs.avaFilter == ''"></i>
            <ul class = "chooseList" v-show = "choostListShow">
                <li v-for = "item in chooseList" :key = "item" @click = "submitChose(item)">{{item}}</li>
            </ul>
        </li>
        <li v-for = "(item,index) in dataSource" :key = "index" 
        :style = "defaultStyle"
        @click = "send(item)">
        <!-- 多选插槽 -->
            <slot name = "checked1" :data = "item" v-if = "tableKey == 'checked'" class = "checked">
                <input type = "checkbox" @change="checkedChange(item)">
            </slot>
        <!-- 单选插槽 -->
             <slot name = "radio1" :data = "item" v-if = "tableKey == 'radio'" class = "radio">
                <input type = "radio" @click="radioChange(item)" name = "radio">
            </slot>
            <slot name = "option1" :data = "item" v-if = "tableKey == 'option'"></slot>
            {{item[tableKey]}}
        </li>
    </ul>
</div>
    
</template>

<script>
    export default {
        name:'fl-Table-Colums',
        data() {
            return {
                checkedList: [],        //多选选中的列表
                radioList: {},        //单选选中的列表
                searchDataSource: [],
                dataSource: this.$attrs.dataSource,         //数据源
                choostListShow:false,       //筛选列表
                chooseList:[],      //筛选列表
            }
        },
        mounted () {
                console.log(555)
                this.searchDataSource = JSON.parse(JSON.stringify(this.dataSource));
            },
        methods: {
            
            send(data) {
                this.$emit('send',data)
            },
            checkedChange(data){            //单选框选中的列表
                var index = this.checkedList.indexOf(data)
                if(index == -1){
                    this.checkedList.push(data)
                }else{
                    this.checkedList.splice(index,1)
                }
                this.$emit('checkedChange',this.checkedList)
            },
            radioChange(data){
                this.radioList = data
                this.$emit('radioChange',this.radioList)
            },
            shengxu(){          //降序
                this.dataSource.sort((x,y)=>{
                    return Date.parse(y[this.tableKey]) - Date.parse(x[this.tableKey])
                })
            },
            jiangxu(){          //升序
                this.dataSource.sort((x,y)=>{
                    return Date.parse(x[this.tableKey]) - Date.parse(y[this.tableKey])
                })
            },
            choose(){           //筛选
            this.choostListShow = !this.choostListShow
                this.chooseList = this.searchDataSource.map(item=>{
                    return item[this.tableKey]
                })
            },
            submitChose(data){
                for(var i = 0;i < this.$attrs.dataSource.length;i++){
                     if(this.$attrs.dataSource[i][this.tableKey] !== data){
                         this.$attrs.dataSource.splice(i,1)
                         i--
                     }
                 }
                 this.choostListShow = false;
            }
        },
        props: {
            tableKey: {
                type: String,
            },
        },
        computed: {
            defaultStyle() {
                var returnStyle = ""
                if(this.$attrs.width){
                    returnStyle += `width:${this.$attrs.width}px;`
                }
                if(this.$attrs.align){
                    returnStyle += `text-align:${this.$attrs.align};`
                }
                return returnStyle
            }
        },
    }
</script>

<style scoped>
.colums{
    float:left;
    width:200px;
    border-left:1px solid #ccc;
}
.colums li{
    height:52px;
    line-height: 52px;
    border-top:1px solid #ccc;
    border-right:1px solid #ccc;
    cursor: pointer;
    font-size:14px;
    position: relative;
}

.colums li:last-child{
    border-bottom:1px solid #ccc;
}
.colums .tableTh:hover{
    background: #fff;
}
.colums li:hover{
    background: rgb(191, 201, 221);
}
.colums .checked .radio{
    width:1000px;
    text-align: center;
    line-height: 52px;
    height:52px;
}
.chooseList{
    position:absolute;
    top:50px;
    right:50px;
    z-index:2;
    background: #fff;
    border:1px solid #ccc;
}
.chooseList li{
    height:30px;
    line-height:30px;
    padding:0 10px;
    font-size:12px;
}
.tableTh{
    display: flex;
    justify-content: center;
    align-items: center;
}

.tableTh .sortBox{
    margin-left:10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.tableTh .sortBox i{
    font-size:10px;
}
.tableTh .sortBox i:hover{
    color:blue;
}
</style>