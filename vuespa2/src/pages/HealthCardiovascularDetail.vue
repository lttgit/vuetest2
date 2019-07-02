<template>
    <div>
        <header-top title="心血管"></header-top>
        <div class="Cardiovascular-wrapper" style="padding-top:0.88rem;">
            <div class="Cardiovascular-detail-mark">
                <div class="Cardiovascular-detail-left">
                    <p>体质指数和体表面积</p>
                </div>
                <div class="Cardiovascular-detail-right">
                    <div class="Cardiovascular-reselect">
                        <select class="Cardiovascular-detail-select">
                            <option>SI</option>
                        </select>
                    </div>
                </div>
                <div class="Health-clearFix"></div>
            </div>
            <div class="Cardiovascular-detail-information">
                <ul>
                    <li>
                        <div class="Cardiovascular-information-left">
                            <p>体重</p>
                        </div>
                        <div class="Cardiovascular-information-right">
                            <input id="CardWeight" type="text" value="85" class="Cardiovascular-information-input" />
                            <span>千克</span>
                        </div>
                        <div class="Health-clearFix"></div>
                    </li>
                    <li>
                        <div class="Cardiovascular-information-left">
                            <p>身高</p>
                        </div>
                        <div class="Cardiovascular-information-right">
                            <input id="CardHeight" type="text" value="185" class="Cardiovascular-information-input" />
                            <span>厘米</span>
                        </div>
                        <div class="Health-clearFix"></div>
                    </li>
                    <li>
                        <div class="Cardiovascular-information-left">
                            <p>成人/儿童</p>
                        </div>
                        <div class="Cardiovascular-information-right">
                            <div class="Cardiovascular-information-radio">
                                <input type="radio" id="Adult" class="Cardiovascular-original-radio" name="people" checked>
                                <label for="Adult">成人</label>
                            </div>
                            <div class="Cardiovascular-information-radio">
                                <input type="radio" id="Child" class="Cardiovascular-original-radio" name="people">
                                <label for="Child">小孩</label>
                            </div>
                        </div>
                        <div class="Health-clearFix"></div>
                    </li>
                </ul>
            </div>
            <div class="Cardiovascular-detail-BMI">
                <ul>
                    <li>
                        <div class="Cardiovascular-information-left">
                            <p>BMI：</p>
                        </div>
                        <div class="Cardiovascular-information-right Cardiovascular-reset">
                            <input id="BMI" class="Cardiovascular-information-see" value ="点击查看" onclick = "computeBMI()" readonly/>
                            <span>kg/m<sup>2</sup></span>
                        </div>
                        <div class="Health-clearFix"></div>
                    </li>
                    <li>
                        <div class="Cardiovascular-information-left">
                            <p>体表面积简易公式：</p>
                        </div>
                        <div class="Cardiovascular-information-right Cardiovascular-reset">
                            <input id="BSA" class="Cardiovascular-information-see" value ="点击查看" onclick = "computeBSA()" readonly/>
                            <span>m<sup>2</sup></span>
                        </div>
                        <div class="Health-clearFix"></div>
                    </li>
                    <li>
                        <div class="Cardiovascular-information-left">
                            <p>中国人体表面积通用公式：</p>
                        </div>
                        <div class="Cardiovascular-information-right Cardiovascular-reset">
                            <input id="Area" class="Cardiovascular-information-see" value ="点击查看" onclick = "computeArea()" readonly/>
                            <span>m<sup>2</sup></span>
                        </div>
                        <div class="Health-clearFix"></div>
                    </li>
                    <li>
                        <div class="Cardiovascular-information-left">
                            <p>体积表面(Stevenson公式):</p>
                        </div>
                        <div class="Cardiovascular-information-right Cardiovascular-reset">
                            <input id="Stevenson" class="Cardiovascular-information-see" value ="点击查看" onclick = "computeStevenson()" readonly/>
                            <span>m<sup>2</sup></span>
                        </div>
                        <div class="Health-clearFix"></div>
                    </li>
                    <li>
                        <div class="Cardiovascular-information-left">
                            <p>儿童用药剂量公式(以成人剂量为1):</p>
                        </div>
                        <div class="Cardiovascular-information-right Cardiovascular-reset">
                        <input id="Drug" class="Cardiovascular-information-see" value ="点击查看" onclick = "computeDrug()" readonly/>
                        </div>
                        <div class="Health-clearFix"></div>
                    </li>
                </ul>
            </div>
            <div class="Cardiovascular-detail-tip">
                <div class="Cardiovascular-tip">
                    <h3>特别提醒：</h3>
                    <p>所有计算结果必须重新审对，且不能作为指导治疗的决策的唯一依据</p>
                </div>
                <div class="Cardiovascular-tip-calculation">
                    <h3>计算公式：</h3>
                    <p>简易体表面积计算公式(BSA) = [体重 (kg) x 身高 (cm) / 3600]<sup>-2</sup>，其中体重(kg)，身高 (cm)</p>
                    <p>体重小于30kg儿童体表面积=体重*0.035+0.1</p>
                    <p>小儿用药剂量=（成人剂量*小儿体表面积）/1.7</p>
                    <p>体重30kg以上儿童体表面积=1.05+(体重-30)*0.02</p>
                    <p>中国人体表面积通用公式：体表面积S(m2)=0.010061×身高+0.010124×体重-0.010099，其中身高(cm)，体重(kg)。</p>
                    <p>一般成人及儿童应用许文生氏(Stevenson)公式：体表面积S(m2)=0.0061×身高(cm)+ 0.0128×体重(kg)-0.1529 </p>
                    <p>参考文献：</p>
                    <p>胡咏梅,等。关于中国人体表面积公式的研究。 生理学报,1999年2月,51(1),45～48</p>

                </div>
            </div>

        </div>
    </div>
</template>
<script>
import HeaderTop from "../components/header"
export  default{
	components:{
		HeaderTop
	}
}
</script>
<style lang="scss" scoped>
@import "../style/mixin.scss";
@import '../style/reset.scss';
.Cardiovascular-wrapper{
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