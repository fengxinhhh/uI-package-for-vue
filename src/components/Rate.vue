<template>
    <div>
        <i class = "el-icon-star-on"
         v-for = "item in 5"
        :key = "item" 
        @mouseover="enter(item)" 
        @mouseout="out" 
        @click = "click(item)" 
        :style = "activedStyle(item)"></i>
        <!-- 星级文本 -->
        <span class = "score" v-if = "score && $attrs.showText == ''">{{score}}分</span>    
    </div>
</template>
<script>
    export default {
        name:'fl-Rate',
        data() {
            return {
                activedList: [],
                isClicked:false,
                score:'',
            }
        },
        methods: {
            enter(id) {
                this.activedList = []
                var i = 1;
                this.score = id
                while(i <= id){
                    this.activedList.push(i)
                    i++;
                }
            },
            out(){
                if(this.isClicked == false){
                    this.activedList = []
                    this.score = ''
                }
                
                this.isClicked = false
            },
            click(id){
                this.activedList = []
                var i = 1;
                while(i <= id){
                    this.activedList.push(i)
                    i++;
                }
                this.score = id
                this.isClicked = true;
                this.$emit('handleClick',id)
            }
        },
        computed: {
            activedStyle() {
                return (id) =>{
                    if(this.activedList.indexOf(id) !== -1){
                        if(this.$attrs.size){
                            return `color:red;font-size:${Number(this.$attrs.size) + 3}px;`
                        }
                            return `color:red;font-size:23px;`
                    }else{
                        if(this.$attrs.size){
                            return `font-size:${this.$attrs.size}px;`
                        }
                        return `font-size:20px;`
                    }
                    
                }
                
            },
           
        },
    }
</script>

<style scoped>
.el-icon-star-on{
    transition:0.2s linear;
    cursor: pointer;
}
.score{
    font-size:12px;
}
</style>