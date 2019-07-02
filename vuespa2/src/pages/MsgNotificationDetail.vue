<template>
    <div class="msg-notification-detail-wrapper">
      <header-top title="消息详情"></header-top>
    <div class="science-details-title">
      <p>全球肺癌关注月 专家做客直播间</p>
    </div>
    <div class="science-details-read">
      <span>2小时前</span>
    </div>
    <div class="science-details-banner">
      <img src="../assets/mine/msg-notification-detail.png">
    </div>
    <div class="science-details-text">
      <p>每年的11月是“全球肺癌关注月”，肺癌是肿瘤科中常见的一种疾病，引发此病的原因有很多种，早期发现可以通过手术根治，但往往初期症状不明显，那么出现哪些情况需要引起重视呢？如何预防呢？近日，吉林省肿瘤医院胸部肿瘤外三科副主任陈文庆做客吉林旅游广播社区欢乐游栏目，为大家科普了肺癌的相关知识。</p>
    </div>
  </div>
</template>
<script>
    import HeaderTop from "../components/header";
    export default{
        components:{
            HeaderTop
        }
    }
</script>
<style lang="scss" scoped>
@import '../style/mixin.scss';


.msg-notification-detail-wrapper{
    padding: 0.88rem 0.3rem 0;
}

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
}

</style>