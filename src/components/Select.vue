<template>
    <div>
        <div class = "selectBox">
            <!-- 基础单选select菜单 -->
            <div class = "selectPar" @click = "toggleOption" v-if = "!isCheckSelect">
                <input type = "text"
                    class = "select"
                    placeholder="请选择"
                    v-model = "selectedValue"
                    :style = "fontStyle"
                    :disabled = "$attrs.disabled == '' ? true : false"
                    :readonly = "$attrs.avaSearch == '' ? false : true"
                    @keyup="searchIng($event)">
                <i class = "el-icon-arrow-down" :style = "iconStyle" v-if="!canClear"></i>
                <i class = "el-icon-close" v-else @click = "clearOption"></i>
            </div>
            <!-- 多选select菜单 -->
            <div class = "selectPar" @click = "toggleOption" v-if = "isCheckSelect">
                <div class = "select" :style = "fontStyle">
                    <span v-if = "selectedValueGroup.length == 0">请选择</span>
                    <div class = "checkSelect" v-for = "item in selectedValueGroup" :key = "item">
                        {{item}}
                        <span @click.stop = "removeSelect(item)">x</span>
                    </div>
                </div>
                <i class = "el-icon-arrow-down" :style = "iconStyle" v-if="!canClear"></i>
                <i class = "el-icon-close" v-else @click = "clearOption"></i>
            </div>
            <!-- 普通option下拉项 -->
            <ul class = "optionList" ref = "optionList" :style = "selectStyle" v-if = "!isGroupSelect">
                <li class = "option" v-for = "item in optionDataSource" :key = "item.label" @click = "isCheckSelect ? checkedOption(item) : selectedOption(item)" :style = "optionStyle(item)" :disabled = "item.disabled">
                    <span class = "value">{{item.value}}</span>
                    <span class = "title">{{item.title}}</span>
                </li>
            </ul>
            <!-- 分组option下拉项 -->
            <ul class = "optionList" ref = "optionList" :style = "selectStyle" v-if = "isGroupSelect">
                <div class = "menuGroup"  v-for = "item in optionDataSource" :key = "item.menu">
                    <span class = "title">{{item.menu}}</span>
                    <li class = "option" v-for = "item2 in item.data" :key = "item2.label" @click = "isCheckSelect ? checkedOption(item2) : selectedOption(item2)" :style = "optionStyle(item2)" :disabled = "item2.disabled">
                        <span class = "value">{{item2.value}}</span>
                        <span class = "title">{{item2.title}}</span>
                    </li>
                </div>
            </ul>
            
        </div>
    </div>
</template>

<script>
    export default {
        name:'fl-Select',
        props: {
            value: {            //双向绑定
                type: String,
            },
            dataSource: {       //数据源
                type: Array
            }
        },
        data() {
            return {
                selectedValue:'',         //单选选中值
                selectedValueGroup:[],      //select多选列表
                isUp: false,                //展开状态
                searchText:'',              //搜索文本
            }
        },
        methods: {
            toggleOption() {        //select展开收起切换
                if(this.$attrs.disabled == '') return 
                this.isUp = !this.isUp
                this.$refs.optionList.style.height = this.isUp ? "500px" : "0px"
                this.$refs.optionList.style.opacity = this.isUp ? "1" : "0"
            },
            selectedOption(item){           //选中option
                this.selectedValue = item.value
                this.$emit('input',this.selectedValue)
                this.isUp = false
                this.$emit('handleClick',this.selectedValue)
            },
            checkedOption(item){           //多选选中option
                if(item.disabled){
                    return
                }
                if(this.selectedValueGroup.indexOf(item.value) !== -1){
                    this.selectedValueGroup.splice(this.selectedValueGroup.indexOf(item.value),1)
                }else{
                    this.selectedValueGroup.push(item.value)
                }
                this.$emit('input',this.selectedValueGroup.join(','))
                this.$emit('handleClick',this.selectedValueGroup.join(','))
            },
            removeSelect(item){         //移除多选option
                var index = this.selectedValueGroup.indexOf(item)
                this.selectedValueGroup.splice(index,1)
                this.$emit('input',this.selectedValueGroup.join(','))
            },
            clearOption(){      //清空
                if(this.isCheckSelect){
                    this.selectedValueGroup = []
                }else{
                    this.selectedValue = ""
                }
                
                this.$emit('input','')
            },
            searchIng(e){        //搜索文本
                
                this.selectedValue = e.target.value
                console.log(e.target.value)
            }   
        },
        computed: {
            selectStyle() {             //下拉展开动画
                return this.isUp ? "height:500px;opacity:1;" : "height:0px;opacity:0;"
            },
            fontStyle(){            //字体样式
                if(this.$attrs.disabled == ''){
                    return "color:#ccc;cursor:no-drop;background:rgb(236, 237, 241);"
                }
                if(this.isCheckSelect){
                    return this.selectedValueGroup.length > 0 ? "color:black" : "color:#ccc"
                }
                return this.selectedValue == "" ? "color:#ccc" : "color:black"
            },
            optionStyle(){          //下拉列表选中样式
                return (item) =>{
                    var returnStyle = ''
                    returnStyle = item.disabled ? "cursor:no-drop;color:#ccc;" : ""
                    if(returnStyle){
                        return returnStyle
                    }
                    if(this.isCheckSelect){
                        return this.selectedValueGroup.indexOf(item.value) !== -1 ? "color:rgb(52, 52, 236);background:rgb(236, 237, 241);font-weight:bold;" : "color:black"
                    }else{
                        return item.value == this.selectedValue ? "color:rgb(52, 52, 236);background:rgb(236, 237, 241);font-weight:bold;" : "color:black"
                    }
                    
                }
            },
            iconStyle(){        //下拉图标旋转
                return this.isUp ? "transform: rotate(180deg)" : "transform: rotate(0deg)"
            },
            canClear(){         //是否显示清除图标
                return (this.$attrs.clearable == '' && this.selectedValue !== "") || this.selectedValueGroup.length > 0
            },
            isGroupSelect(){        //是否为分组select
                return this.$attrs.optionGroup == '' ? true : false
            },
            isCheckSelect(){        //是否为多选select
                return this.$attrs.isCheckSelect == '' ? true : false
            },
            optionDataSource(){         //经过搜索过滤后的列表
                if(this.$attrs.avaSearch == ''){
                    if(this.selectedValue == "") return this.dataSource       //请选择，默认全部展示
                    if(this.$attrs.optionGroup == ''){                  //分组select的过滤
                        var newArr = [];
                        this.dataSource.forEach(item=>{
                            var arr = item.data.filter(item2=>{
                                return item2.value.includes(this.selectedValue)
                            })
                            if(arr.length !== 0){
                                newArr.push(
                                    {
                                        menu:item.menu,
                                        data:arr
                                    }
                                )
                            }
                        })
                        return newArr
                    }else{                      //单选select的过滤
                        return this.dataSource.filter(item=>{
                            return item.value.includes(this.selectedValue)
                        })
                    }
                    
                }else{
                    return this.dataSource
                }
            }
        },
    }
</script>

<style scoped>
.selectBox{
    width:237px;
    margin:30px 0 0 30px;
    display:flex;
    flex-direction: column;

}
.selectPar{
    width:237px;
    position: relative;
    cursor: pointer;
}
.selectPar .select{
    width:220px;
    min-height:30px;
    outline: none;
    border:1px solid #ccc;
    font-size:12px;
    line-height:30px;
    padding:5px 0 5px 15px;
    border-radius: 5px;
    transition:0.2s linear;
    cursor: pointer;
    user-select:none;
}
.checkSelect{
    display: inline-block;
    height:30px;
    background: rgb(218, 218, 218);
    color:rgb(151, 150, 150);
    text-align: center;
    margin-right:10px;
    padding:0 5px;
    margin-top:2px;
}
.checkSelect span{
    display: inline-block;
    border-radius: 50%;
    background: rgb(54, 54, 54);
    width:15px;
    height:15px;
    line-height: 12px;
    color:#fff;
}
.selectPar i{
    position: absolute;
    right:10px;
    top:10px;
    transition:0.2s linear;

}
.select:hover{
    border:1px solid black;
    transform: rotate();
}
.select:focus{
    border:1px solid rgb(52, 52, 236);
}
.optionList{
    width:235px;
    height:0px;
    transition: 0.2s linear;
    box-shadow:rgb(214, 214, 214) 2px 2px 2px;
    border: 1px solid #ccc;
    margin-top:5px;
    border-radius: 5px;
    overflow: auto;
    overflow-x: hidden;
    overflow-y:hidden;
}
.optionList:hover{
    overflow-y:scroll;
}
.menuGroup .title{
    margin-left:15px;
    font-size:12px;
    color:#ccc;
}
.menuGroup{
    border-bottom:1px solid #ccc;
    padding-bottom:15px;
    margin:15px 10px;
    box-sizing: border-box;
    margin-top:10px;
}
.option{
    width:200px;
    height:30px;
    line-height:30px;
    padding:5px 10px 5px 15px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
}
.option .title{
    font-size:14px;
    color:rgb(184, 184, 184);
    margin-right:15px;
}
.option .value{
    font-size:15px;
}
.option:hover{
    background: rgb(236, 237, 241);
}
</style>