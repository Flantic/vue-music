<template>
  <div id="app" class="music-app">
    <router-view name="main"></router-view>
    <router-view name="page"></router-view>
    <keep-alive>
      <router-view name="control"></router-view>
    </keep-alive>
  </div>  
</template>

<style lang="scss">
  @import './style/global';
  .music-app {
    position:relative;
    height: 100%;
    width: 100%;
    background: $main-bg-color;
    // font-family: 'Microsoft YaHei';
    color: $main-font-color;
    font-weight: 500;
    -webkit-font-smoothing:antialiased;
    .app-main,.app-home{ height: inherit;}
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
