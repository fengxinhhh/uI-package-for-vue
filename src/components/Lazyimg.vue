<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'fl-Lazyimg',
        mounted () {
            this.imgDomList = this.$slots.default.filter(item=>{
                return item.tag == 'img'
            })
            this.imgDomList = this.imgDomList.map(item=>{       //分解所有IMG资源
                return item.elm
            })  
            this.obverseImg()
        },
        data() {
            return {
                imgDomList:[],      //图片组DOM
            }
        },
        methods: {
            obverseImg() {
                this.imgDomList.forEach((img,index)=>{
                    var io = new IntersectionObserver(entries => {      //监听DOM是否可见
                        if(entries[0].isIntersecting){
                            io.unobserve(this.imgDomList[index]);           //数据取消劫持，展示图片
                            setTimeout(() => {
                                this.imgDomList[index].setAttribute('src',this.imgDomList[index].getAttribute('src-data'))
                            }, 500); 
                        }
                    });
                    io.observe(this.imgDomList[index]);         //数据劫持监听
                })
               
            }
        },
    }
</script>

<style scoped>

</style>