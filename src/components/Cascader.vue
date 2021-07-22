<template>
  <div>
    <div class="selectBox">
      <div class="selectPar" @click="toggleOption">
        <input type="text" class="select" placeholder="请选择" :value = "selectVal" :disabled = "$attrs.avaSearch == '' ? false : true" @input="search($event)"/>
        <i class="el-icon-arrow-down" :style="iconStyle" v-if = "$attrs.clearable == undefined || ($attrs.clearable == '' && clickList.length !== 3)"></i>
        <i class = "el-icon-close" v-else-if = "clickList.length > 0 && $attrs.clearable == ''" @click.stop = "clearOption"></i>
      </div>
      <div class = "optionBox">
        <ul class="optionList" :style="selectStyle" ref="optionList">
            <li class="option" v-for = "item in dataSource" :key = "item.value" @click = "selectFirst(item)"  :style = "activedOptionFontStyle1(item)">
                <i class = "el-icon-circle-check" @click.stop = "checkSelect(item,1)" v-if = " $attrs.ableChecked == ''"></i>
                <!-- <i class = "el-icon-circle-close"></i> -->
                <span>{{item.label}} 
                    <b v-if = "$attrs.showNum == ''">({{item.children.length}})</b>
                </span>
                <i class="el-icon-arrow-right"></i>
            </li>
        </ul>
        <ul class="optionList" :style="selectStyle" ref="optionList" v-if = "activedSecord || secordOptionShow">
            <li class="option" v-for = "item in secordOptionList" :key = "item.value" @click = "selectSecord(item)" :style = "activedOptionFontStyle2(item)">
                <i class = "el-icon-circle-check" @click.stop = "checkSelect(item,2)" v-if = " $attrs.ableChecked == ''"></i>
                <span>{{item.label}}
                     <b v-if = "$attrs.showNum == ''">({{item.children.length}})</b>
                </span>
                <i class="el-icon-arrow-right"></i>
            </li>
        </ul>
        <ul class="optionList" :style="selectStyle" ref="optionList" v-if = "activedThird || thirdOptionShow">
            <li class="option lastOption" v-for = "item in thirdOptionList" :key = "item.value" @click = "selectThird(item)" :style = "activedOptionFontStyle3(item)">
                <i class = "el-icon-circle-check" @click.stop = "checkSelect(item,3)" v-if = " $attrs.ableChecked == ''"></i>
                <span>
                    <i class = "el-icon-check" v-if = "activedThird == item.label && $attrs.ableChecked !== ''"></i>
                    <i class = "space" v-else></i>
                    {{item.label}}
                </span>
            </li>
        </ul>
      </div>
      <!-- 搜索弹出层 -->
      <div class = "search" v-if = "searchList.length !== 0">
          <span v-for = "item in searchList" :key = "item" @click = "selectSearchOption(item)">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name:'fl-Cascader',
        props: {
            showAll: {
                type: Boolean,
                default: true
            },
            dataSource: {
                type: Array,
            }
        },
        data() {
            return {
                isUp: false,
                isShow:false,
                selectVal:'',       //选中值
                secordOptionShow:false,
                thirdOptionShow:false,
                secordOptionList:[],        //二级列表
                thirdOptionList:[],         //三级列表
                activedFirst:'',
                activedSecord:'',
                activedThird:'',
                searchText:'',      //搜索文本
                searchList:[],       //搜索列表
                clickList:[],       //选中的最终值
            }
                
        },
        methods: {
            toggleOption() {        //select展开收起切换
                this.isUp = !this.isUp
                this.$refs.optionList.style.height = this.isUp ? "200px" : "0px"
                this.$refs.optionList.style.opacity = this.isUp ? "1" : "0"
            },
            selectFirst(value){     //点击一级列表显示二级列表
                if(this.$attrs.ableChecked !== ''){
                    this.activedSecord = this.activedSecord ? '' : ''
                    this.activedThird = this.activedThird ? '' : ''         //如果二三级被选了，清除
                }
                
                if(this.thirdOptionShow){
                    this.thirdOptionShow = false;
                }
                this.activedFirst = value.label
                this.secordOptionList = value.children
                this.secordOptionShow = true
            },
            selectSecord(value){         //点击二级列表显示三级列表
                this.activedThird = this.activedThird ? '' : ''         //如果三级被选了，清除
                this.activedSecord = value.label
                this.thirdOptionList = value.children
                this.thirdOptionShow = true
            },
            selectThird(value){
                this.activedThird = value.label
                if(this.showAll){
                    this.selectVal = `${this.activedFirst} / ${this.activedSecord} / ${this.activedThird}`
                }else{
                    this.selectVal = this.activedThird
                }
                this.clickList = [this.activedFirst,this.activedSecord,this.activedThird]
                this.$emit('change',this.clickList)
                this.isUp = false
            },
            clearOption(){              //清空选项
                this.clickList = [];
                this.activedFirst = this.activedSecord = this.activedThird = ''
                this.selectVal = ''
                this.secordOptionShow = false;
                this.thirdOptionShow = false;
                this.secordOptionList = [];
                this.thirdOptionList = [];
            },
            search(e){
                this.selectVal = e.target.value
                this.searchList = this.allFormatOption.filter(item=>{
                    return item.includes(this.selectVal)
                })
                if(this.selectVal == ''){
                    this.searchList = []
                }
                
            },
            selectSearchOption(value){       //选中搜索结果
                this.selectVal = value
                var formatStr = value.replaceAll(' ','')
                var arr = formatStr.split('/')
                this.activedFirst = arr[0]; 
                this.activedSecord = arr[1]; 
                this.activedThird = arr[2]; 
                var firstArr = this.dataSource.filter(item=>{
                    return item.label == this.activedFirst
                })
                var secordArr = firstArr[0].children.filter(item=>{
                    return item.label == this.activedSecord
                })
                this.secordOptionList = firstArr[0].children
                this.thirdOptionList = secordArr[0].children
                this.searchList = []
                this.isUp = true
                this.$refs.optionList.style.height = '200px'
                this.$refs.optionList.style.opacity = "1"
            }
        },
        computed: {
            selectStyle() {             //下拉展开动画
                return this.isUp ? "height:200px;opacity:1;" : "height:0px;opacity:0;"
            },
            iconStyle(){        //下拉图标旋转
                return this.isUp ? "transform: rotate(180deg)" : "transform: rotate(0deg)"
            },
            activedOptionFontStyle1(){       //被选中的文字高亮
                return(value)=>{
                    console.log(value)
                    var newStyle = ''
                    if(value.disabled) return 'cursor:no-drop;pointer-events: none;'
                    if(this.activedFirst == value.label)   return 'color: rgb(55, 102, 204);font-weight:500;'
                    return newStyle
                }
            },
            activedOptionFontStyle2(){       //被选中的文字高亮
                return(value)=>{
                    if(value.disabled) return 'color:rgb(226, 226, 226);pointer-events: none;'
                    if(this.activedSecord == value.label)   return 'color: rgb(55, 102, 204);font-weight:500;'
                    return ''
                }
            },
            activedOptionFontStyle3(){       //被选中的文字高亮
                return(value)=>{
                    if(this.activedThird == value.label)   return 'color: rgb(55, 102, 204);font-weight:500;'
                   
                        
          
                    return ''
                }
            },
            allFormatOption(){
                var arr = this.dataSource
                var filterArrStr = '';
                var returnArr = []
                arr.forEach(item=>{        //数据处理
                    filterArrStr += item.label;
                    item.children.forEach(item2=>{
                        filterArrStr += ' / ' + item2.label
                        item2.children.forEach(item3=>{
                            filterArrStr += ' / ' + item3.label
                            returnArr.push(filterArrStr)
                            filterArrStr = item.label + ' / ' + item2.label
                        })
                        filterArrStr = item.label
                    })
                    filterArrStr = ''
                })
                return returnArr
            }
            

        },
    }
</script>

<style scoped>
.selectBox {
  width: 237px;
  margin: 30px 0 0 30px;
  display: flex;
  flex-direction: column;
  position: relative;
}
.selectPar {
  width: 237px;
  position: relative;
  cursor: pointer;
}
.selectPar .select {
  width: 220px;
  min-height: 30px;
  outline: none;
  border: 1px solid #ccc;
  font-size: 12px;
  line-height: 30px;
  padding: 5px 0 5px 15px;
  border-radius: 5px;
  transition: 0.2s linear;
  cursor: pointer;
  user-select: none;
}
.select:hover {
  border: 1px solid black;
  transform: rotate();
}
.select:focus {
  border: 1px solid rgb(55, 102, 204);
}
.selectPar i {
  position: absolute;
  right: 10px;
  top: 10px;
  transition: 0.2s linear;
}
.optionBox{
    width:450px;
    display: flex;
}
.optionList {
  width:33%;
  height: 0px;
  transition: 0.2s linear;
  box-shadow: rgb(214, 214, 214) 2px 2px 2px;
  border: 1px solid #ccc;
  margin-top: 5px;
  border-radius: 5px;
  font-size:14px;
}
.optionList .option{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 10px;
    height:30px;
}
.optionList .lastOption{
    justify-content:left;
}
.optionList .option:hover{
    cursor: pointer;
    background: rgb(208, 206, 218);
}
.optionList i{
    margin-right:10px;
}
.optionList .space{
    display: inline-block;
    width:14px;
}
.search{
    width:200px;
    min-height:60px;
    background: rgb(245, 246, 247);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    z-index:2;
    position: absolute;
    top:50px;
    text-align: center;
    font-size:12px;
}
.search span{
    width:160px;
    padding:0 20px;
    cursor: pointer;
    margin-bottom:10px;
}
</style>