<template>
    <div class = "tree">
        <div class = "firstTree" v-for = "item in dateSource" :key = "item.label">
            <div>
                <i :class = "item.display ? 'el-icon-caret-bottom' : 'el-icon-caret-right'" @click = "showFirstChild(item)"></i>
                <input type = "checkbox" @change = "checkTree(item,1)" :checked = "item.checked" v-if = "$attrs.avaChecked == ''" :disabled = "item.disabled ? true : false">
                <span>{{item.label}}</span>
            </div>
            <div class = "secordTree" v-for = "item2 in item.children" :key = "item2.label">
                <div v-if = "item.display">
                    <i :class = "item2.display ? 'el-icon-caret-bottom' : 'el-icon-caret-right'" @click = "showSecordChild(item,item2)"></i>
                    <input type = "checkbox" @change = "checkTree([item,item2],2)" :checked = "item2.checked" v-if = "$attrs.avaChecked == ''" :disabled = "item2.disabled || item.disabled ? true : false">
                    <span>{{item2.label}}</span>
                </div>
                <div class = "thirdree" v-for = "item3 in item2.children" :key = "item3.label">
                    <div v-if = "item2.display">
                        <input type = "checkbox" @change = "checkTree([item,item2,item3],3)" :checked = "item3.checked" v-if = "$attrs.avaChecked == ''" :disabled = "item3.disabled || item2.disabled || item.disabled ? true : false">
                        <!-- <i class = "el-icon-caret-right"></i> -->
                        <span>{{item3.label}}</span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        name:'fl-Tree',
        props: {
            dateSource: {
                type: Array,
                default: []
            },
        },
        data(){
            return {
               
                
            }
        },
        methods: {
            //切换一级列表
            showFirstChild(item){
                var index = this.dateSource.findIndex(data=>{
                    return data == item
                })
                if(this.dateSource[index].display){
                    this.dateSource[index].children.map(item=>{
                        return item.display = false
                    })
                }
                if(this.$attrs.onlyShowOne == ''){
                    this.dateSource.map(item=>{
                        item.children.map(item2=>{
                            item2.children.map(item3=>{
                                return item3.display = false;
                            })
                            return item2.display = false;
                        })
                        return item.display = false
                    })
                }
                
                this.dateSource[index].display = !this.dateSource[index].display
                this.$emit('afterToggle',this.dateSource[index])
            },
            //切换二级列表
            showSecordChild(item,item2) {
                //一级下标
                var index = this.dateSource.findIndex(data=>{
                    return data == item
                })
                //二级下标
                var index2 = item.children.findIndex(data=>{
                    return data == item2
                })
                
                this.dateSource[index].children[index2].display = !this.dateSource[index].children[index2].display
                this.$emit('afterToggle',this.dateSource[index].children[index2])
            },
            checkTree(data,level){
                var index;
                //一级分类选中
                if(level == 1){
                    index = this.dateSource.findIndex(item=>{
                        return item == data
                    })
                    this.dateSource[index].checked = !this.dateSource[index].checked;
                    
                    this.dateSource[index].children.map(item=>{
                        if(this.dateSource[index].checked){
                            if(!item.disabled){
                                item.children.map(item2=>{
                                    if(!item2.disabled){
                                        return item2.checked = true
                                    }
                                    
                                })
                                return item.checked = true
                            }
                            
                        }else{
                            item.children.map(item2=>{
                                return item2.checked = false
                            })
                            return item.checked = false
                        }
                    })
                    this.$emit('handleChecked',this.dateSource[index])
                }
                //二级分类选中
                if(level == 2){
                    var firstIndex = this.dateSource.findIndex(item=>{
                        return item == data[0]
                    })
                    index = this.dateSource[firstIndex].children.findIndex(item=>{
                        return item == data[1]
                    })
                    this.dateSource[firstIndex].children[index].checked = !this.dateSource[firstIndex].children[index].checked
                    if(!this.dateSource[firstIndex].children[index].checked){
                        this.dateSource[firstIndex].checked = false;
                    }
                    this.dateSource[firstIndex].children[index].children.map(item=>{
                        if(this.dateSource[firstIndex].children[index].checked){
                            if(!item.disabled){
                                return item.checked = true
                            }
                        }
                        return item.checked = false
                    })
                    //第二节被选中后需更新第一节选中状态
                    this.dateSource[firstIndex].checked = this.checkedChildAll(this.dateSource[firstIndex].children)
                    this.$emit('handleChecked',this.dateSource[firstIndex].children[index])
                }
                //三级分类选中
                if(level == 3){
                    var firstIndex = this.dateSource.findIndex(item=>{
                        return item == data[0]
                    })
                    var secordIndex = this.dateSource[firstIndex].children.findIndex(item=>{
                        return item == data[1]
                    })
                    index = this.dateSource[firstIndex].children[secordIndex].children.findIndex(item=>{
                        return item == data[2]
                    })
                    this.dateSource[firstIndex].children[secordIndex].children[index].checked = !this.dateSource[firstIndex].children[secordIndex].children[index].checked
                    //第三节被选中后需更新第二节、第一节的选中状态
                    this.dateSource[firstIndex].children[secordIndex].checked = this.checkedChildAll(this.dateSource[firstIndex].children[secordIndex].children)
                    this.dateSource[firstIndex].checked = this.checkedChildAll(this.dateSource[firstIndex].children)
                    this.$emit('handleChecked',this.dateSource[firstIndex].children[secordIndex].children[index])
                }
            },
            checkedChildAll(arr){           //判断该数组的子节点是否全被选中
                return arr.every(item=>{
                    return item.checked
                })
            }
        },
    }
</script>

<style scoped>
.tree{
    /* width:200px; */
}
.secordTree{
    padding-left:20px;
}
.thirdree{
    padding-left:40px;
}
i{
    cursor: pointer;
}
</style>