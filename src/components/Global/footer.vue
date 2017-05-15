<template>
<footer class="app-footer">
    <div class="footer-bg"></div>
    <nav class="footer-nav">
        <router-link v-for="(item,index) in footerdata" :to="item.link" key="item" class="item" :exact="index==0">
            <i :class="['icon',item.icon]"></i>
            <p class="title">{{item.text}}</p>
        </router-link>
    </nav>
</footer>
</template>

<script>
export default {
  name: 'footer',
  data(){
     return{
         footerdata:[
            {
                link:'/',
                icon:'icon-yun-music',
                text:'发现音乐'
            },{
                link:'/Mymusic',
                icon:'icon-note',
                text:'我的音乐'
            },{
                link:'/Friend',
                icon:'icon-account',
                text:'朋友'
            },{
                link:'/Account',
                icon:'icon-account',
                text:'账号'
            }
        ]
     }
  }
}
</script>

<style lang="scss" scope>
  @import '../../style/footer';
</style>
