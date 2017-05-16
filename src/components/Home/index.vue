<template>
	<section class="app-home">
		<home-header></home-header>	
		<swiper :options="swiperOption"  ref="mySwiper">  
        <swiper-slide><router-view name="home_recommend"></router-view></swiper-slide>
        <swiper-slide><router-view name="home_songlist"></router-view></swiper-slide>
        <swiper-slide><router-view name="home_radio"></router-view></swiper-slide>  
        <swiper-slide><router-view name="home_ranking" ></router-view></swiper-slide>  
    </swiper>  
	</section>
</template>

<script>
import $ from 'jquery'
import HomeHeader from './header'
import { swiper, swiperSlide } from 'vue-awesome-swiper'  
import { mapState } from 'vuex'

export default {
  name: 'home',
	mounted(){
	},
	data(){
		return{
			swiperOption:{
				onSlideChangeStart:()=>{
					let AIndex = this.$refs['mySwiper'].swiper.activeIndex
					$('.nav-menu>li').eq(AIndex).click()
					this.$router.push({path:'home_songlist'})
				}
			}
		}
	},
  components: {
	  HomeHeader,
		swiper,
    swiperSlide
  },
	watch:{
			HomePageNumber(){
					this.$refs['mySwiper'].swiper.slideTo(this.HomePageNumber,500,false)
			}
	},
	computed:{
			...mapState(['HomePageNumber']),
	}
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>