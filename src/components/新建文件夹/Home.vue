<template>
	<section class="app-home">
		<header :class="['app-header',{ 'is-search': search_state }]" >
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
					<li class="active"><a href=""><span>个性推荐</span></a></li>	
					<li><a href=""><span>歌单</span></a></li>
					<li><a href=""><span>主播电台</span></a></li>
					<li><a href=""><span>排行榜</span></a></li>
				</ul>
				<span class="nav-slider" :style="nav_style[active_nav]"></span>
			</nav>
		</header>
		<div class="music-control"></div>
		<div class="app-content">
			<div class="slider">
				<Slider></Slider>
			</div>
			<div class="Recommend">
				<div class="item">
					<a href=""><i class="img img-FM"></i></a>
					<p class="title">私人FM</p>
				</div>
				<div class="item ">
					<a href=""><i class="img img-Recommend"></i></a>
					<p class="title">每日歌曲推荐</p>
				</div>
				<div class="item">
					<a href=""><i class="img img-Hot-top"></i></a>
					<p class="title">云音乐热歌榜</p>
				</div>
			</div>
			<div class="list-content">
				<section class="item-box">
					<div class="title">
						<i class="img img-calendar"></i>
						推荐歌单
						<a href="" class="more">更多></a>
					</div>
					<ul class="list-warp song-list">
						<li>
							<a href="">
								<div class="item-img">
									<img src="../assets/img/item1.jpg" alt="">
									<span class="label"><i class="icon icon-headset"></i>20万</span>
								</div>
								<div class="item-title">
									【华语】 愿我们 不负这 美好时光
								</div>
							</a>
						</li>
						<li>
							<a href="">
								<div class="item-img">
									<img src="../assets/img/item2.jpg" alt="">
									<span class="label"><i class="icon icon-headset"></i>20万</span>
								</div>
								<div class="item-title">
									【华语】 愿我们 不负这 美好时光
								</div>
							</a>
						</li>
						<li>
							<a href="">
								<div class="item-img">
									<img src="../assets/img/item3.jpg" alt="">
									<span class="label"><i class="icon icon-headset"></i>20万</span>
								</div>
								<div class="item-title">
									【华语】 愿我们 不负这 美好时光
								</div>
							</a>
						</li>
						<li>
							<a href="">
								<div class="item-img">
									<img src="../assets/img/item4.jpg" alt="">
									<span class="label"><i class="icon icon-headset"></i>20万</span>
								</div>
								<div class="item-title">
									【华语】 愿我们 不负这 美好时光
								</div>
							</a>
						</li>
						<li>
							<a href="">
								<div class="item-img">
									<img src="../assets/img/item5.jpg" alt="">
									<span class="label"><i class="icon icon-headset"></i>20万</span>
								</div>
								<div class="item-title">
									【华语】 愿我们 不负这 美好时光
								</div>
							</a>
						</li>
						<li>
							<a href="">
								<div class="item-img">
									<img src="../assets/img/item6.jpg" alt="">
									<span class="label"><i class="icon icon-headset"></i>20万</span>
								</div>
								<div class="item-title">
									【华语】 愿我们 不负这 美好时光
								</div>
							</a>
						</li>
					</ul>
				</section>
				<section class="item-box">
					<div class="title">
						<i class="img img-album"></i>
						独家放送
						<a href="" class="more">更多></a>
					</div>
					<ul class="list-warp sole-push">
						<li>
							<div class="item-img">
								<img src="../assets/img/item1.jpg" alt="">
							</div>
							<div class="item-title">
								《耳畔中国》 踢馆选手选拔大赛开赛啦!
							</div>
						</li>
						<li>
							<div class="item-img">
								<img src="../assets/img/item2.jpg" alt="">
							</div>
							<div class="item-title">
								音乐专栏 迷上了 《爱乐之城》 ? 这里还有更好的音乐...
							</div>
						</li>
						<li>
							<div class="item-img">
								<img src="../assets/img/item3.jpg" alt="">
							</div>
							<div class="item-title">
								音乐专栏 春天快来了, 带着爸妈踏个青吧!
							</div>
						</li>
					</ul>
				</section>
				<section class="item-box">
					<div class="title">
						<i class="img img-cd"></i>
						最新音乐
						<a href="" class="more">更多></a>
					</div>
					<ul class="list-warp song-list">
						<li>
							<a href="">
								<div class="item-img">
									<img src="../assets/img/item1.jpg" alt="">
								</div>
								<div class="item-title">
									<p>因为遇见你 电视剧热播</p>
									<p>群星</p>
								</div>
							</a>
						</li>
						<li>
							<a href="">
								<div class="item-img">
									<img src="../assets/img/item2.jpg" alt="">
								</div>
								<div class="item-title">
									<p>因为遇见你 电视剧热播</p>
									<p>群星</p>
								</div>
							</a>
						</li>
						<li>
							<a href="">
								<div class="item-img">
									<img src="../assets/img/item3.jpg" alt="">
								</div>
								<div class="item-title">
									<p>因为遇见你 电视剧热播</p>
									<p>群星</p>
								</div>
							</a>
						</li>
						<li>
							<a href="">
								<div class="item-img">
									<img src="../assets/img/item4.jpg" alt="">
								</div>
								<div class="item-title">
									<p>因为遇见你 电视剧热播</p>
									<p>群星</p>
								</div>
							</a>
						</li>
						<li>
							<a href="">
								<div class="item-img">
									<img src="../assets/img/item5.jpg" alt="">
								</div>
								<div class="item-title">
									<p>因为遇见你 电视剧热播</p>
									<p>群星</p>
								</div>
							</a>
						</li>
						<li>
							<a href="">
								<div class="item-img">
									<img src="../assets/img/item1.jpg" alt="">
								</div>
								<div class="item-title">
									<p>因为遇见你 电视剧热播</p>
									<p>群星</p>
								</div>
							</a>
						</li>
					</ul>
				</section>
				<section class="item-box">
					<div class="title">
						<i class="img img-album"></i>
						推荐MV
						<a href="" class="more">更多></a>
					</div>
					<ul class="list-warp sole-push mv">
						<li>
							<div class="item-img">
								<img src="../assets/img/item1.jpg" alt="">
								<span class="label"><i class="icon icon-movie"></i>33944</span>
							</div>
							<div class="item-title">
								《耳畔中国》 踢馆选手选拔大赛开赛啦!
							</div>
						</li>
						<li>
							<div class="item-img">
								<img src="../assets/img/item2.jpg" alt="">
								<span class="label"><i class="icon icon-movie"></i>24548</span>
							</div>
							<div class="item-title">
								音乐专栏 迷上了 《爱乐之城》 ? 这里还有更好的音乐...
							</div>
						</li>
						<li>
							<div class="item-img">
								<img src="../assets/img/item3.jpg" alt="">
								<span class="label"><i class="icon icon-movie"></i>18万</span>
							</div>
							<div class="item-title">
								音乐专栏 春天快来了, 带着爸妈踏个青吧!
							</div>
						</li>
						<li>
							<div class="item-img">
								<img src="../assets/img/item3.jpg" alt="">
								<span class="label"><i class="icon icon-movie"></i>12万</span>
							</div>
							<div class="item-title">
								音乐专栏 春天快来了, 带着爸妈踏个青吧!
							</div>
						</li>
					</ul>
				</section>
				<section class="item-box">
					<div class="title">
						<i class="img img-radio"></i>
						主播电台
						<a href="" class="more">更多></a>
					</div>
					<ul class="list-warp song-list">
						<li>
							<a href="">
								<div class="item-img">
									<img src="../assets/img/item1.jpg" alt="">
									<span class="label-play text-ellipsis">我爱音乐<i class="icon icon-triangle-right"></i></span>
								</div>
								<div class="item-title">
									【华语】 愿我们 不负这 美好时光
								</div>
							</a>
						</li>
						<li>
							<a href="">
								<div class="item-img">
									<img src="../assets/img/item2.jpg" alt="">
									<span class="label-play">暴走大事件<i class="icon icon-triangle-right"></i></span>
								</div>
								<div class="item-title">
									【华语】 愿我们 不负这 美好时光
								</div>
							</a>
						</li>
						<li>
							<a href="">
								<div class="item-img">
									<img src="../assets/img/item1.jpg" alt="">
									<span class="label-play text-ellipsis">我爱音乐<i class="icon icon-triangle-right"></i></span>
								</div>
								<div class="item-title">
									【华语】 愿我们 不负这 美好时光
								</div>
							</a>
						</li>
						<li>
							<a href="">
								<div class="item-img">
									<img src="../assets/img/item2.jpg" alt="">
									<span class="label-play">暴走大事件<i class="icon icon-triangle-right"></i></span>
								</div>
								<div class="item-title">
									【华语】 愿我们 不负这 美好时光
								</div>
							</a>
						</li>
						<li>
							<a href="">
								<div class="item-img">
									<img src="../assets/img/item1.jpg" alt="">
									<span class="label-play text-ellipsis">我爱音乐<i class="icon icon-triangle-right"></i></span>
								</div>
								<div class="item-title">
									【华语】 愿我们 不负这 美好时光
								</div>
							</a>
						</li>
						<li>
							<a href="">
								<div class="item-img">
									<img src="../assets/img/item2.jpg" alt="">
									<span class="label-play">暴走大事件<i class="icon icon-triangle-right"></i></span>
								</div>
								<div class="item-title">
									【华语】 愿我们 不负这 美好时光
								</div>
							</a>
						</li>
					</ul>
				</section>
			</div>
			<footer class="app-cont-footer">
				<p>现在可以根据个人爱好,自由调整首页栏目</p>
				<button class="btn"> 调整栏目顺序</button>
			</footer>
		</div>		
		<div class="app-side"></div>
	</section>
</template>

<script>
import $ from 'jquery'
import Slider from './Slider'
// import Footer from './global/footer'

export default {
  name: 'home',
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
	Slider,
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

<style lang="scss" scope>
@import '../style/home';
</style>