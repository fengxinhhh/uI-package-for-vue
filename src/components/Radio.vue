<template>
    <div :style = "align">
        <div 
        :class = "size(item.label)" 
        v-for = "item in dataSouce" 
        :key = "item.label" 
        :style = "border(item.label)">
            <input type="radio"
              name="radio" 
              :id="item.label" 
              :value = "item.value" 
              @click = 'getCheckedRadio(item.value,item.label)' 
              :checked = "item.label == 1 ? true : false"/>
            <label :class = "checkedLabel == item.label ? 'checkedStyle' : ''">{{item.value}}</label>
        </div>
    </div>
</template>

<script>
    export default {
        name:'fl-Radio-Group',
        props: {
            dataSouce: {        //单选框组数据
                type: Array,
                default: () => []
            },
        },
        data() {
            return {
                checkedLabel:1,     //默认点击
            }
        },
        methods: {
            getCheckedRadio(value,label) {
                this.checkedLabel = label
                this.$emit('getCheckedRadio',value,label)
            }
        },
        computed: {
            size(){         //根据size设置大小
                return (label) =>{
                    if(this.$attrs.big == '' && label == this.checkedLabel){
                        return 'bigRadioGroup checkedStyle'
                    }
                    if(this.$attrs.big == '' && label !== this.checkedLabel){
                        return 'bigRadioGroup'
                    }
                    if(this.$attrs.small == '' && label == this.checkedLabel){
                        return 'smallRadioGroup checkedStyle'
                    }
                    if(this.$attrs.small == '' && label !== this.checkedLabel){
                        return 'smallRadioGroup'
                    }
                    else if(label == this.checkedLabel){
                        return 'radioGroup checkedStyle'
                    }
                    return 'radioGroup'
                    
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
            border(){       //是否添加边框
                return (label) =>{
                    if(this.$attrs.border == ''){
                        if(label == this.checkedLabel){
                            return "border:1px solid blue;text-align:center;"
                        }else{
                            return "border:1px solid #ccc;text-align:center;"
                        }
                    }
                }
            }
        },
    }
</script>

<style scoped>
.checkedStyle{
    color:blue;
}
.radioGroup{
    width:100px;
    padding:0 15px;
    height:40px;
    text-align: left;
    line-height:40px;
    border-radius: 5px;
    margin:0 5px;
}
.bigRadioGroup{
    width:120px;
    height:50px;
    line-height: 50px;
    border-radius: 5px;
    margin:0 5px;
    text-align: left;
    padding:0 15px;
}
.smallRadioGroup{
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