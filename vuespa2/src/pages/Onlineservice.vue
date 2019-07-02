<template>
    <div class="online-service-wrapper">
    <HeaderTop title="我的医生"></HeaderTop>
    <div id="msg" class="msg">
      <span class="time">2019年6月26日 下午1:56</span>
      <div class="right">
        <div class="content">
          <p>您好杜医生，相关病情阐述...</p>
          <img src="../assets/mine/avatar.png">
        </div>
      </div>
      <div class="left">
        <div class="content">
          <img src="../assets/mine/doctor-consult-avatar.png">
          <p>您好，相关病情方案...</p>
        </div>
      </div>
    </div>
    <div class="msg-bottom">
      <div>
        <input id="content" placeholder="请输入内容" >
        <span id="send" class="send">发送</span>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderTop from '../components/header'
export default{
    components:{
        HeaderTop
    },
    methods:{}
    
}
</script>
<style lang="scss" scoped>
@import  '../style/mixin.scss';
.online-service-wrapper{
    padding-top: .88rem;
}
.msg {
    display: block;
    padding-bottom: 1rem;
    text-align: center;
}

.msg::after{
    content: '';
    clear: both;
    display: block;
}

.msg .time {
    display: inline-block;
    margin-top: 0.37rem;
    margin-bottom: 0.70rem;
    line-height: 0.3rem;
    padding: 0 0.15rem;
    font-size: 0.2rem;
    color: #fff;
    background: #d8d8d8;
    border-radius: 5px;
}
.left {
    float: left;
    width: 100%;
    margin-bottom: 0.78rem;
}

.content {
    display: flex;
    justify-content: flex-start;
}

.content img {
    margin-left: 0.27rem;
    margin-top: 0.05rem;
    width: 0.8rem;
    height: 0.8rem;
}

.content p {
    max-width: calc(100% - 2.5rem);
    word-wrap: break-word;
    word-break: normal;
    margin-left: .4rem;
    font-size: 0.3rem;
    color: #313131;
    background: #fff;
    position: relative;
    padding: 0.25rem 0.2rem;
    border-radius: 0.15rem;
    line-height: 0.4rem;
    white-space: pre-line;
}

.content p::after {
      content: '';
      width: 0;
      height: 0;
      position: absolute;
      top: 0.245rem;
      left: -0.28rem;
      border: solid 0.15rem;
      border-color: transparent #fff transparent transparent;
      font-size: 0;
}

.right {
    float: right;
    width: 100%;
    margin-bottom: 0.78rem;
}

.right .content {
    display: flex;
    justify-content: flex-end;
}

.right .content p {
    position: relative;
    margin-right: 0.4rem;
    float: right;
    background: #d4effe;
}

.right .content p::after {
    right: -0.28rem;
    left: auto;
    border: solid 0.15rem 1px;
    border-color: transparent transparent transparent #d4effe;

    font-size: 0;
}

.right .content img {
    margin-left: 0;
    margin-right: 0.27rem;
}

.msg-bottom {
    position: fixed;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
    /* height: 0.98rem; */
    background: #f6f6f6;
    border: 1px solid #E1E1E1;
}

.msg-bottom div {
    margin: 0.2rem 0.2rem 0.2rem 0.3rem;
    display: flex;
}

.msg-bottom div input {
    flex: 1;
    line-height: 0.65rem;
    height: 0.65rem;
    padding: 0 0.2rem;
    font-size: 0.28rem;
    background: #fff;
    border-radius: 3px;
    
}

.msg-bottom div input::placeholder{
    color: #333333;
}

.send{
    width: 1.34rem;
    height: 0.65rem;
    line-height: 0.65rem;
    margin-left: 0.34rem;
    font-size: 0.28rem;
    text-align: center;
    color: #fff;
    background: #75cbff;
}
</style>