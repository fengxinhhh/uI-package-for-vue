<template>
    <div class = "collapse" :style = "defaultWidth">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'fl-Collapse',
        computed: {
            defaultWidth() {
                if(this.$attrs.width){
                    return `width:${this.$attrs.width}px;`
                }
            }
        },
    }
</script>

<style scoped>
.collapse{
    width:600px;
}
</style>