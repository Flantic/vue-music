<template>
  <div id="app" class="music-app">
    <router-view></router-view>
    <App-Footer></App-Footer>
  </div> 
</template>

<script>
import AppFooter from './components/global/footer'
export default {
  name: 'app',
  components:{
    AppFooter 
  }
}
</script>

<style lang="scss">
  @import './style/global';
  .music-app {
    background: $main-bg-color;
    font-family: 'Microsoft YaHei';
    color: $main-font-color;
    font-weight: 500;
  }
</style>
