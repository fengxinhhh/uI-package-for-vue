<template>
    <div class = "box">
        <!-- 普通版 -->
        <div  class = "loading1" v-if = "$attrs.loadingRound == ''"></div>
        <!-- 省略号 -->
        <div class = "loading2" v-if = "$attrs.loadingRow == ''">
            <i v-for = "item in 3" :key = "item" :style = "activedStyle(item)"></i>
        </div>
        <!-- 多层旋转 -->
        <div class = "loading3" v-if = "$attrs.loadingColums == ''">
            <i class = "loading3Round"></i>
            <div class = "loading3small">
                <i class = "loading3RoundSmall"></i>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'fl-Loading',
        mounted () {
            this.timer = setInterval(() => {
                if(this.loading2Data == 4){
                    this.loading2Data = 1
                }else{
                    this.loading2Data++
                }
                
            }, 300);;
        },
        data() {
            return {
                timer: null,
                loading2Data:0
            }
        },
        computed: {
            activedStyle() {
                return (id) =>{
                    if(id >= this.loading2Data){
                        return 'opacity:0.3;width:10px;height:12px'
                    }
                    return ''
                }
            }
        },
    }
</script>

<style scoped>
.box{
    margin:0 auto;
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    opacity: 0.8;
    position: absolute;
}
.loading1{
    width:40px;
    height:40px;
    border-radius: 50%;
    background: #fff;
    border:2px solid #ccc;
    border-color:  #ccc #eee red blue;;
    animation:  1s loadingWatch infinite linear;
}
@keyframes loadingWatch{
    0%{
        transform: rotate(0deg);
    }
    50%{
        transform: rotate(100deg);
    }
    75%{
        transform: rotate(200deg);
    }
    100%{
        transform: rotate(360deg);
    }
}


.loading2 i{
    display: inline-block;
    margin-right:20px;
    width:25px;
    height:25px;
    background: rgb(37, 112, 134);
    border-radius: 50%;
    transition:0.3s linear;
}
.loading3{
    width:60px;
    height:60px;
    border-radius: 50%;
    border:1px solid rgb(22, 22, 22);
    position:relative;
    animation:  3s loadingWatch2 infinite linear;
    display: flex;
    justify-content: center;
    align-items: center;
}
.loading3 .loading3small{
    width:30px;
    height:30px;
    border:1px solid rgb(4, 87, 8);
    border-radius: 50%;
    position:relative;
    animation:  3s loadingWatch3 infinite linear;
    display: flex;
    justify-content: center;
    align-items: center;

}


.loading3 .loading3small .loading3RoundSmall{
    width:10px;
    height:10px;
    border-radius: 15px;
    background: rgb(58, 122, 160);
    position: absolute;
    top:-5px;
}
.loading3 .loading3Round{
    width:10px;
    height:10px;
    border-radius: 15px;
    background: rgb(58, 122, 160);
    position: absolute;
    top:-7px;
}
@keyframes loadingWatch2{
    0%{
        transform: rotate(0deg);
    }
    50%{
        transform: rotate(150deg);
    }
    75%{
        transform: rotate(260deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
@keyframes loadingWatch3{
    0%{
        transform: rotate(0deg);
    }
    50%{
        transform: rotate(150deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
</style>