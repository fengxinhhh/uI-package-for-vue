<template>
    <div class = "inputBox">
        <!-- 前部插槽 -->
        <div class = "beforeContent" v-if = "beforeContent">
            <slot name = "beforeContent"></slot>
        </div>
        <div class = "inputContent">
            <input 
            :type = "chooseInputType" 
            :placeholder="$attrs.placeholder || chooseInputType == 'text' ? '请输入内容' : '请输入密码'"
            ref = "inputRef"
            :style = "iptStyle"
            :disabled = "disabled"
            :maxlength= "$attrs.maxlength !== '' ? $attrs.maxlength : '' "
            :minlength= "$attrs.minlength !== '' ? $attrs.minlength : '' "
            @input="setText($event)"
            @click = "showSearchList"
            >
            <!-- 输入长度监听 -->
            <div class = "showIptNum" v-if = "$attrs.maxlength">{{iptTextNum}}/{{$attrs.maxlength}}</div>
            <!-- 输入框错误提示 -->
            <span class = "messageBox">{{msgText}}</span>
            <!-- 搜索提示列表 -->
            <ul class = "searchList" :style = "serachListStyle" v-if = "searchListIsShow && $attrs.useSearch == '' && searchList.length > 0">
                <li v-for = "item in searchList" :key = "item.value" @click = "handClick(item)">{{item.value}}</li>
            </ul>
            <!-- 清空文本按钮 -->
            <span class = "reset" v-if = "$attrs.clearable == ''" @click = "clearText">x</span>
        </div>        
        <!-- 前部插槽 -->
        <div class = "afterContent" v-if = "afterContent">
            <slot name = "afterContent"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:"fl-Input",
        props: {
            'value': {          //双向绑定传参
                type: String,
                default: ''
            },
            'disabled': {       //禁用传参
                type: Boolean,
                default: false
            },
            'searchList': {      //搜索列表传参
                type: Array,
                default: []
            }
        },
        data() {
            return {
                iptTextNum:0,               //输入框文本数量
                searchListIsShow:false ,     //搜索列表显示状态
                msgText:'',                 //输入框错误提示文本
            }
        },
        methods: {
            setText(e) {        //双向绑定文本内容
                this.iptTextNum = e.target.value.length
                this.$emit('input',e.target.value)
                if(this.$attrs.minlength && e.target.value.length < this.$attrs.minlength){
                    this.msgText = `最小输入长度为${this.$attrs.minlength}位`
                }else{
                    this.msgText = ""
                }
            },
            clearText(){            //清空文本
                this.$refs.inputRef.value = ''
                this.$emit('input','')
            },  
            showSearchList(){
                this.searchListIsShow = !this.searchListIsShow
            },
            handClick(item){        //选择提示下拉值
            console.log(1)
                this.$refs.inputRef.value = item.value
                this.iptTextNum = item.value.length > this.$attrs.maxlength ? Number(this.$attrs.maxlength) : item.value.length
                console.log(this.iptTextNum)
                 if(this.$attrs.minlength && this.iptTextNum < this.$attrs.minlength){
                    this.msgText = `最小输入长度为${this.$attrs.minlength}位`
                }else{
                    this.msgText = ""
                }
                this.$emit('input',item.value)
                this.$emit('handClick',item)
                this.searchListIsShow = false
            },
        },
        

        computed: {
            iptStyle() {               //文本的样式，包含禁用、宽度
                var returnStyle = ""
                if(this.disabled){
                    returnStyle += "cursor:no-drop;background:rgb(218, 217, 217);"
                }
                if(this.$attrs.width){
                    returnStyle += `width:${this.$attrs.width}px`;
                }
                return returnStyle
            },
            serachListStyle(){          //下拉提示框样式
                var returnStyle = ""
                if(this.$attrs.width){
                    returnStyle += `width:${this.$attrs.width}px`;
                }
                return returnStyle
            },
            chooseInputType(){              //判断为密码输入框还是普通文本框
                if(this.$attrs.useSearch == ''){
                    return 'text'
                }
                return this.$attrs.showPassword == '' ? 'password' : 'text'
            },
            beforeContent(){            //头部slot
                if(this.$slots.beforeContent[0].children){
                    return true
                }
                return false
            },
            afterContent(){             //尾部slot
                if(this.$slots.afterContent[0].children){
                    return true
                }
                return false
            },

        },

    }
</script>

<style scoped>
.inputBox{
    display: inline-block;
    position: relative;
    display: flex;
    align-items: center;
    margin:10px 50px;
}
input{
    width:180px;
    height:30px;
    border:1px solid #ccc;
    border-radius: 5px;
    outline: none;
    padding:5px 50px 5px 15px;
    cursor: pointer;
}
input:focus{
    border:1px solid blue;
}
.reset{
    position: absolute;
    top:15px;
    right:10px;
    width:10px;
    height:10px;
    border-radius: 50%;
    border:1px solid rgb(182, 180, 180);
    color:rgb(182, 180, 180);
    text-align: center;
    line-height:6px;
    font-size:10px;
}
.reset:hover{
    border:1px solid rgb(129, 128, 128);
    color:rgb(129, 128, 128);
    cursor: pointer;
}
.beforeContent,.afterContent{
    font-size:10px;
    padding:0 20px;
    background: rgb(231, 231, 231);
    height:42px;
    line-height: 42px;
    border-radius:0 5px 5px 0
}
.beforeContent{
    border-radius:5px 0 0 5px;
}
.inputContent{
    position: relative;
}
.searchList{
    width:170px;
    height:150px;
    overflow: auto;
    padding:0 15px;
    background: #fff;
    font-size:14px;
    border:1px solid #ccc;
    position: absolute;
    top:42px;
    left:0;
}
.searchList li{
    height:15px;
    margin:5px 0;
    padding:5px 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
}
.searchList li:hover{
    background: rgb(231, 231, 231);
    cursor: pointer;
}
.showIptNum{
    position: absolute;
    top:12px;
    right:10px;
    font-size:12px;
}
.messageBox{
    position: absolute;
    font-size:12px;
    color:red;
    top:42px;
    left:10px;
    width:300px;
}
</style>