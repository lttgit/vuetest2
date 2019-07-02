<template>
    <div class="setting-wrapper">
        <header-top title="设置"></header-top>
         <ul>
            <li class="setting-li">
                <a class="setting-title" >消息通知</a>
            </li>
            <li class="setting-li">
                <a class="setting-title">清除缓存</a>
            </li>
            <li class="setting-li">
                <a class="setting-title">声明</a>
            </li>
        </ul>
        <p class="setting-version">当前版本1.1</p>
    </div>
</template>
<script>
import HeaderTop from "../components/header";
export default{
    components:{
        HeaderTop
    }
}
</script>
<style lang="scss" scoped>
    @import '../style/mixin.scss';
.setting-li {
    margin-bottom: 0.2rem;
    background: #fff;
    border-top: 1px solid #E1E1E1;
    border-bottom: 1px solid #E1E1E1;
}

.setting-title {
    display: block;
    height: 0.88rem;
    line-height: 0.88rem;
    padding: 0 0.2rem;
    font-size: 0.32rem;
    color: #4a4a4a;
}

.setting-version {
    position: absolute;
    font-size: 0.28rem;
    text-align: center;
    color: #4a4a4a;
    left: 0;
    right: 0;
    bottom: 0.8rem;
}

</style>