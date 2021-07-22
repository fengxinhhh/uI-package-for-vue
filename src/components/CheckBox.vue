<template>
    <div :style = "align">
        <div 
        :class = "size(item)" 
        v-for = "item in dataSouce" 
        :key = "item.label" 
        :style = "border(item)">
            <input type="checkBox"
              :id="item.label" 
              :style="disabled"
              :value = "item.value" 
              @click = 'getCheckedVal(item,$event)'
              :disabled = "$attrs.disabled == '' ? true : false" />
            <label :class = "checkedList.indexOf(item) == -1 ? '' : 'checkedStyle'">{{item.value}}</label>
        </div>
    </div>
</template>

<script>
    export default {
        name:'fl-Check-Group',
        props: {
            dataSouce: {        //单选框组数据
                type: Array,
                default: () => []
            },
        },
        data() {
            return {
                checkedLabel:1,     //默认点击
                checkedList:[],     //被点击的选项列表
            }
        },
        methods: {
            getCheckedVal(data,e) {
                e.target.checked ? this.checkedList.push(data) : this.checkedList.splice(this.checkedList.findIndex(item =>  data.label == item.label) , 1)     //判断点击后的状态，增或删数组
                this.$emit('getCheckedVal',this.checkedList)
                
            }
        },
        computed: {
            size(){         //根据size设置大小
                return (data) =>{
                    if(this.$attrs.big == '' && this.checkedList.indexOf(data) !== -1){
                        return 'bigCheckGroup checkedStyle'
                    }
                    if(this.$attrs.big == '' && this.checkedList.indexOf(data) == -1){
                        return 'bigCheckGroup'
                    }
                    if(this.$attrs.small == '' && this.checkedList.indexOf(data) !== -1){
                        return 'smallCheckGroup checkedStyle'
                    }
                    if(this.$attrs.small == '' && this.checkedList.indexOf(data) == -1){
                        return 'smallCheckGroup'
                    }
                    else if(this.checkedList.indexOf(data) !== -1){
                        return 'checkGroup checkedStyle'
                    }
                    return 'checkGroup'
                    
                }
            },
            align() {       //是否设置布局样式
                if(this.$attrs.alignX == ''){
                    return 'display:flex;flex-direction:row;'
                }
                if(this.$attrs.alignY == ''){
                    return ''
                }
            },
            border(){       //是否添加边框以及禁用
                return (data) =>{
                    if(this.$attrs.border == ''){
                        if(this.checkedList.indexOf(data) !== -1 ){
                            return "border:1px solid blue;text-align:center;"
                        }else{
                            return "border:1px solid #ccc;text-align:center;"
                        }
                    }
                }
            },
            disabled(){
                if(this.$attrs.disabled == ''){
                    return 'cursor:no-drop;'
                }
            }
        },
    }
</script>

<style scoped>
.checkedStyle{
    color:blue;
}
.checkGroup{
    width:100px;
    padding:0 15px;
    height:40px;
    text-align: left;
    line-height:40px;
    border-radius: 5px;
    margin:0 5px;
}
.bigCheckGroup{
    width:120px;
    height:50px;
    line-height: 50px;
    border-radius: 5px;
    margin:0 5px;
    text-align: left;
    padding:0 15px;
}
.smallCheckGroup{
    width:80px;
    height:30px;
    line-height: 30px;
    font-size:12px;
    border-radius: 5px;
    margin:0 5px;
    text-align: left;
    padding:0 15px;
}
</style>