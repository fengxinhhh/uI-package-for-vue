<template>
    <div class = "popover" :style = "defaultStyle">
        <div class = "header" :style = "headerStyle">
            <slot name = "header-left"></slot>
            <slot name = "header-right"></slot>
        </div>
        <slot name = "content">
        </slot>
        <slot name = "footer">

        </slot>
    </div>
</template>

<script>
    export default {
        name:'fl-Card',
        data() {
            return {
                data: ['主题内容1','主题内容2','主题内容3','主题内容4']
            }
        },
        computed: {
            defaultStyle() {
                var returnStyle = ""
                if(this.$attrs.shadow == ''){
                    returnStyle += "box-shadow: #ccc 5px 5px 10px 5px ;"
                }
                if(this.$attrs.border == ''){
                    returnStyle += "border:1px solid #ccc;"
                }
                return returnStyle
            },
            headerStyle(){
                if(this.$attrs.headerBorder == ""){
                    return "border-bottom:1px solid #ccc;"
                }
            }
        },
    }
</script>

<style scoped>
.popover{
    background: #fff;
}
.popover .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom:10px;
}
</style>