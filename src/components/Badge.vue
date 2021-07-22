<template>
    <div class = "badge">
        <button class = "btn">
            <slot></slot>
            <span class = "num" :style = "backgroundColor">{{formatTagNum}}</span>
        </button>
    </div>
</template>

<script>
    export default {
        name:'fl-Badge',
        props: {
            tagNum: {
                type: String,
                default: 1
            },
            max: {
                type: String,
                default: 10
            },
        },
        computed: {
            backgroundColor() {
                if(this.$attrs.tagColor){
                    return `background:${this.$attrs.tagColor}`
                }
                return 'background:red'
            },
            formatTagNum(){
                if(this.tagNum < 0){
                    return 1
                }
                return Number(this.tagNum) >= Number(this.max) ? Number(this.tagNum) + '+' : Number(this.tagNum)
            }
        },
    }
</script>

<style scoped>
.badge{
    width:100px;
}
.btn{
    width:60px;
    height:30px;
    border:1px solid #ccc;
    background: #fff;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
}
.btn:hover{
    background: rgb(194, 235, 238);
    border-color: rgb(149, 211, 216);;
}
.btn .num{
    position: absolute;
    top:-10px;
    right:-20px;
    border-radius: 15px;
    color:#fff;
    width:20px;
    padding:3px;
    font-size:10px;
}
</style>