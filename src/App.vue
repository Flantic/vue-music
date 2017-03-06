<template>
  <div id="app" class="music-app">
    <router-view name="main"></router-view>
    <transition name="fade">
       <div class="app-router" v-if="">
          <router-view name="page"></router-view>
       </div>
    </transition>
    <App-Footer></App-Footer>
  </div> 
</template>

<script>
import AppFooter from './components/Global/footer'
export default {
  name: 'app',
  components:{
    AppFooter 
  },
  data(){
    return{

    }
  }
}
</script>

<style lang="scss">
  @import './style/global';
  .music-app {
    position:relative;
    min-height: 100%;
    min-width: 100%;
    background: $main-bg-color;
    font-family: 'Microsoft YaHei';
    color: $main-font-color;
    font-weight: 500;
    -webkit-font-smoothing:antialiased;
  }
  .fade-enter-active, .fade-leave-active {
	  transition: right .3s;
}
.fade-enter, .fade-leave-active {
	.app-router {
    position:absolute;
    right:-150%;
		width:100%;
    height:100%;
		opacity: 0;
	}
}
</style>
