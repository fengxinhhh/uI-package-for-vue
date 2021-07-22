<template>
    <div class = "collapse-item">
        <div class = "title" @click = "toggleShow">
            <span>{{title}}</span>
            <i class = "el-icon-arrow-right" :style = "roundIcon"></i>
        </div>
        <div class = "content" :style = "contentStyle">
            <slot></slot>
        </div>
        
    </div>
</template>

<script>
    export default {
        name:'fl-Collapse-Item',
        mounted () {
            this.$bus.$on('otherToggle',(beforoState,title)=>{
                this.contentShow = false
                if(this.title == title){         //状态判断
                    this.contentShow = beforoState
                }
            });
        },
        props: {
            title: {
                type: String,
            },
        },   
        data() {
            return {
                contentShow: false      //显示状态
            }
        },
        methods: {
            toggleShow() {
                this.contentShow = !this.contentShow
                this.$emit('handleToggle',this.title)
                if(this.$attrs.accordion == ''){
                    this.$bus.$emit('otherToggle',this.contentShow,this.title)           //手风琴分发所有状态
                }
            }
        },
        computed: {
            roundIcon() {
                if(this.contentShow){
                    return "transform: rotate(90deg);"
                }else{
                    return "transform: rotate(0deg);"
                }
            },
            contentStyle(){
                if(this.contentShow){
                    if(this.$attrs.height){
                        return `height:${this.$attrs.height}px`;
                    }else{
                        return "height:50px";
                    }
                }else{
                    return "height:0";
                }
            }
        },
    }
</script>

<style scoped>
.collapse-item{
    display: flex;
    flex-direction: column;
    padding:10px 0;
    border-bottom:1px solid #ccc;
    font-size:14px;
}
.collapse-item .title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}
.collapse-item .content{
    height:0;
    transition: 0.1s linear;
    overflow: hidden;
    margin-top:20px;
}
.collapse-item .el-icon-arrow-right{
    transition: 0.1s linear;
    
}
</style>