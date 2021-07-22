<template>
    <div>
        <div class = "breadBox">
            <div class = "breadChild" v-for = "(item,index) in breadcrumbData" :key = "item.path">
                <span :style = "defaultStyle(index)" @click = "toggleRouter(index,item.path,item)">{{item.name}}</span>
                <span class = "centerChose" v-if = "index !== breadcrumbData.length - 1"> {{$attrs.iconSplit ? $attrs.iconSplit : '/'}} </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'fl-Breadcrumb',
        props: {
            breadcrumbData: {
                type: Array,
                default: []
            },
        },
        data() {
            return {
                activeLevel:1,          //选中导航等级
                
            }
        },
        methods: {
            toggleRouter(index,path,data) {              //解析跳转URL
                var baseURL = window.location.href.split('/')[0] + '//' + window.location.href.split('/')[2]
                this.activeLevel = index + 1;
                if(this.$attrs.replacePath == ''){
                    console.log(1)
                    window.history.replaceState(null,null,baseURL + path)
                }else{
                    window.history.pushState(null,null,baseURL + path)
                }
                this.$emit('handleClick',data)
            }
        },
        computed: {
            defaultStyle() {            //选中样式
                return (index) =>{
                    if(index < this.activeLevel){
                        return 'font-weight:bold;cursor:pointer;'
                    }
                }
            }
        },
    }
</script>

<style scoped>
.breadBox{
    display: flex;
}
.breadBox .breadChild{
    margin:0 2px;
    font-size:14px;
}
.breadBox .centerChose{
    margin:0 3px;
}
</style>