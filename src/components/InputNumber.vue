<template>
    <div>
        <div class = "inputNumber" :style = "sizeStyle">
            <div class = "left" @click = "jianNum" :style = "leftDisabled ? {cursor:'no-drop',color:'rgb(170, 170, 170)'} : ''">
                -
            </div>
            <input type = "text" class = "content" :value = "value" ref = "input" @blur="blurIpt($event)" >
            <div class = "right" @click = "addNum" :style = "rightDisabled ? {cursor:'no-drop',color:'rgb(170, 170, 170)'} : ''">
                +
            </div>
        </div>
        <span class = "msg" ref = "msg">不满足精度或步长</span>
    </div>
</template>

<script>
    export default {
        name:'fl-InputNumber',
        props: {
            value: {
                type: Number,
                default: 1
            },
            max: {
                type: Number,
            },
            min: {
                type: Number,
            },
            step: {
                type: Number,
                default: 1
            },
            precision: {
                type: Number,
            }
        },
        data() {
            return {
                leftDisabled: true,
                rightDisabled: false,
            }
        },
        methods: {
            jianNum() {             //减数
                if(this.value == this.min || this.value + this.step < this.min) return this.leftDisabled = true
                if(this.precision && !Number.isInteger(this.step)){
                    this.$emit('input',Number((this.value - this.step).toFixed(this.precision)))
                }else{
                    this.$emit('input',this.value - this.step)
                }
                if(this.value - this.step == this.min){
                    this.leftDisabled = true
                }
                if(this.rightDisabled){
                    this.rightDisabled = false
                }
                
                this.$emit('handleClick',this.value - this.step)
            },
            addNum() {          //加数
                if(this.value == this.max || this.value + this.step > this.max) return leftDisabled = true
                if(this.precision && !Number.isInteger(this.step)){
                    this.$emit('input',Number((this.value + this.step).toFixed(this.precision)))
                }else{
                    this.$emit('input',this.value + this.step)
                }
                if(this.value + this.step == this.max){
                    this.rightDisabled = true
                }
                if(this.leftDisabled){
                    this.leftDisabled = false
                }
                this.$emit('handleClick',this.value + this.step)
            },
            blurIpt(e){         //input失去焦点分支
                if(Number.isNaN(Number(e.target.value))){           //非数值
                    this.$refs.input.value = this.step
                    this.$emit('input',this.step)
                }
                if(e.target.value > this.max || e.target.value < this.min){         //输入值越界
                    this.$refs.input.value = this.step
                    return
                }else if(this.$attrs.strictly == '' && !Number.isInteger(Number(e.target.value) / this.step)){   //开启严格匹配
                    this.$refs.msg.style.opacity = 1
                    this.$emit('input',this.step)
                }else{              //无error
                    this.$refs.msg.style.opacity = this.$refs.msg.style.opacity == 1 ?  0 : 0
                    this.$emit('input',Number(e.target.value))
                }
                
            }
        },
        computed: {
            sizeStyle() {       //尺寸样式
                if(this.$attrs.big == ""){
                    return {width:"240px"}
                }else if(this.$attrs.small == ""){
                    return {width:"150px"}
                }
                return {width:"180px"}
            }
        },

    }
</script>

<style scoped>
.inputNumber{
    height:40px;
    border:1px solid #ccc;
    display: flex;
    cursor: pointer;
    transition: .3s linear;
    user-select:none;
}
.inputNumber:hover{
    border:1px solid rgb(19, 30, 185);
    color:blue;
}
.inputNumber:active{
    border:1px solid rgb(19, 30, 185);
}
.content{
    width:50%;
    height:40px;
    text-align: center;
    line-height:40px;
    border:none;
    outline: none;
    cursor: pointer;
}
.left,.right{
    width:25%;
    height:40px;
    font-size:20px;
    text-align: center;
    line-height: 40px;
    background: rgb(203, 214, 221);
}
.msg{
    transition: 0.2s linear;
    font-size:12px;
    color:red;
    opacity: 0;
}

</style>