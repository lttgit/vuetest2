<template>
    <div class="treatment-know-detail-wrapper">
        <header-top title="治疗知识">
            <img class="share-icon" src="../assets/comm/share-icon.png">
        </header-top>
         <!-- 内容 -->
        <div style="padding: 0 0.3rem;padding-top: 0.6rem">
            <div class="science-details-title">
                <p>肿瘤病人如何饮食</p>
            </div>
            <div class="science-details-read">
                <span>阅读1000</span>
                <span style="float: right">2018.12.27</span>
            </div>
            <div class="science-details-banner">
                <img src="../assets/active/banner1.png">
            </div>
            <div class="science-details-text">
                <p>“以食同源，药食同根”‘合理均衡的饮食可以提高机体免疫力，防癌抗癌。
                    现在，有好多患者要是不舒服了，家里人就给弄海参吃，一天吃一个，觉得能补充营养。还有吃灵芝孢子粉的，但其实管用不管用我们也不知道。
                    对肿瘤患者来说，要改变观念，多吃蔬菜水果，远离大鱼大肉，蛋白质的摄入要靠多种食物。总原则是各类营养要均衡、适度，顺应自身来调节。最好遵从医生的建议，不要随便听信网络、电视的信息，更不要滥买各种保健品，尤其不要服用所谓有“抗癌”作用的药物。
                    唐代名医孙思邈《千金方》中写道：“凡欲治疗，先以食疗，食疗不愈，后乃用药尔。”化学药物多为单一成分作用于单一靶点，久服易产生耐药性并有副作用。用于单一靶点，久服易产生耐药性并有副作用。用于单一靶点，久服易产生耐药性并有副作用。</p>
            </div>
        </div>
        
    </div>
</template>
<script >
import HeaderTop from "../components/header"
export default{
    components:{
        HeaderTop
    }
}
</script>
<style lang="scss" scoped>
@import '../style/mixin.scss';
/* 内容 */
.science-details-title{  
    padding: 0.68rem 0 0.32rem 0
}
.science-details-title>p{
    font-size: 0.42rem;
    color: #333333;
    font-weight: bold;
}
.science-details-read{
  font-size: 0.24rem;
  color: #4a4a4a
}
.science-details-banner{
    height: 3.82rem;
    margin-top: 0.3rem;
}
.science-details-banner>img{
    width: 100%;
    height: 100%;
}
.science-details-text{
   margin-top: 0.3rem;
   font-size: 0.28rem;
   color: #4a4a4a; 
}
.science-modal-menu{
    width: 100%;
    height: 2rem;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    bottom: 0;
    font-size:0.32rem; 
    color: #4a4a4a;
    text-align: center;
    display: none;
}
.science-modal-menu>li{
    height: 1rem;
    line-height: 1rem;
    background: #fff;
    border-top: 1px solid #e1e1e1
}.share-icon{
    @include ct;
    right: .3rem;
    width: .5rem;

}


</style>