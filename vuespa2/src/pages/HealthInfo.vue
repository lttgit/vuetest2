<template>
    <div class="health-info-wrapper">
        <header-top title="基本健康信息"></header-top>
         <p class="health-info-left health-info-title">婚姻状况：<span class="health-info-detail">未婚</span></p>
        <div class="health-info-content">
            <p class="health-info-left">病患时长：<span class="health-info-detail">大于半年</span></p>
            <p class="health-info-detail">去过医院</p>
            <p class="health-info-detail">已确诊</p>
        </div>
        <div class="health-info-content">
            <p class="health-info-left">疾病名称：<span class="health-info-detail">脊椎椎弓峡部裂</span></p>
            <p class="health-info-detail">脊椎椎弓峡部裂指骨不连可发生于锥体一侧或两侧。其棘突或正常，缺如或合并脊椎裂等其他畸形，但在临床上无症状或滑脱。此种骨不连称为脊椎崩解症，这是发生腰腿痛的潜在内因。脊椎滑脱多发生于第5腰椎，其他部位较少见</p>
        </div>
        <div class="health-info-content-pic">
            <p class="health-info-detail health-info-pic-title">病情照片</p>
            <div class="health-info-content-pic-detail">
                <img class="health-info-content-pic-detail-img" src="../assets/mine/info-fir-pic.png" />
                <img class="health-info-content-pic-detail-img" src="../assets/mine/info-sec-pic.png" />
                <img class="health-info-content-pic-detail-img" src="../assets/mine/info-thr-pic.png" />
            </div>
        </div>
        <ul class="health-info-content-ul">
            <li class="health-info-content-li">
                <p class="health-info-left health-info-left-p">手术外伤：<span class="health-info-detail">背部手术</span></p>
                <p class="health-info-detail health-info-detail-l">手术情况描述</p>
            </li>
            <li class="health-info-content-li">
                <p class="health-info-left health-info-left-p">家族病史：<span class="health-info-detail">高血压</span></p>
                <p class="health-info-detail health-info-detail-l">高血压描述</p>
            </li>
            <li class="health-info-content-li">
                <p class="health-info-left health-info-left-p">药物过敏：<span class="health-info-detail">青霉素</span></p>
                <p class="health-info-detail health-info-detail-l">补充药物过敏</p>
            </li>
            <li class="health-info-content-li">
                <p class="health-info-left health-info-left-p">肾功能：<span class="health-info-detail">正常</span></p>
                <p class="health-info-left health-info-left-p">肝功能：<span class="health-info-detail">正常</span></p>
                <p class="health-info-left health-info-left-p">生育状况：<span class="health-info-detail">无</span></p>
            </li>
            <li class="health-info-content-li">
                <p class="health-info-left health-info-left-p">食物/接触物过敏：<span class="health-info-detail">芒果/牛奶/花粉</span></p>
                <p class="health-info-detail health-info-detail-l">补充过敏</p>
            </li>
            <li class="health-info-content-li">
                <p class="health-info-left health-info-left-p">个人习惯：<span class="health-info-detail">低头/久坐/吸烟/饮酒</span></p>
                <p class="health-info-detail health-info-detail-l">补充习惯</p>
            </li>
        </ul>
    </div>
</template>
<script>
import HeaderTop from "../components/header"
export default{
    components:{
        HeaderTop
    }
    
}
</script>
<style lang="scss" scoped>
@import '../style/mixin.scss';
.health-info-wrapper {
    padding-top: .88rem;
    background: #efeff5;
}

.health-info-title {
    height: 1.03rem;
    padding-left: 0.2rem;
    line-height: 1.03rem;
}

.health-info-left {
    font-size: 0.28rem;
    color: #92949a;
}

.health-info-detail {
    line-height: 0.32rem;
    margin-top: 0.08rem;
    font-size: 0.28rem;
    color: #000000;
}

.health-info-content {
    margin-top: 0.1rem;
    padding: 0.28rem 0.2rem;
    background: #fff;
    border-bottom: 1px solid #E1E1E1;
}

.health-info-content-pic {
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
    padding-bottom: 0.2rem;
    border-bottom: 1px solid #E1E1E1;
    background: #fff;
}

.health-info-content-pic-detail {
    display: flex;
    padding: 0 0.2rem;
    justify-content: space-between;
}

.health-info-content-pic-detail-img {
    width: 2rem;
    height: 1.8rem;
    background: red;
    border-radius: 5px;
}

.health-info-pic-title {
    padding: 0.28rem 0.2rem;
    padding-bottom: 0.05rem;
    margin-bottom: 0.2rem;
    border-bottom: 1px solid #E1E1E1;
}

.health-info-left-p {
    height: 0.88rem;
    line-height: 0.88rem;
    padding: 0 0.2rem;
    border-bottom: 1px solid #E1E1E1;
}

.health-info-content-li {
    margin-top: 0.1rem;
    background: #fff;
    border-top: 1px solid #E1E1E1;
    border-bottom: 1px solid #E1E1E1;
}

.health-info-content-li:first-child {
    margin-top: 0.12rem;
}

.health-info-content-li:nth-child(4) {
    border-bottom: none;
}


.health-info-content-li:nth-child(5) {
    margin-top: 0.4rem;
}


.health-info-detail-l {
    height: 0.88rem;
    line-height: 0.88rem;
    margin-left: 0.2rem;
}


</style>