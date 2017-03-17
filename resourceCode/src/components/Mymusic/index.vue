<template>
	<section class="app-mymusic">
		<music-header></music-header>
    <div class="music-content">
      <ul class="menu-list">
        <li><a href=""><i class="icon icon-download"></i>下载音乐 <span class="num">0></span></a></li>
        <li><a href=""><i class="icon icon-recent-play"></i>最近播放 <span class="num">100></span></a></li>
        <li><a href=""><i class="icon icon-my-singer"></i>我的歌手 <span class="num">7></span></a></li>
        <li><a href=""><i class="icon icon-my-radio"></i>我的电台 <span class="num">12></span></a></li>
      </ul>
      <div class="music-sheet">
        <div class="title" @click="sheet_status($event)"><i class="icon"></i>我创建的歌单(25)</div>   
        <ul class="sheet-list">
          <li><a href="" >
            <div class="item-img">
              <img src="../../assets/img/item1.jpg" alt="">
            </div>
            <div class="item-info">
              <h1 class="item-title">我喜欢的音乐</h1>
              <p class="item-text">108首</p>
            </div>
          </a></li>
          <li><a href="">
            <div class="item-img">
              <img src="../../assets/img/item1.jpg" alt="">
            </div>
            <div class="item-info">
              <h1 class="item-title">我喜欢的音乐</h1>
              <p class="item-text">108首</p>
            </div>
          </a></li>
        </ul>
      </div>
      <div class="music-sheet">
        <div class="title" @click="sheet_status($event)"><i class="icon"></i>我收藏的歌单(25)</div>   
        <ul class="sheet-list">
          <li><a href="" >
            <div class="item-img">
              <img src="../../assets/img/item1.jpg" alt="">
            </div>
            <div class="item-info">
              <h1 class="item-title">我喜欢的音乐</h1>
              <p class="item-text">108首</p>
            </div>
          </a></li>
          <li><a href="">
            <div class="item-img">
              <img src="../../assets/img/item1.jpg" alt="">
            </div>
            <div class="item-info">
              <h1 class="item-title">我喜欢的音乐</h1>
              <p class="item-text">108首</p>
            </div>
          </a></li>
        </ul>
      </div>
    </div>
	</section>
</template>

<script>
import MusicHeader from './header'

export default {
  name: 'home',
  data(){
    return {
      sheet_list_status:false,
    }
  },
  components: {
		MusicHeader
  },
  methods:{
    sheet_status:function(e){
        // document.body.scrollTop | document.documentElement.scrollTop;
        // let pos = e.target.offsetTop;
        e.target.parentNode.classList.toggle('is-show');
    }
  }
}
</script>

<style lang="scss" scope>
@import '../../style/util';
.music-content{
  padding: rem(88) 0 rem(97);
  font-size:rem(33);
}
.menu-list{
  background:#fbfcfd;
  text-align:left;
  li{
      position:relative;
      line-height:rem(99);
      border-bottom:rem(1) solid #dfdedf;
    }
  li:last-child{ border:none;}
  a{ color:#333; display:block; padding:0 rem(20) 0 rem(110);}
  .icon{
      position:absolute;
      left:0;
      height:100%;
      font-size:rem(42);
      padding:0 rem(28) 0 rem(28); 
      color:$main-tone;
      background:#fbfcfd;
  }
  .num{
    float:right;
    font-size:rem(22);
  }
}
.music-sheet{
  .title{
    height:rem(60);
    padding:0 rem(20);
    line-height:rem(60);
    background:#eeeff0;
    color:#666;
    font-size:rem(22);
  }
  .sheet-list{
    padding:rem(22) rem(20);
    background:#fbfcfd;
  }
}
.music-sheet.is-show{
  .sheet-list{ display:block}
}
.sheet-list{
  display:none;
  li{
    box-sizing:content-box;
    padding: rem(10) 0; 
    height:rem(110);
  }
  .item-img{
    float:left;
    width:rem(100);
    height:rem(100);
    overflow:hidden;
    img{ width:100%;}
  }
  .item-info{
    box-sizing:content-box;
    height:rem(100);
    margin-left:rem(120);
    padding-bottom:rem(15);
    border-bottom:rem(1) solid #dfdedf;
  }
  .item-title{
    font-size:rem(32);
    line-height:rem(52);
    color:#333;
  }
  .item-text{
    line-height:rem(35);
    font-size:rem(23);
    color:#888;
  }
}
</style>