<template>
    <swiper :options="swiperOption"  ref="mySwiper">  
        <swiper-slide><img src="../../assets/img/slider1_02.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../assets/img/slider2_02.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../assets/img/slider3_02.jpg" alt=""></swiper-slide> 
        <div class="swiper-pagination" slot="pagination"></div>  
    </swiper>  
</template>

<script>
 import { swiper, swiperSlide } from 'vue-awesome-swiper'  
 import { mapState } from 'vuex'

 export default {
    data(){
        return {
            swiperOption:{
                pagination : '.swiper-pagination'
            }
        }
    },
    components: {
       swiper,
       swiperSlide
    }
 }
</script>

<style lang="scss" scope>
@import '../../style/util.scss';
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