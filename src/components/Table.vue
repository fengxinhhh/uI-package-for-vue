<template>
    <div class = "table" :style = "defaultStyle">
        <!-- 遍历给table-colums所有的列 -->
        <slot v-for = "item in slotKeys" :name = "item" list = "item" ></slot>
    </div>
</template>

<script>
    export default {
        name:'fl-Table',
        computed: {
            slotKeys() {            //所有列标题的解构
                return Object.keys(this.$slots)
            },
            defaultStyle() {
                var returnStyle = ''
                if(this.$attrs.height){
                    returnStyle += `height:${this.$attrs.height}px;`
                }
                if(this.$attrs.width){
                    returnStyle += `width:${this.$attrs.width}px;`
                }

                return returnStyle
            }
        },  

    }
</script>

<style scoped>
.table{
    display: flex;
    min-height:200px;
    overflow: scroll;
}
</style>