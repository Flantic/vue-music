<template>
  <div id="app" class="music-app">
    <router-view name="main"></router-view>
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
  // <transition name="fade">
  //      <div class="app-router">
  //         <router-view name="page"></router-view>
  //      </div>
  //   </transition>
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
  .app-router {
      position:fixed;
      top:0;
      right:0;
      bottom:0;
      left:0;
      overflow:hidden;
      z-index:999;
    }
  .fade-enter-active, .fade-leave-active {
	  transition: opacity .3s;
  }
  .fade-enter, .fade-leave-active {
  }
</style>
