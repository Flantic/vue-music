<template>
	<section class="app-home">
		<home-header></home-header>	
		<router-view></router-view>
	</section>
</template>

<script>
import HomeHeader from './header'

export default {
  name: 'home',
  components: {
	  HomeHeader
  }
}
</script>