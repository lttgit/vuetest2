<template>
    <div>
        <header-top title="心血管"></header-top>
        <div class="Cardiovascular-wrapper" style="padding-top: 1rem;">
            <div class="Health-search">
                <input type="text" placeholder="输入关键字" class="Health-search-border" />
                <img src="../assets/health/Healrh-Search-Bar.png" alt="搜索" class="Health-search-icon" />
            </div>
            <div class="Health-content">
                <ul class="Cardiovascular-content-items">
                    <li class="Cardiovascular-content-item">
                    <router-link to='healthcardiovasculardetail'>体质指数和体表面积</router-link>
                    </li>
                    <li class="Cardiovascular-content-item">
                        <router-link  to='healthcardiovasculardetail'>CRUSADE出血风险评估</router-link>
                    </li>
                    <li class="Cardiovascular-content-item">
                        <router-link  to='healthcardiovasculardetail'>年龄</router-link>
                    </li>
                    <li class="Cardiovascular-content-item">
                        <router-link  to='healthcardiovasculardetail'>GRACE缺血风险评估</router-link>
                    </li>
                    <li class="Cardiovascular-content-item">
                        <router-link  to='healthcardiovasculardetail'>CRUSADE出血风险评估</router-link>
                    </li>
                </ul>
            </div>
        </div>
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
@import '../style/reset.scss';
@import '../style/mixin.scss';
.Cardiovascular-content-items{
	background: #FFFFFF;
}


/*心血管*/
.Cardiovascular-content-item{
	border-top: 1px solid #e1e1e1;
	font-size: .32rem;
	padding: .18rem .32rem;
}
.Cardiovascular-content-item a{
	/*width: 100%;
	display: block;*/
	color: #4A4A4A;
	text-decoration: none;
}
.Health-search{
	background: #FFFFFF;
	padding: .31rem .3rem;
	line-height: 0;
  position: relative;
}
.Health-search .Health-search-border{
	width: 100%;
	border: 1px solid #D5D5D5;
	height: .78rem;
	border-radius: .78rem;
	background: #fbfbfb;
	color: #c2c2c2;
	font-size: .28rem;
	box-sizing: border-box;
	padding: .24rem .32rem .24rem 1.01rem;
}
.Health-search .Health-search-icon{
	position: absolute;
	left: .55rem;
	top: .44rem;
	height: .49rem;
	width: .49rem;
}
/*心血管详情*/
.Cardiovascular-detail-mark{
	padding: .49rem .29rem .31rem .28rem;
	border-bottom: 1px solid #e1e1e1;
}
.Cardiovascular-detail-left{
	float: left;
}
.Cardiovascular-detail-right{
	float: right;
	line-height: 0;
}
.Cardiovascular-detail-left p{
	font-size: .32rem;
	color: #20537D;
}
.Cardiovascular-detail-select{
	width: 2.12rem;
	height: .6rem;
	background: transparent;
	-webkit-appearance: none;
	-moz-appearance: none;
	border:none;
	padding-left: .1rem;
	color: #20537D;
	font-size: .32rem;
}
.Cardiovascular-reselect{
	display: inline-block;
	border: 1px solid #20537D;
	color: #20537D;
	font-size: .32rem;
	box-sizing: border-box;
	text-align: right;
	vertical-align: middle;
	border-radius: 0px;
	position: relative;
}
.Cardiovascular-reselect:before{
	content: '';
	position: absolute;
	z-index: -2;
	top: .18rem;
	right: .15rem;
	width: 0;
	height: 0;
	border: 12px solid transparent;
	border-top-color: #FFFFFF;
}
.Cardiovascular-reselect:after{
	content: '';
	position: absolute;
	z-index: -3;
	top: 0rem;
	right: 0rem;
	width: .84rem;
	height: .6rem;
	background: #20537D;
}
.Cardiovascular-detail-information{
	padding: .5rem .28rem .3rem .28rem;
}
.Cardiovascular-information-left{
	display: block;
	float: left;
	width: 50%;
}
.Cardiovascular-information-right{
	display: block;
	float: right;
	height: .35rem;
}
.Cardiovascular-detail-information li{
	list-style-type: none;
	margin-bottom: .42rem;
	height: .6rem;
}
.Cardiovascular-information-left p,.Cardiovascular-information-right span{
	font-size: .28rem;
	color: #4A4A4A;
	vertical-align: top;
	position: relative;
}

.Cardiovascular-information-right span{
	font-size: .22rem;
}
.Cardiovascular-information-input,.Cardiovascular-information-see{
	width: 1.75rem;
	height: .6rem;
	border-radius: 0;
	font-size: .32rem;
	border: 1px solid #20537D;
	vertical-align: top;
	box-sizing: border-box;
	text-align: center;
	margin-right: -0.2rem;
	background: #FFFFFF;
	color: #20537D;
}
.Cardiovascular-information-see{
	display: inline-block;
	color: #20537D !important;
	line-height: .35rem;
}
.Cardiovascular-information-radio{
	position: relative;
	float: left;
	display: block;
	margin-left: .44rem;
	vertical-align: top !important;
	height: .3rem;
	top: -.6rem;
}
.Cardiovascular-information-radio label{
	color: #4A4A4A;
	font-size: .32rem;
	position: relative;
	padding-left: .34rem;
	cursor: pointer;
}
.Cardiovascular-information-radio label:before{
	content: '';
	position: absolute;
	top: .1rem;
	left: 0;
	display: inline-block;
	width: .2rem;
	height: .2rem;
	background: #9b9b9b;
	border-radius: 100%;
}
.Cardiovascular-information-radio label:after {
	content: '';
	position: absolute;
	top: .154rem;
	left: .05rem;
	z-index: 9;
	width: .09rem;
	height: .09rem;
	border-radius: 50%;
	background: #FFFFFF;
 }
.Cardiovascular-information-radio input:checked + label:before{
 	background: #20537d;
 }
.Cardiovascular-original-radio{
	display: none;
}
.Cardiovascular-detail-BMI{
	background: #ecf5ff;
	padding: .26rem .28rem .34rem .28rem;
}
.Cardiovascular-detail-BMI li{
	height: .6rem;
	list-style-type: none;
	margin-bottom: .48rem;
}
.Cardiovascular-reset{
	width: 2.5rem;
	text-align: left;
}
.Cardiovascular-detail-tip{
	padding: .24rem .28rem .8rem .28rem;
}
.Cardiovascular-tip h3{
	font-size: .28rem;
	color: #4A4A4A;
	font-weight: normal;
}
.Cardiovascular-tip p{
	font-size: .22rem;
	color: #ff6477;
}
.Cardiovascular-tip-calculation h3{
	font-size: .22rem;
	color: #4A4A4A;
}
.Cardiovascular-tip-calculation p{
	font-size: .22rem;
	color: #9B9B9B;
}
.Cardiovascular-information-right sup{
	font-size: .14rem !important;
	vertical-align: top;
	position: absolute;
	top: 0rem;
}
</style>