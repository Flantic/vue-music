<template>
	<section class="app-home">
		<home-header></home-header>	
		<router-view></router-view>
	</section>
</template>

<script>
// import $ from 'jquery'
import HomeHeader from './header'
import Slider from './slider'

export default {
  name: 'home',
  components: {
		HomeHeader,
		Slider
  }
}
</script>

<style lang="scss" scope>
@import '../../style/util';
// .app-home{
// 	padding:rem(166) 0 0 0;
// }
</style>