<template>
    <div class="mine-wrapper">
          <div class="mine-header">
            <p class="mine-header-title">我的</p>
            <img class="mine-header-avatar" src="../assets/mine/avatar.png">
            <p class="mine-header-name">白鸥</p>
        </div>
        <div class="mine-content">
            <ul>
                <li class="mine-content-item">
                    <router-link to="/PersonalCertification">
                        <img src="../assets/mine/mine-authentication.png" />
                        <span>个人资料认证</span>
                        <i></i>
                    </router-link>
                </li>
                <li class="mine-content-item">
                    <router-link to="/healthinfo">
                        <img src="../assets/mine/health-Info.png" />
                        <span>基本健康信息</span>
                        <i></i>
                    </router-link>

                </li>
                <li class="mine-content-item">
                    <router-link to="/point">
                        <img src="../assets/mine/mine-point.png" />
                        <span>积分</span>
                        <i></i>
                    </router-link>

                </li>
                <li class="mine-content-item">
                    <!-- 声明式跳转 -->
                    <router-link to="/setting">
                        <img src="../assets/mine/mine-setting.png" />
                        <span>设置</span>
                        <i></i>
                    </router-link>

                </li>
                <li class="mine-content-item">
                    <router-link to="">
                        <img src="../assets/mine/mine-logout.png" />
                        <span @click="logout">退出</span>
                        <i></i>
                    </router-link>
                </li>
                <!-- <li onclick="showFirst();" class="mine-content-item">

                    <img src="../../assets/mine/mine-point.png" />
                    <span>开机消息推送演示</span>
                    <i></i>


                </li>
                <li onclick="showSecond();" class="mine-content-item">

                    <img src="../../assets/mine/mine-point.png" />
                    <span>离线消息推送演示</span>
                    <i></i>

                </li> -->
            </ul>
        </div>
       <FooterBottom tab-type="Mine"></FooterBottom>
    </div>
</template>
<script>
import FooterBottom from "../components/footer"
   export default{
       components:{
           FooterBottom
       },
       methods:{
           logout(){
               axios({
                   url:"/api/logout",
                   method:"put"
               }).then(
                   res=>{
                       if(res.data.err===0){
                           this.$router.push('/login')//编程式跳转
                       }
               })
           }
       },
        beforeRouteEnter(to,from,next){
            axios({
            url:"/api/user",
            }).then(
            res=>{
                if(res.data.err===1){
                next('/login')
                }else{
                // console.log(_this)
                next((_this)=>{_this.data=res.data.data})
                }
            })
        }

   } 
</script>
<style lang="scss" scoped>
    @import '../style/mixin.scss';
.mine-wrapper{
    padding-bottom: 1.5rem;
}

.mine-header {
    display: table;
    width: 100%;
    background: $theme;
}

.mine-header-title {
    text-align: center;
}


.mine-header-title {
    margin: 0.4rem 0.32rem;
    font-size: 0.36rem;
    color: #fff;
}

.mine-header-avatar {
    display: block;
    width: 1.42rem;
    height: 1.42rem;
    margin: 0 auto;
    text-align: center;
    border-radius: 50%;
}

.mine-header-name {
    margin: 0.15rem 0 0.3rem;
    font-size: 0.28rem;
    color: #fff;
    text-align: center;
}

.mine-content-item {
    position: relative;
    height: 0.88rem;
    line-height: 0.88rem;
    padding-left: 0.4rem;
    font-size: 0.32rem;
    background: #fff;
    border-bottom: 1px solid #E1E1E1;
    box-sizing: border-box;
}

.mine-content-item span{
    position: relative;
    margin-left: 0.5rem;
}

.mine-content-item:nth-child(1) span::after{
    position: absolute;
    content: '';
    right: -0.15rem;
    top: 0;
    width: 0.16rem;
    height: 0.16rem;
    background: red;
    border-radius: 50%;

}

.mine-content-item a {
    display: block;
    height: 100%;
}

.mine-content-item img{
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    display: inline-block;
    height: 0.28rem;
}

.mine-content-item:nth-child(3) {
    margin-top: 0.15rem;
    border-top: 1px solid #E1E1E1;
}

.mine-content-item:nth-child(4) {
    margin-top: 0.15rem;
    border-top: 1px solid #E1E1E1;
}

.mine-content-item:nth-child(6) {
    margin-top: 0.15rem;
    border-top: 1px solid #E1E1E1;
}

.mine-content ul li i {
    position: absolute;
    top: 50%;
    right: 0.4rem;
    transform: translateY(-50%);
    width: 0.20rem;
    height: 0.36rem;
    background: url('../assets/comm/right-grey-direct.png') center top no-repeat;
    background-size: 0.2rem 0.36rem;
}

</style>