<template>
    <div class="msg-notification-wrapper">
        <HeaderTop title="消息通知"></HeaderTop>
        <ul>
            <li class="msg-notification-item" v-for="(item,index) in listData" :key="index">
                 <router-link to="/msgNotificationDetail">
                    <p class="msg-notification-title">{{item.title}}<span>{{item.time}}</span></p>
                    <div class="msg-notification-detail">
                        <img class="msg-notification-detail-img" :src="item.img"/>
                        <span class="msg-notification-detail-content">{{item.content}}</span>
                    </div>
              </router-link>
            </li>
          
        </ul>
    </div>
</template>
<script>
import HeaderTop from "../components/header"
export default{
    components:{
        HeaderTop
    },
    data(){
        return{
            listData:[
                {
                    title:'2019肿瘤防治宣传周活动方案',
                    time:'2小时前',
                    img:require('../assets/mine/msg-icon1.png'),
                    content:'上海中大肿瘤医院积极响应新时期医疗改革以“健康中国，关切民生”为宗旨，成为上海市医疗保险定点单位，开展以微创为核心的多学科综合会诊，曾荣获上海市淋巴瘤与肺癌特色专病建设单位，开设肿瘤内科、肿瘤外科、中医科等重点科室，提供高品质医疗服务，为更多肿瘤患者解决看病难题。点点滴滴，为了您的健康，我们一直在努力。'
                },
                 {
                    title:'3月15日权威专家在线讲座',
                    time:'3小时前',
                    img:require('../assets/mine/msg-icon2.png'),
                    content:'每年的11月是“全球肺癌关注月”，肺癌是肿瘤科中常见的一种疾病，引发此病的原因有很多种，早期发现可以通过手术根治，但往往初期症状不明显，那么出现哪些情况需要引起重视呢？如何预防呢？近日，吉林省肿瘤医院胸部肿瘤外三科副主任陈文庆做客吉林旅游广播社区欢乐游栏目，为大家科普了肺癌的相关知识。'
                },
                 {
                    title:'2019肿瘤防治宣传周活动方案',
                    time:'2小时前',
                    img:require('../assets/mine/msg-icon1.png'),
                    content:'上海中大肿瘤医院积极响应新时期医疗改革以“健康中国，关切民生”为宗旨，成为上海市医疗保险定点单位，开展以微创为核心的多学科综合会诊，曾荣获上海市淋巴瘤与肺癌特色专病建设单位，开设肿瘤内科、肿瘤外科、中医科等重点科室，提供高品质医疗服务，为更多肿瘤患者解决看病难题。点点滴滴，为了您的健康，我们一直在努力。'
                },
                 {
                    title:'3月15日权威专家在线讲座',
                    time:'3小时前',
                    img:require('../assets/mine/msg-icon2.png'),
                    content:'每年的11月是“全球肺癌关注月”，肺癌是肿瘤科中常见的一种疾病，引发此病的原因有很多种，早期发现可以通过手术根治，但往往初期症状不明显，那么出现哪些情况需要引起重视呢？如何预防呢？近日，吉林省肿瘤医院胸部肿瘤外三科副主任陈文庆做客吉林旅游广播社区欢乐游栏目，为大家科普了肺癌的相关知识。'
                }
            ]
        
        }
    }
    
}
</script>
<style lang="scss" scoped>
@import '../style/mixin.scss';
.msg-notification-wrapper {
    padding-top: 0.88rem;
}

.msg-notification-item {
    margin: 0.3rem 0.3rem;
    border-radius: 3px;
    border: 1px solid #E1E1E1;
}

.msg-notification-item:nth-child(1) {
    margin-top: 0.15rem;
}

.msg-notification-title {
    height: 0.9rem;
    line-height: 0.9rem;
    padding: 0 0.24rem;
    font-size: 0.34rem;
    font-weight:bold;
    color: #20537e;
    background: #eaeaea;
}

.msg-notification-title span {
    float: right;
    font-size: 0.26rem;
}

.msg-notification-detail {
    padding: 0.4rem 0.24rem;
    font-size: 0.24rem;
    color: #9b9b9b;
    background: #fff;
}

.msg-notification-detail-content {
    line-height: 0.5rem;
    font-size: 0.29rem;
    color: #4a4a4a;
    max-lines: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}

.msg-notification-detail-img {
    margin-left: 0.1rem;
    float: right;
    width: 1.4rem;
    height: 1.4rem;
}

</style>