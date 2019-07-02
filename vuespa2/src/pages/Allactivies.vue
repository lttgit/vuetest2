<template>
    <div class="all-activies-wrapper">
        <!-- <HeaderTop title="全部活动"></HeaderTop> -->
        <keep-alive><component :is="test" title="全部活动"></component></keep-alive>
          <!-- 内容 -->
        <div class="active-content">
            <div style="flex: 1">
                <span>全部活动</span>
                <span>(12)</span>
            </div>
            <div style="margin-right: 0.2rem;border: 1px solid #20537d;height: 0.6rem;line-height:0.6rem;padding: 0 0.15rem;margin-top: 0.15rem;">2018</div>
            <div  style="display: flex;margin-top: 0.15rem;position: relative;left: 0.5rem;" id="active_menu_show">
                <p class="active-all">全部</p>
                <p class="active-all-tap"></p>
            </div>
            <div @click="showMenu"><img style="width: 0.4rem;
                position: relative;
                right: 0.05rem;" src="../assets/active/active-tap1.png"></div>
        </div>
        <ul class="active-title-list" v-if="isShowMenu" id="active_menu">
            <li><a href="#">全部</a></li>
            <li><a href="#">完成</a></li>
            <li><a href="#">错过</a></li>
            <li><a href="#">待答</a></li>
        </ul>
        <a href="questionnaireResult.html?title=关于晚期/转移性肺癌治疗研究">
            <div class="active-content-list-line" id="get_questionnaire">
                <ul class="active-content-list">
                    <li>
                        <span>2018年 9月 10日 星期四</span>
                        <span class="active-complete">完成</span>
                    </li>
                    <li>
                        <span>关于晚期/转移性肺癌治疗研究</span>
                    </li>
                </ul>
                <div class="active-complete-time">
                    <img src="../assets/home/home-term-validity.png">
                    <span>有效期：2018年09月03-17日</span>
                </div>
            </div>
        </a>
        <a href="questionnaireResult.html?title=肿瘤生存质量调查问卷(一)">
            <div class="active-content-list-line">
                <ul class="active-content-list">
                    <li>
                        <span>2018年 9月 10日 星期四</span>
                        <span class="active-complete">完成</span>
                    </li>
                    <li>
                        <span id="test">肿瘤生存质量调查问卷(一)</span>
                    </li>
                </ul>
                <div class="active-complete-time">
                    <img src="../assets/home/home-term-validity.png">
                    <span>有效期：2018年09月03-17日</span>
                </div>
            </div>
        </a>
        <a href="questionnaire.html?title=肿瘤生存质量调查问卷(二)">
            <div class="active-content-list-line">
                <ul class="active-content-list">
                    <li>
                        <span>2018年 9月 10日 星期四</span>
                        <span class="active-miss">错过</span>
                    </li>
                    <li>
                        <span>肿瘤生存质量调查问卷(二)</span>
                    </li>
                </ul>
                <div class="active-complete-time">
                    <img src="../assets/home/home-term-validity.png">
                    <span>有效期：2018年09月03-17日</span>
                </div>
            </div>
        </a>
        <a href="questionnaireResult.html?title=肿瘤生存质量调查问卷(三)">
            <div class="active-content-list-line">
                <ul class="active-content-list">
                    <li>
                        <span>2018年 9月 10日 星期四</span>
                        <span class="active-complete">完成</span>
                    </li>
                    <li>
                        <span>肿瘤生存质量调查问卷(三)</span>
                    </li>
                </ul>
                <div class="active-complete-time">
                    <img src="../assets/home/home-term-validity.png">
                    <span>有效期：2018年09月03-17日</span>
                </div>
            </div>
        </a>
        <a href="Question.html">
            <div class="active-content-list-line">
                <ul class="active-content-list">
                    <li>
                        <span>2018年 9月 10日 星期四</span>
                        <span class="active-wait">待答</span>
                    </li>
                    <li>
                        <span>肿瘤生存质量调查问卷(四)</span>
                    </li>
                </ul>
                <div class="active-complete-time">
                    <img src="../assets/home/home-term-validity.png">
                    <span>有效期：2018年09月03-17日</span>
                </div>
            </div>
        </a>

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
            isShowMenu:false,
            test:HeaderTop
        }
    },
    methods:{
        showMenu(){
            this.isShowMenu=!this.isShowMenu
        }
    }
    
}
</script>
<style lang="scss" scoped>
@import '../style/mixin.scss';
.all-activies-wrapper{
    padding-top: 0.88rem;
}
/* 内容 */
.active-content {
    height: 0.98rem;
    line-height: 0.98rem;
    background: #d3eaf9;
    font-size: 0.32rem;
    font-weight: bold;
    color: #20537D;
    padding: 0 0.25rem;
    display: flex
}

.active-title-list {
    background: #92d4f3;
    width: 1.92rem;
    text-align: center;
    position: absolute;
    right: 0.15rem;
    margin-top: -0.1rem;
    font-size: 0.32rem;
}

.active-title-list>li {
    margin: 0 0.1rem;
    border-bottom: 1px solid #fff;
    line-height: 0.7rem;
}
.active-title-list>li:last-child{
    border-bottom: none;
}

.active-tap-time {
    width: 1.3rem;
    height: 0.6rem;
    line-height: 0.6rem;
    border: 1px solid #20537d;
    color: #20537d;
    font-size: 0.32rem;
    font-weight: bold;
    margin-right: 0.38rem;
    display: inline-block;
    text-align: center
}

.active-all {
    width: 1.22rem;
    height: 0.6rem;
    line-height: 0.6rem;
    border: 1px solid #20537d;
    font-size: 0.32rem;
    display: inline-block;
    text-align: center
}

.active-all-tap {
    height: 0.6rem;
    width: 0.7rem;
    background: #20537e;
    display: inline-block;
    /* position: relative;
    top: 0.21rem;
    right: 0.1rem; */
}

.active-title-list a {
    color: #fff;
    font-weight: normal;
}

.active-tap {
    margin-left: auto;
}
.active-tap>li{
    display: inline-block
}

.active-tap>img {
    width: 0.33rem;
    position: absolute;
    top: 0.45rem;
    right: 0.3rem;
}

.active-content-list {
    height: auto;
    padding: 0.15rem 0.28rem;
    list-style: none;
    font-size: 0.32rem;
    border-bottom: 1px solid #e1e1e1;
    background: #fff
}

.active-content-list>li:nth-child(1) {
    display: inline-block;
    color: #4A4A4A;
    padding-top: 0.15rem;
    font-size: 0.26rem;
}

.active-complete,.active-miss,.active-wait {
    display: inline-block;
    color: #fff;
    background: #66abe2;
    font-size: 0.2rem;
    padding: 0 0.15rem;
    border-radius: 0.08rem;
}
.active-miss{
    background: #9b9b9b
}
.active-wait{
    background: #febb4a
}

.active-content-list>li:nth-child(2) {
    font-size: 0.32rem;
    color: #20537d;
    padding: 0.1rem 0 0.3rem 0;
}

.active-complete-time {
    height: 0.7rem;
    background: #fff;
    font-size: 0.26rem;
    line-height: 0.7rem;
    padding: 0 0.28rem;
    color: #b4b4b4
}
.active-complete-time>img{
width: 0.3rem;;
}
.active-content-list-line{
    margin-bottom: 0.15rem;
}

</style>