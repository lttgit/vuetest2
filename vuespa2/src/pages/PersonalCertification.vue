<template>
    <div class="personal-certification-wrapper">
    <header-top title="个人资料认证"></header-top>
    <div class="mine-authentication-content">
      <ul>
        <li class="item">
          <p class="left">
            <span class="left-tip">*</span>我的二维码
          </p>
          <router-link to="/mineqrcode">
            <img class="erweima" src="../assets/mine/erweima-icon.png">
          </router-link>
        </li>
        <li class="item item-flex">
          <p class="left">
            <span class="left-tip">*</span>姓
            <i class="two-space"></i>名
          </p>
          <input class="right-flex right-input" placeholder="请输入姓名" v-model="name">
          <i id="del-name" class="del" @click="delName" v-if="isShowNameDel"></i>
        </li>
        <li class="item">
          <p class="left">
            <span class="left-tip">*</span>性
            <i class="two-space"></i>别
          </p>
          <div class="right-sex">
            <input class="sex" name="sex" type="radio" value="man" v-model="sex">男
            <input class="sex right-input" value="woman" name="sex" type="radio" v-model="sex">女
          </div>
        </li>
        <li class="item item-flex">
          <p id="proince-click" class="left left-flex">
            <span class="left-tip">*</span>省份
            <span class="country" id="proince">{{proince}}</span>
          </p>
          <p id="city-click" class="left left-flex country-1">城市
            <span class="country country-2" id="city">{{city}}</span>
          </p>
        </li>
        <li class="item item-flex" @click="showBirthday">
          <p class="left">
            <span class="left-tip">*</span>出生日期
          </p>
          <!-- <p class="right-flex" onfocus="this.blur();" id="birthday">{{birthday}}</p> -->
          <!-- <datetime class="right-flex" ></datetime> -->

          <i class="direction"></i>
        </li>
        <li class="item item-flex">
          <p class="left">
            <span class="left-tip">*</span>手机号码
          </p>
          <p class="right-flex">{{mobile}}</p>
          <span class="edit">修改</span>
        </li>
        <li class="item item-flex">
          <p class="left">
            <span class="left-tip left-tip-hide">*</span>邮<i class="two-space"></i>箱
          </p>
          <input class="right-flex right-input" id="email" placeholder="请填写邮箱" v-model="email">
          <i class="del" v-if="isShowEmailDel" @click="delEmail"></i>
        </li>
        <li class="item item-flex">
          <p class="left">
            <span class="left-tip">*</span>身份证
          </p>
          <input class="right-flex right-input" id="idcard" placeholder="请填写身份证号" v-model="idCard">
           <i class="del" v-if="isShowIdCarDel" @click="delIdCar"></i>
        </li>
      </ul>
    </div>
    <a class="confirm" onclick="window.history.go(-1)">确定</a>
  </div>
</template>
<script>

import HeaderTop from "../components/header";
export default{
    components:{
        HeaderTop
    },
    data(){
        return{
            show1:true,
            name: "小米",
            sex: "man",
            proince: "上海",
            city: "上海",
            birthday: "1991-11-14",
            mobile: "159****6257",
            email: "1217334266@qq.com",
            idCard: "352227********2612",
            isShowDateTime: false,
        }
    },
    computed:{
        isShowNameDel(){
            return this.name !=""
        },
        isShowIdCarDel(){
            return this.idCard !=""
        },
        isShowEmailDel(){
            return this.email !=''
        }
    },
    methods:{
        delName(){
            this.name=""
        },
        delIdCar(){
            this.idCard=""
        },
        delEmail(){
            this.email=""
        },
        showBirthday(){
            this.isShowDateTime=!this.isShowDateTime
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../style/mixin.scss';


.personal-certification-wrapper {
    padding: 0.88rem 0 0.4rem;
}

.item {
    height: 0.88rem;
    line-height: 0.88rem;
    padding: 0 0.28rem 0 0.31rem;
    font-size: 0.26rem;
    background: #fff;
    border-bottom: 1px solid #E1E1E1;
}


.mine-authentication-item:nth-child(2) {
    margin-top: 0.10rem;
    border-top: 1px solid #E1E1E1;
}

.mine-authentication-item:nth-child(4) {
    margin-top: 0.10rem;
    border-top: 1px solid #E1E1E1;
}

.mine-authentication-item:nth-child(5) {
    margin-top: 0.10rem;
    border-top: 1px solid #E1E1E1;
}

.mine-authentication-item:nth-child(8) {
    margin-top: 0.20rem;
    border-top: 1px solid #E1E1E1;
}

.item-flex {
    display: flex;
}

.right-flex {
    flex: 1;
    font-size: 0.28rem;
    color: #4a4a4a;
    text-align: right;

}

.right-input {
    outline: none;
}

.right-input::placeholder {
    color: #999ba0;
}

.left {
    display: inline-block;
    font-size: 0.28rem;
    color: #4a4a4a;
}

.left-tip {
    margin-right: 0.1rem;
    font-size: 0.3rem;
    color: #f52a64;
    vertical-align: middle;
}

.left-tip-hide {
    visibility: hidden;
}

.erweima {
    float: right;
    margin-top: 0.28rem;
    width: 0.36rem;
    height: 0.36rem;
}


.confirm {
    display: block;
    height: 0.8rem;
    line-height: 0.8rem;
    margin: 1.89rem 0.3rem;
    font-size: 0.36rem;
    text-align: center;
    color: #fff;
    background: #23547b;
    border-radius: 5px;
}

.del {
    float: right;
    width: 0.36rem;
    height: 0.36rem;
    margin-top: 0.26rem;
    margin-left: 0.1rem;
    background: url('../assets/mine/name-del.png') center no-repeat;
    background-size: 0.36rem 0.36rem;
}

.right-sex {
    float: right;
}

.sex {
    font-size: 0.26rem;
    width: 0.21rem;
    height: 0.21rem;
    padding-right: 0.3rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url('../assets/mine/radio-noraml.png') center/0.21rem no-repeat;


}

.sex:checked {
    background: url('../assets/mine/radio-choose.png') center/0.21rem no-repeat;
}


.sex:nth-child(2) {
    margin-left: 0.3rem;
}

.left-flex {
    display: flex;
    flex: 1;
}

.country {
    float: right;
    width: 2rem;
    height: 0.5rem;
    line-height: 0.5rem;
    margin-top: 0.15rem;
    margin-left: 0.4rem;
    text-align: center;
    vertical-align: middle;
    border: 1px solid #E1E1E1;
}

.country-1 {
    position: relative;
    margin-left: 0.4rem;
}

.country-2{
    position: absolute;
    right: 0;
}

.direction {
    margin: 0.26rem 0 0 0.4rem;
    width: 0.2rem;
    height: 0.36rem;
    background: url('../assets/mine/direction-right.png') center no-repeat;
    background-size: 0.2rem 0.36rem;
}

.edit {
    margin-left: 0.4rem;
    font-size: 0.28rem;
    color: #368ecf;
}

.two-space {
    display: inline-block;
    width: 0.56rem;
    height: 0.2rem;
}


</style>