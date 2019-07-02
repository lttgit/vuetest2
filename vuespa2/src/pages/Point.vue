<template>
    <div class="point-wrapper">
        <header-top title="积分"></header-top>
        <div class="point-content">
            <span>积分明细</span>
            <img class="point-content-img" src="../assets/point/point-icon.png" />
            <span>我的积分</span>
            <span>1000</span>
            <span>100积分=1¥</span>
            <button>提取积分</button>
            <span >常见问题</span>
        </div>
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

        }
    }
}
</script>
<style lang="scss" scoped>
@import '../style/mixin.scss';
.point-wrapper {
  margin: 0;
  padding: 0;
  padding-top: 0.88rem;
  background: #FFFFFF;

}
span:nth-of-type(1) {
  display: block;
  width: 2rem;
  color: #FFFFFF;
  font-size: .32rem;
  text-align: center;
  padding-top: .08rem;
  padding-bottom: .08rem;
  margin: 0 auto;
  background: #4face1;
  border-radius: .3rem;
}

.point-content-img {
  display: block;
  width: 3rem;
  text-align: center;
  margin: 0 auto;
  margin-top: 1.07rem;
}

.point-content{
  padding-top: 0.3rem;
}

span:nth-of-type(2) {
  display: block;
  text-align: center;
  margin: 0 auto;
  margin-top: .907rem;
  font-size: .36rem;
  color: #1D1D1D;
}

span:nth-of-type(3) {
  display: block;
  text-align: center;
  margin: 0 auto;
  margin-top: .4rem;
}

span:nth-of-type(4) {
  display: block;
  text-align: center;
  margin: 0 auto;
  margin-top: .2rem;
  color: #D0021B;
  font-size: .26rem;
}

button {
  margin-left: 5%;
  margin-top: 1.3rem;
  font-size: .36rem;
  color: #FFFFFF;
  text-align: center;
  width: 90%;
  background: #23547b;
  padding-top: .2rem;
  padding-bottom: .2rem;
  border-radius: 8px;
}

span:nth-of-type(5) {
  display: block;
  text-align: center;
  margin: 0 auto;
  margin-top: .4rem;
  margin-bottom: 0.2rem;
  color: #368ECF;
  font-size: .28rem;
}
</style>