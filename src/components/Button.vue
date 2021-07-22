<template>
    <div>
        <button 
            :class = "type"  
            :style = "changeOtherStyle"  
            :disabled = "isDisabled"
            @click = "handleClick">
            <slot>按钮</slot>
        </button>
    </div>
</template>

<script>
    export default {
        name:'fl-Button',               //组件名
        props: {
            type: {
                type: String,
                default: ''
            },
        },   
        methods: {
            handleClick() {
                this.$emit('handleClick',11)
            }
        },
                      //按钮样式
        computed: {
            changeOtherStyle() {        //attr额外样式
                var otherStyle = {}
                if(this.$attrs.big == ""){
                    otherStyle.width = "120px";
                    otherStyle.height = "50px"
                }
                if(this.$attrs.small == ""){
                    otherStyle.width = "80px";
                    otherStyle.height = "25px"
                }
                if(this.$attrs.round == ""){
                    otherStyle.borderRadius = "40px"
                }
                if(this.$attrs.disabled == "" || this.$attrs.disabled == true){
                    otherStyle.cursor = " no-drop"
                    otherStyle.opacity = "0.5"
                }
                return otherStyle
            },
            isDisabled(){           //是否禁用
                this.$attrs.disabled == "" ? true : false
            }
        },
    }
</script>

<style scoped>
/* 按钮默认样式 */
button{
    border:1px solid #ccc;
    outline: none;
    width:100px;
    height:35px;
    color:black;
    border-radius: 5px;
}
button:hover{
    opacity: 0.8;
    cursor: pointer;
}
/* type传参样式 */
.primary{
    background: rgb(86, 73, 255);
    color:#fff;
}
.success{
    background: rgb(37, 196, 37);
    border:none;
    color:#fff;
}
.info{
    background: rgb(70, 70, 70);
    color:#fff;
}
.warning{
    background:rgb(221, 142, 39);
    color:#fff;
}
.danger{
    background:rgb(209, 32, 32);
    color:#fff;
}
.text{
    background:#fff;
    color:rgb(86, 73, 255);
    border:none;
}

</style>