<template>
	<section class="app-home">
		<home-header></home-header>	
		<swiper :options="swiperOption"  ref="mySwiper">  
			<swiper-slide>
				<router-view name="home_recommend" v-if="this.pageShowFlag.recommend"></router-view>
				<Loading v-else></Loading>
			</swiper-slide>
			<swiper-slide>
				<router-view name="home_songlist" v-if="this.pageShowFlag.songlist"></router-view>
				<Loading v-else></Loading>
			</swiper-slide>
			<swiper-slide>
				<router-view name="home_radio" v-if="this.pageShowFlag.radio"></router-view>
				<Loading v-else></Loading>
			</swiper-slide>  
			<swiper-slide>
				<router-view name="home_ranking" v-if="this.pageShowFlag.ranking"></router-view>
				<Loading v-else></Loading>
			</swiper-slide>  
		</swiper> 	
	</section>
</template>

<script>
import $ from 'jquery'
import HomeHeader from './header'
import Loading from 'components/Global/Loading'
import { swiper, swiperSlide } from 'vue-awesome-swiper' 
import { mapState } from 'vuex'

export default {
  name: 'home',
	mounted(){
		this.initPageStatus()	
	},
	data(){
		return{
			scrollPage:{},
			pageShowFlag:{
				recommend:false,
				songlist:false,
				radio:false,
				ranking:false,
			},
			swiperOption:{
				onSlideChangeStart:()=>{
					//滑动切换页面时更新state
					let AIndex = this.$refs['mySwiper'].swiper.activeIndex
					this.$store.commit('changeHomePage',{num:AIndex})
				}
			}
		}
	},
  components: {
	  HomeHeader,
		swiper,
    swiperSlide,
		Loading
  },
	watch:{
			HomePageNumber(){
				this.initPageStatus()
				//监听HomePageNumber 以响应tab页切换
				this.$refs['mySwiper'].swiper.slideTo(this.HomePageNumber,500,false)
			}
	},
	methods:{
		initPageStatus(){
			//初次渲染不同步渲染home页所有子组件 当用户切换到某一个子组件的时候再进行渲染
				switch(this.HomePageNumber){
					case 1:
						this.pageShowFlag['songlist'] = true;
						break;
					case 2:
						this.pageShowFlag['radio'] = true;
						break;
					case 3:
						this.pageShowFlag['ranking'] = true;
						break;
					default:
						this.pageShowFlag['recommend'] = true;
				}
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