<template>
<div class="home-slider">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../assets/img/slider1_02.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../assets/img/slider2_02.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../assets/img/slider3_02.jpg" alt=""></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        
        <!-- 如果需要导航按钮 -->
        <!--  <div class="swiper-button-prev"></div> -->
        <!-- <div class="swiper-button-next"></div> -->
        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
    </div>
</div>
</template>

<script>
import Swiper from '../../static/swiper-3.4.1.min.js';
require('../../static/swiper-3.4.1.min.css')

 export default {
   components: {},
   mounted () {
     console.log('挂载好了')
     var mySwiper = new Swiper('.swiper-container', {
       direction: 'horizontal',
       autoplay: 3000,
       loop: false,
       pagination: '.swiper-pagination'
     })
     console.log(mySwiper)
   }
 }
</script>

<style lang="scss" scope>
@import '../style/util.scss';
.swiper-container{
    width:100%;
    height:100%;
    img {
        width: 100%;
        height: 100%;
    }
    .swiper-pagination-bullet{
        margin:0 rem(4);
        width:rem(12);
        height:rem(12);
        background:#fff;
        opacity:.5;
    }
    .swiper-pagination-bullet-active{
        background:$main-tone;
    }
}


</style>