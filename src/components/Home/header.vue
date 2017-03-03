<template>
<header :class="['home-header',{ 'is-search': search_state }]" >
    <div class="header-search">
        <a class="header-voice"><i class="icon icon-voice"></i></a>
        <div class="search-group">
            <label for="header_search"><i class="icon icon-search"></i>{{label_text}}</label>
            <input type="text" id="header_search"
                v-model="search_text" 
                @focus='search_state=!search_state' 
                @input='cleartext()'>
        </div>
        <a class="header-music"><i class="icon icon-music"></i></a>
        <div class="cancel" @click='header_swith'>取消</div>
    </div>
    <nav class="header-nav">
        <ul class="nav-menu" @click.prevent='nav_switch($event)'>
            <li class="active"><router-link to="/"><span>个性推荐</span></router-link></li>	
            <li><a href=""><span>歌单</span></a></li>
            <li><a href=""><span>主播电台</span></a></li>
            <li><a href=""><span>排行榜</span></a></li>
        </ul>
        <span class="nav-slider" :style="nav_style[active_nav]"></span>
    </nav>
</header>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'header',
  mounted(){
	  let nav_menu = document.querySelectorAll('.nav-menu>li span');
	  let style=[];
	  nav_menu.forEach((val,index)=>{
		let width = getComputedStyle(val,null).getPropertyValue('width');
		let left = val.offsetLeft;
		this.nav_style.push({
			width:parseInt(width)+'px',
			left:parseInt(left)+'px'
		})
	  })
		console.log(this.nav_style)
  },
  components: {
	// Slider,
	// Footer
  },
  data(){
	return{
		search_state:false,
		nav_style:[],
		active_nav:0,
		label_text:'搜索音乐、歌词、电台',
		search_text:'',
	}
  },
  methods:{
	  nav_switch:function(e){
		let parent = $(e.target).parents('li');
		parent.addClass('active').siblings().removeClass('active');
		this.active_nav = parent.index();

		console.log(this.nav_style[this.active_nav].left)
	  },
	  cleartext:function(){
		if(this.search_text == ''){
			this.label_text = '搜索音乐、歌词、电台';
			return;
		}
		this.label_text = '';
	  },
	  header_swith:function(){
		  this.search_state=!this.search_state;
		  this.search_text = "";
		  this.label_text = '搜索音乐、歌词、电台';
	  }
  }
}
</script>

<style lang="scss" >
@import '../../style/util';
    .home-header {
        position: fixed;
        top: 0;
        // font-size: rem(26px);
        // height: rem(86px);
        width: 100%;
        overflow: hidden;
        z-index: 99;
        border-bottom: rem(1) solid #c6c6c6;
        .header-search {
            position: relative;
            display: flex;
            padding: rem(13) 0;
            line-height: rem(60);
            text-align: center;
            vertical-align: top;
            background: $main-tone;
        }
    }

    .cancel {
        position: absolute;
        right: -14%;
        width: 14%;
        color: #fff;
        text-decoration: underline;
        cursor: pointer;
        transition: all .5s;
    }

    .header-music,
    .header-voice {
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

    .header-voice {
        left: 0;
    }

    .header-music {
        right: 0;
        opacity: 1;
        transition: all .3s;
    }

    .search-group {
        position: relative;
        margin-left: 15%;
        width: 70%;
        transition: all .5s;
        input {
            vertical-align: top;
            height: rem(60);
            width: 100%;
            font-size: rem(26);
            border-radius: 10px;
            border: none;
            outline: none;
        }
        label {
            position: absolute;
            width: 100%;
            height: 100%;
            color: #ccc;
            font-size: rem(26);
            transition: all .3s;
            .icon {
                padding: 0 rem(17);
                font-size: rem(26);
            }
        }
    }

    //搜索状态
    .home-header.is-search {
        .header-music {
            opacity: 0;
        }
        .header-voice {
            display: none;
        }
        .search-group {
            margin-left: 2%;
            width: 85%;
            input {
                padding-left: rem(58);
            }
            label {
                text-align: left;
            }
        }
        .cancel {
            right: 0;
        }
    }

    //header-nav
    .header-nav {
        position: relative;
        height: rem(80);
        line-height: rem(80);
        background: #f7f8f8;
        box-shadow: 0 0px 30px rgba(0, 0, 0, 0.3);
        .nav-menu {
            display: flex;
            justify-content: space-around;
            font-size: rem(28);
        }
        li {
            width: 25%;
            text-align: center;
            a {
                display: block;
                width: 100%;
                height: 100%;
                color: $main-font-color;
            }
            span {
                display: inline-block;
                padding: 0 rem(11);
            }
        }
        .active {
            a {
                color: $main-tone;
            }
        }
        .nav-slider {
            position: absolute;
            bottom: 0;
            height: rem(4);
            background: $main-tone;
            left: 34px;
            width: 141px;
            transition: all .3s;
        }
    }
</style>