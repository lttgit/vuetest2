<template>
    <div class="footer-component">
        <ul>
            <router-link tag="li" to='/'>
                <i :class="[tabType == 'Home' ? 'icon1':'icon2']"/>
                <span :class="[tabType == 'Home'?'selected':'']">首页</span>
            </router-link>
            <router-link tag="li" to='/TreatmentKnow' >
                <i :class="[tabType == 'TreatmentKnow' ? 'icon3':'icon4']"/>
                <span :class="[tabType == 'TreatmentKnow'?'selected':'']">治疗知识</span>
            </router-link>
            <router-link tag="li" to='/HealthEvaluate' >
                <i  :class="[tabType == 'HealthEvaluate' ? 'icon5':'icon6']"/>
                <span  :class="[tabType == 'HealthEvaluate'?'selected':'']">健康测评</span>
            </router-link>
            <router-link tag="li" to='/Mine'>
                <i :class="[tabType == 'Mine' ? 'icon7':'icon8']"/>
                <span  :class="[tabType == 'Mine'?'selected':'']">我的</span>
            </router-link>
        </ul>
  </div>
</template>
<script>
export default{
    props:["tabType"],
    data(){
        return{}
    }
}
</script>
<style lang='scss' scoped>
@import '../style/mixin.scss';
.footer-component{
    position: fixed;
    z-index: 10;
    bottom: 0;
    background: #fff;
    height: 1rem;
    width: 100%;

    ul{
        li{
            text-align: center;
            float: left;
            height: 1rem;
            width: 25%;
            span{
                color: #333;
                display: block;
                margin-top: 0.03rem;
                &.selected{
                  color:#23547b;
                }
            }
            i{
                display: inline-block;
                margin-top: 0.12rem;
                width: 0.39rem;
                height: 0.39rem;
            }
            i.icon1{
                background: url('../assets/footer/home-select.png') center/0.39rem no-repeat;
            }

            i.icon2{
                background: url('../assets/footer/home-normal.png') center/0.39rem no-repeat;
            }
            i.icon3{
                background: url('../assets/footer/treatment-select.png') center/0.39rem no-repeat;
            }

            i.icon4{
                background: url('../assets/footer/treatment-normal.png') center/0.39rem no-repeat;
            }
            i.icon5{
                background: url('../assets/footer/health-select.png') center/0.37rem no-repeat;
            }

            i.icon6{
                background: url('../assets/footer/health-normal.png') center/0.37rem no-repeat;
            }

            i.icon7{
                background: url('../assets/footer/mine-select.png') center/0.34rem no-repeat;
            }

            i.icon8{
                background: url('../assets/footer/mine-normal.png') center/0.34rem no-repeat;
            }
        }
    }

}
</style>
