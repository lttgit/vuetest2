<template>
    <div class="home-wrapper">
        <HeaderTop title='首页' hide-close="true"></HeaderTop>
        <div class="home-tel">
            <img class="logo" src="../assets/home/logo.png"/>
            <div>
                 <img class="tel" src="../assets/home/tel.png"/>
                 <span>客服热线</span>
             </div>
        </div>
        <div class="home-project">
            <div>
                <img src="../assets/home/wenjuan.png"/>
                <span>100%</span>
            </div>
            <span>0 错过项目</span>
        </div>
         <div class="home-active-title">
                <img src="../assets/home/pen.png"/><p>下一次活动</p>
            </div>
      <div class="home-active">
            <span class="calendar">10</span>
            <div class="home-active-content clearfix">
                <div>
                     <p class="home-active-conten-date">2018年 12月10日，星期四</p>
                    <p class="home-active-conten-font">肿瘤生存质量调查问卷</p>
                </div>
            </div>
        <div class="home-term-validity">
            <p>有效期 : 2018年12月03-20</p>
        </div>
      </div>
        <div class="header-info">
            <router-link to="Onlineservice">
                <div class="myinfo-mian-content">
                    <p><img class="home-img" src="../assets/home/home-doctor.png">我的医生</p>
                    <div class="my-code-img">
                        <img src="../assets/home/home-go.png" class="go">
                    </div>
                </div>
            </router-link>
            <router-link to="/allactivies">
                <div class="myinfo-mian-content">
                    <p><img class="home-img" src="../assets/home/home-huodong.png">全部活动</p>
                    <div class="my-code-img">
                        <img src="../assets/home/home-go.png" class="go">
                    </div>
                </div>
            </router-link>
            <router-link to="Onlineservice">
                <div class="myinfo-mian-content">
                    <p><img class="home-img" src="../assets/home/home-bangzhu.png">在线咨询</p>
                    <div class="my-code-img">
                        <img src="../assets/home/home-go.png" class="go">
                    </div>
                </div>
            </router-link>
            <router-link to="msgnotification">
                <div class="myinfo-mian-content">
                    <p><img class="home-img" src="../assets/home/home-tongzhi.png">消息通知</p>
                    <div class="my-code-img">
                        <img src="../assets/home/home-go.png" class="go">
                    </div>
                </div>
            </router-link>
        </div>
        <FooterBottom tab-type="Home"></FooterBottom>
    </div>
</template>
<script>
    import HeaderTop from '../components/header'
    import FooterBottom from '../components/footer'

    export default{
        components:{
            HeaderTop,FooterBottom
        }
    }
</script>
<style lang='scss' scoped>
@import '../../style/mixin.scss';


.home-wrapper{
    padding-top: .88rem;
}

.home-tel{
    height: 1rem;
    line-height: 1rem;
    padding: 0 0.3rem;
    background: #fff;
    border-bottom: 1px solid $divider;
    .logo{
        width: 1.8rem;
    }
   
    div{
        position: relative;
        float: right;
        .tel{
            @include ct;
            width: .39rem;
            margin-right: 0.1rem;
        }
        span{
            margin-left: 0.55rem;
            font-size: .32rem;
            color: #4aabe3;
        }
    }
}

.home-project{
    position: relative;
    height: .88rem;
    line-height: .88rem;
    padding:  0 0.3rem;
    background: #fff;
    >div{
        position: relative;
        display: inline-block;
        img{
            @include ct;
            width: .48rem;
        }
        span{
            font-size: .32rem;
            margin-left: 0.68rem;
        }
    }
    >span{
        @include ct;
        right: .3rem;
        font-size: .32rem;
    }
}
.home-active-title{
    position: relative;
    height: .88rem;
    line-height: .88rem;
    margin-top: .2rem;
    padding: 0 0.3rem;
    background: #d3e3f6;
    >img{
        @include ct;
        display: inline-block;
        width: .28rem;
    }
    >p {
            display: inline-block;
            margin-left: .48rem;
            font-size: 0.28rem;
            // font-weight: bold;
            color: #20537d;}
        
}

.home-active{
  position: relative;
  padding-left: 1.18rem;
  background: #fff;

}

.calendar{
    position: absolute;
    left: .3rem;
    bottom: .7rem;
    padding-top: 0.25rem;
    width: .62rem;
    height: .64rem;
    color: #000;
    font-weight: bold;
    font-size: .3rem;
    text-align: center;
    background: url('../assets/home/calendar.png') center center;
    background-size: .62rem .64rem;
}

.home-active-content {
    position: relative;
    padding: 0.34rem 0 0 0;
    list-style: none;
    color: #4a4a4a;
    background: #fff;
    border-bottom: 1px solid #cecece;
    >img {
        float: left;
        width: 0.47rem;
    }
    >div{
        float: left;
        margin-bottom: .3rem;
    }
    >div p:first-child{
        color: #000;
        font-size: .28rem;
    }
    >div p:last-child{
        margin-top: 0.18rem;
        font-size: .32rem;
        color: #20537d;
    }
}




.home-active-conten-font {
    font-size: 0.28rem;
    color: #000
}

.home-active-conten-date {
    font-size: 0.26rem;
    color: #4A4A4A
}

.home-term-validity {
    height: 0.7rem;
    line-height: 0.7rem;
    background: #fff;
    font-size: 0.28rem;
    color: #9b9b9b;
}

.home-term-validity>p>img {
    width: 0.31rem;
    margin-right: 0.13rem
}

.home-img {
    width: 0.35rem;
    position: relative;
    top: -0.05rem;
    margin-right: 0.22rem;
}

.my-code {
    height: 0.95rem;
    background: #fff;
    margin-top: 0.2rem;
    line-height: 0.95rem;
    padding: 0 0.4rem;
    border-bottom: 1px solid #cecece;
    display: flex
}

.my-code>p,
.my-main-info>p,
.myinfo-mian-content>p {
    font-size: 0.32rem;
    flex: 1;
    font-weight: bold
}

.my-main-info {
    height: 0.95rem;
    line-height: 0.95rem;
    background: #fff;
    padding: 0 0.4rem;
}

.code-img {
    width: 0.38rem;
}

.go {
    width: 0.2rem;
}

.my-main-info {
    display: flex
}

a {
    text-decoration: none;
    color: #4A4A4A
}

.myinfo-mian-content {
    height: 0.88rem;
    ;
    background: #fff;
    line-height: 0.88rem;
    ;
    padding: 0 0.4rem;
    display: flex;
    margin-top: 0.15rem;
}

</style>
