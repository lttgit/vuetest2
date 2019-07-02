<template>
     <div class="health-evaluate-wrapper">
        <header-top title='健康测评'></header-top>
         <div class="Health-search" style="padding-top: 1.3rem;">
            <input type="text" placeholder="输入关键字" class="Health-search-border"/>
            <img src="../assets/health/Healrh-Search-Bar.png" alt="搜索" class="Health-search-icon" style="top: 1.45rem" />
        </div>
        <div class="Health-content">
            <h3 class="Health-content-category">计算器分类</h3>
            <ul class="Health-content-items">
                <li class="Health-content-item" v-for="(item,index) in listData" :key="index">
                  <router-link to="HealthCardiovascular">{{item.name}}</router-link>
                  </li>
                  <div class="Health-clearFix"></div>
            </ul>
        </div>
        <FooterBottom tab-type='HealthEvaluate'></FooterBottom>
    </div>
</template>
<script>
import HeaderTop from '../components/header'
import FooterBottom from '../components/footer'

export default {
	components:{
		HeaderTop,FooterBottom
	},
	data(){
		return{
			listData:[{
				name:"心血管",
				id:1
			},
			{
				name:"神经病",
				id:2
			},
			{
				name:"内分泌科",
				id:3
			},
			{
				name:"消化",
				id:4
			},
			{
				name:"肝病肿瘤科",
				id:5
			},
			{
				name:"感染",
				id:6
			},
			{
				name:"呼吸",
				id:7
			},
			{
				name:"精神心理科",
				id:8
			},
			{
				name:"肾内科",
				id:9
			},
			{
				name:"风湿免疫科",
				id:10
			},
			{
				name:"血液科",
				id:11
			},
			{
				name:"糖尿病",
				id:12
			}
			]
		}
	}
}
</script>
<style lang='scss' scoped>
@import '../style/mixin.scss';
/*共用   start*/
html{
	font-family: "微软雅黑",'pingFangSC-Regular';
}
*{
	margin: 0;
	padding: 0;
}
ul li{
	list-style-type: none;
	margin: 0;
	padding: 0;
}
img {
    border: none;
    vertical-align: middle;
}
input,textarea,select,a:focus {
	outline: none;
}
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder{
 	color: #C2C2C2;
}
input::-ms-input-placeholder, textarea::-ms-input-placeholder{
  	color: #C2C2C2;
}
input::-moz-input-placeholder, textarea::-moz-input-placeholder{
 	color: #C2C2C2;
}
input[type="text"],input[type="password"],textarea {
	-webkit-appearance: none;
}
/*共用   end*/

/*健康测评  style*/
.Health-clearFix{
	clear: both;
}
/*共同头部  start*/
.Health-header{
	height: .88rem;
	background: #20537d;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
}
.Health-header-titile{
	font-size: .36rem;
	color: #FFFFFF;
	text-align: center;
	font-weight: 500;
	line-height: .88rem;
}
.Health-header-back{
	position: absolute;
	top: .26rem;
	left: .3rem;
	height: .36rem;
}
/*共用头部 end*/
.Health-bg{
	background: #F6F6F6;
}
.Cardiovascular-content-items{
	background: #FFFFFF;
}
.moblie-bg{
	background: #FFFFFF;
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
.Health-content-category{
	font-size: .28rem;
	color: #4A4A4A;
	padding-top: .27rem;
	padding-left: .33rem;
	font-weight: normal;
	border-top: 1px solid #e1e1e1;
}
.Health-content-items{
    padding: .5rem .32rem;
    padding-bottom: 1rem;
}
.Health-content-items .Health-content-item{
	font-size: .32rem;
	color: #20537D;
	text-align: left;
	float: left;
	list-style-type: none;
	width: 32.9%;
	margin-bottom: .56rem;
}
.Health-content-items .Health-content-item a{
	color: #20537D;
	text-decoration: none;
}
.Health-content-items .item-align-center{
	text-align: center;
}
.Health-content-items .item-align-right{
	text-align: right;
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
