<template>
    <div class="treatment-know-wrapper">
    <header-top title="治疗知识" hide-close="true"></header-top>
    <!-- 内容 -->
    <div class="science-search">
      <img src="../assets/home/home-search.png">
      <input type="text" class="science-search-input" placeholder="输入关键字搜索科普文章">
    </div>
    <div class="swiper-container" ref="f1" style="position: relative" id="science_next_page">
      <div class="swiper-wrapper">
        <router-link tag="li" to="/treatmentknowdetail  ">
          <div class="swiper-slide"> 
            <div class="science-img">
              <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=260329114,3367670618&fm=26&gp=0.jpg">
            </div>
            <div class="science-modal-text">标题1</div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="header-info">
      <router-link to="/treatmentknowdetail">
        <div class="myinfo-mian-content" v-for="(item,index) in listDate" :key="index">
          <p>{{item.title}}</p>
          <div class="my-code-img">
            <img src="../assets/home/home-go.png" class="go">
          </div>
        </div>
      </router-link>
    </div>
  <FooterBottom tab-type="TreatmentKnow"></FooterBottom>
  </div>
    
</template>
<script>
import HeaderTop from '../components/header';
import FooterBottom from "../components/footer";
import swiper from '../assets/js/swipe'
export default{
    components:{
        HeaderTop,FooterBottom
    },
    mounted(){
      new swiper(this.$refs.f1,{
        
        autoplay:2000,
        continuous: true,
        stopPropation: true,
        callback:(index,element)=>{
          
          removeClass("active");
          
        }    
        
      });
    },
    data(){
      return{
        banner:[
          {
            title:"标题1",
            img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=260329114,3367670618&fm=26&gp=0.jpg"
          },
          {
            title:"标题2",
            img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552984941256&di=440cdfa72412a7bed3feb6225338efac&imgtype=0&src=http%3A%2F%2Fimg17.3lian.com%2Fd%2Ffile%2F201702%2F20%2Fec4acb80b76b3e84fe58f48b558908d3.jpg"
          }
        ],
        listDate:[
          {
            title:'肿瘤防治科普'
          },
          {
              title:'常见消化道肿瘤的饮食调补'
          },
           {
              title:'胸部CT辐射量还没做一次长途飞机高'
          },
           {
              title:'肿瘤免疫治疗PD-1单抗'
          }
        ]
      }
    }
}
</script>
<style  lang='scss' scoped>
@import '../style/mixin.scss';
.treatment-know-wrapper{
    padding-top: .88rem;
}
/* 内容 */
.science-search {
    position: relative;
    text-align: center;
    margin: 0.24rem;
}

.science-search-input {
    height: 0.78rem;
    border: 1px solid #c2c2c2;
    outline: none;
    width: 100%;
    margin: 0 auto;
    border-radius: 0.5rem;
    padding-left: 1rem;
    font-size: 0.28rem;
    color: #c2c2c2;
    -webkit-appearance: none;
}

.science-search>img {
    @include ct;
    width: 0.5rem;
    left: 0.4rem;
}

.science-img {
    width: 100%;
    height: 3.13rem;
    margin-top: 0.25rem;
}

.science-img>img {
    height: 100%;
    width: 100%;
}

.science-modal-text {
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    width: 100%;
    bottom: 0;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.42rem;
    text-align: center;
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

.my-code-img {
    margin-top: -0.13rem;
}

.header-info {
    margin-top: 0.1rem;
    border-top: 1px solid #e1e1e1
}

.my-code>p,
.my-main-info>p,
.myinfo-mian-content>p {
    font-size: 0.34rem;
    flex: 1;
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
    height: 1rem;
    ;
    background: #fff;
    line-height: 1rem;
    ;
    padding: 0 0.4rem;
    display: flex;
    border-bottom: 1px solid #E1E1E1
}

</style>
