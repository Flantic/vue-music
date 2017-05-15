<template>
<header class="my-music-header">
    <div class="header-group">
        <span class="header-more" @click="menu_status=!menu_status">更多</span>我的音乐 
        <a class="header-music"><i class="icon icon-music"></i></a>
    </div>
    <ul :class="['more-menu',{ 'is-show': menu_status }]">
        <li><a href=""><i class="icon icon-add"></i>新建歌单</a></li>
        <li><a href=""><i class="icon icon-article"></i>管理歌单</a></li>
        <li><a href=""><i class="icon icon-yun"></i>我的音乐云盘</a></li>
    </ul>
    <div class="header-mask" @click="menu_status=!menu_status"></div>
</header>
</template>

<script>
export default {
  name: 'header',
  mounted(){
	  
  },
  components: {
  },
  data(){
	return{
        menu_status:false
	}
  },
  methods:{
  },
  watch:{
      menu_status:function(flag){
          console.log(flag)
          document.getElementsByTagName('body')[0].style.overflow= flag? 'hidden':'';
      }
  }
}
</script>

<style lang="scss" scope>
@import '../../style/util';
.my-music-header{
    position:fixed;
    top:0;
    width:100%;
    line-height: rem(60);
    text-align:center;
    font-size:rem(33);
    color:#fff;
    z-index:99;
    .header-group{
        position:relative;
        padding: rem(13) 0; 
        background: $main-tone;
        z-index:2;
    }
}
.header-music,
.header-more {
    position: absolute;
    top: 0;
    display: block;
    line-height: rem(86);
    height: 100%;
    width: 15%;
    cursor: pointer;
    .icon {
        font-size: rem(45);
        color: #fff;
    }
    &:active {
        .icon {
            color: #222327;
        }
    }
}

.header-more {
    left: 0;
    text-decoration:underline;
}

.header-music {
    right: 0;
    opacity: 1;
    transition: all .3s;
}
.more-menu{
    position:absolute;
    top:rem(-220);
    left:0;
    width:100%;
    background:#f7f8f8;
    text-align:left;
    transition:all .3s;
    box-shadow: 0 0px 30px rgba(0, 0, 0, 0.3);
    z-index:1;
    li{
        position:relative;
        line-height:rem(99);
        border-bottom:rem(1) solid #dfdedf;
    }
    li:last-child{ border:none;}
    a{ color:#333; display:block; padding-left:rem(110);}
    .icon{
        position:absolute;
        top:0;
        left:0;
        height:100%;
        font-size:rem(42);
        padding:0 rem(28) 0 rem(28); 
        background:#f8f7f7;
    }
}
.more-menu~.header-mask{
    display:none;
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    background:rgba(0,0,0,0.5);
    transition:all .5s;
}
.more-menu.is-show{
    display:block;
    top:rem(86);
    // z-index:3;
}
.more-menu.is-show~.header-mask{
    display:block;
}
</style>