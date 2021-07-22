<template>
    <div class = "pragination">
        <i v-if = "$attrs.showInfo == ''">共：{{totalPage}}页 / {{total}}条</i>
        <select @change="changePageSize" v-if = "$attrs.choosePageSizeBySelect == ''">
            <option v-for = "item in pageSizeList" :key = "item" :value = "item">{{item}}条/页</option>
        </select>
        <i class = "el-icon-arrow-left" @click = "prevPage" :style = "prevDefaultStyle"></i>
        <span v-if = "totalPage > maxShowPageBox && (nowPageNum > morePageMid) && morePageMid !== 0 && total > 50" @click = "showPrevPageGroup">...</span>
        <span :class = "item == nowPageNum || item + morePageMid == nowPageNum ? 'active' : ''"  v-for = "item in showMaxPage" :key = "item" @click = "changePageNum(item)">{{item + morePageMid}}</span>
        <span v-if = "totalPage > maxShowPageBox && morePageMid * 2 < totalPage && total > 50" @click = "showNextPageGroup">...</span>
        <i class = "el-icon-arrow-right" @click = "nextPage"  :style = "nextDefaultStyle"></i>
        <i v-if = "$attrs.showInfo == ''">当前为第 {{nowPageNum}} 页</i>
        <i v-if = "$attrs.choosePageNumByInput == ''">前往<input type = "text"  class = "inputChangePageSize" @keydown.enter="inputChangePageSize">页</i>
    </div>
</template>

<script>
    export default {
        name:'fl-Pagination',
        props: {
            total: {        //数据总数
                type: Number,
                default: 1
            },
            pageSizeList: {        //数据总数
                type: Array,
            },
            maxShowPageCard:{        //最多展示的页盒子
                type: Number,
                default: 5
            },
            pageNumList:{           //select页码选择列表
                type: Array,
            }
        },
        data() {
            return {
                nowPageNum:1,       //当前页码           
                usePageSize:this.pageSizeList[0],         //每页数量
                maxShowPageBox:this.maxShowPageCard,       //最多展示页盒子
                morePageMid:0,          //更多展示页扩展比例
            }   
        },
        
        methods: {
            prevPage(){         //上一页
                if(this.nowPageNum > 1){
                    if(this.nowPageNum - 1 < (this.morePageMid + 1)){
                        this.showPrevPageGroup()
                        this.nowPageNum = this.maxShowPageBox + this.morePageMid
                    }else{
                        this.nowPageNum--
                    }
                    this.$emit('changePageNum',this.nowPageNum)
                }
            },
            nextPage() {        //下一页
                if(this.nowPageNum < this.totalPage){
                    if(this.nowPageNum + 1 > this.maxShowPageBox + this.morePageMid){
                        this.showNextPageGroup()
                    }else{
                        this.nowPageNum++;
                    }
                    this.$emit('changePageNum',this.nowPageNum)
                }
            },
            changePageNum(pageNum){         //点击改变页码
                this.nowPageNum = pageNum + this.morePageMid
                this.$emit('changePageNum',this.nowPageNum)
            },
            showPrevPageGroup(){            //展示上一组扩展
                if(this.morePageMid !== 0){
                    this.morePageMid -= this.maxShowPageBox;
                    this.nowPageNum = this.morePageMid + 1
                    this.$emit('changePageNum',this.nowPageNum)
                }
            },
            showNextPageGroup(){            //展示下一组扩展
                this.morePageMid += this.maxShowPageBox;
                this.nowPageNum = this.morePageMid + 1
                this.$emit('changePageNum',this.nowPageNum)
            },
            changePageSize(e){           //改变页码
                this.nowPageNum = 1;
                this.morePageMid = 0;
                this.usePageSize = e.target.value
                this.$emit('changePageSize',this.usePageSize)
            },
            inputChangePageSize(e){         //输入框跳转指定页码
                if(e.target.value > this.totalPage){
                    return e.target.value = ''
                }else{
                    this.nowPageNum = e.target.value
                    if(this.nowPageNum > this.maxShowPageBox + this.morePageMid){
                        this.morePageMid += this.maxShowPageBox;
                    }
                    else if(this.morePageMid !== 0){
                    this.morePageMid -= this.maxShowPageBox;
                }
                    e.target.value = ''
                }
                this.$emit('changePageNum',this.nowPageNum)
                
            }
        },
        computed: {
            prevDefaultStyle(){         //上一页按钮额外样式
                if(this.nowPageNum == 1){
                    return 'cursor:no-drop'
                }
            },
            nextDefaultStyle(){         //下一页按钮额外样式
                if(this.nowPageNum == this.totalPage){
                    return 'cursor:no-drop'
                }
            },
            totalPage() {               //总页数
                return Math.ceil(this.total / this.usePageSize)
            },
            showMaxPage(){              //每页显示的页盒子数
                if(this.morePageMid * 2 > this.totalPage){
                    return this.totalPage - this.morePageMid
                }
                if(this.totalPage < this.maxShowPageCard){
                    return this.totalPage
                }
                return this.maxShowPageCard
            }
        },
    }
</script>

<style scoped>
i{
    font-style: normal;
    font-size:13px;
}
.active{
    color:rgb(95, 110, 247)
}
span,.el-icon-arrow-left,.el-icon-arrow-right{
    cursor: pointer;
    margin:0 10px;
}
span:hover{
    color:rgb(95, 110, 247)
}
.el-icon-arrow-left:hover,.el-icon-arrow-right:hover{
    color:rgb(95, 110, 247);
}
select{
    outline: none;
}
.inputChangePageSize{
    outline: none;
    width:40px;
    border-radius: 15px;
    border: 2px solid #ccc;
    transition: 0.2s linear;
}
.inputChangePageSize:focus{
    border-color:rgb(117, 156, 206);
}

</style>