<template>
    <div class="header-component">
        <div>
            <img class="back" src="../assets/comm/close-back.png" @click="back" v-if="!hideClose">
            <span class="header-title">{{title}}</span>
            <slot></slot>
        </div>
    </div>
</template>
<script>
import {cookie}from "../assets/js/mUtils";
export default{
  props:["title","hideClose","backRedirect"],
  data(){
    return{}
  },
  methods:{
    back(){
      if(this.backReddirect){
        this.$emit("backClose")
        return
      }
      this.$router.go(-1)
    }
  }
}
</script>
<style lang='scss' scoped>
@import "../style/mixin.scss";
.header-component {
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  background: $theme;
  > div {
    position: relative;
    height: 0.88rem;
    img.back {
      width: 0.2rem;
      left: 0.2rem;
      @include ct;
    }
    span.header-title {
      color: #fff;
      font-size: 0.4rem;
      @include center;
    }
  }
}
</style>