<template>
  <div id="app">
    
    <!-- <fl-Radio-Group :dataSouce = "radioData" alignX></fl-Radio-Group> -->
    <!-- <fl-Button type = "primary">123</fl-Button> -->
    <!-- <fl-Check-Group :dataSouce = "checkData" @getCheckedVal = "getCheckedVal" alignX disabled></fl-Check-Group> -->
    <!-- <fl-Input  
    v-model = "text"
    placeholder="请输入内容"
    :disabled = "isdisabled"
    showPassword
    useSearch
    :searchList = "searchData"
    @handClick = "handClick"  
    maxlength = "10"
    minlength = "2"
    >
      <div slot ="beforeContent"></div>
      <div slot ="afterContent">12</div>
    </fl-Input> -->
    <!-- <InputNumber
    class = "aa"
    small
    v-model = "num" 
    :max = 10 
    :min = 0 
    @handleClick="handleClick"
    strictly
    
    >
    </InputNumber> -->
    <!-- <Select v-model = "value" :dataSource = "selectData" optionGroup avaSearch ></Select> -->
    <!-- <fl-Cascader
      :dataSource="dataSource"
      @change="getList"
      avaSearch
      clearable
      disabled
      :showAll = false
    ></fl-Cascader> -->
    <!-- <fl-Button type = "primary">点击</fl-Button> -->
    <!-- <fl-Card class = "popover" shadow headerBorder>
      <div slot = "header-left">
        <span>标题左侧</span>
      </div>
      <div slot = "header-right">
        <fl-Button type = "danger" circle>操作</fl-Button>
      </div>
      <div slot = "content" class = "content">
        <img src = "../src/assets/image/5.jpg" width = "200" height = "200">
        <p>好看的小姐姐</p>
      </div>
      <div slot = "footer" class = "footer">
        <span>2021-7-19</span>
        <fl-Button type = "danger" circle>操作</fl-Button>
      </div>
    </fl-Card> -->
    <!-- <fl-Collapse width = "400">
          <fl-Collapse-Item height = "100" v-for = "(item,index) in collapseData" :key = "index" :title = "item.title"  @handleToggle = "toggle" accordion>
            <b>{{item.content}}</b>
          </fl-Collapse-Item>
    </fl-Collapse> -->
      <!-- <fl-Pagination
      :total = 80
      :maxShowPageCard = 5
      :pageSizeList = [8,15,20,30]
      showInfo
      choosePageSizeBySelect
      choosePageNumByInput
      @changePageNum = "changePageNum"
      @changePageSize = "changePageSize"></fl-Pagination> -->
      <!-- <Tree
      :dateSource = "treeData"
      avaChecked
      defaultOpen
      onlyShowOne
      @afterToggle = "afterToggle"
      @handleChecked = "handleChecked"
      ></Tree> -->
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
    <Lazyimg>
        <img src-data = "../src/assets/image/4.jpg">
        <img src-data = "../src/assets/image/5.jpg">
        <img src-data = "../src/assets/image/6.jpg">
    </Lazyimg>
  </div>
</template>

<script>
import Lazyimg from './components/Lazyimg.vue';
export default {
  name: "app",

  data() {
      return {
           treeData: [
                    {
                    label: '一级 1',
                    display:false,
                    checked:false,
                    children: [{
                        label: '二级 1-1',
                        display:false,
                        checked:false,
                        disabled:true,
                        children: [
                            {
                                label: '三级 1-1-1',
                                checked:false,
                                
                            }
                        ]
                    }]
                    }, 
                    {
                    label: '一级 2',
                    display:false,
                    checked:false,
                    children: [
                        {
                            label: '二级 2-1',
                            display:false,
                            checked:false,
                            children: [
                                {
                                    label: '三级 2-1-1',
                                    checked:false,
                                    disabled:true,
                                }
                            ]
                    }, {
                        label: '二级 2-2',
                        display:false,
                        checked:false,
                        children: [
                            {
                                label: '三级 2-2-1',
                                checked:false,
                            }
                        ]
                    }]
                    }, {
                    label: '一级 3',
                    display:false,
                    checked:false,
                    children: [
                        {
                        label: '二级 3-1',
                        display:false,
                        children: [
                            {
                                label: '三级 3-1-1',
                                checked:false,
                            }
                        ]
                    }, {
                        label: '二级 3-2',
                        children: [
                            {
                                label: '三级 3-2-1',
                                checked:false,
                            }
                        ]
                    }]
                }],
      }
  },
  methods: {
    handleChecked(data){
      console.log(data)
    },
    afterToggle(data){
      console.log(data)
    }
    
  },
  components: {
    Lazyimg,
  },
};
</script>

<style>
#app {
  padding:50px;
}
p{
  height:50px;
}
.aa {
  margin:20px 0 0 20px;
  width:400px;
  height:300px;
}
.collapse{
  margin:30px 0 0 50px;
}

</style>
