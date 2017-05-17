<template>
    <div class="music-control" :class="{'show':this.$store.state.PlayerStatus}">
        <header class="control-header">
            <div class="header-group">
                <a class="header-back" @click="$store.commit('changePlayerStatus')"><i class="icon icon-back"></i></a>
                <div class="song-info">
                    <div class="song-name">七里香</div>
                    <div class="author-name">周悦</div>
                </div>
                <div class="header-share"><i class="icon icon-share"></i></div>
            </div>
        </header>
        <div class="control-main">
            <div class="main-lyric"></div>
            <div class="main-cover">
               <audio src="http://omwpjgs5a.bkt.clouddn.com/music/mianju.mp3" autoplay="autoplay" ref="musicPlayer">
                    您的浏览器不支持 audio 标签。
                </audio>
                <!--<button @click="">上一曲</button><br>-->
                <button @click="play">播放</button><br>
                <!--<button ref="next">下一曲</button><br>-->
                <button @click="stop">暂停</button><br>
                <button @click="reduceVolume">减小音量</button><br>
                <button @click="addVolume">放大音量</button><br>
                <div class="cover-control"></div>
            </div>
        </div>
        <div class="controller">
            <div class="control-progress-bar"></div>
            <footer class="control-switch-bar"></footer>
        </div>
        <div class="controller-bg"></div>
    </div>
</template>

<script>
export default {
    name:'controller',
    mounted(){
        this.$refs['musicPlayer'].volume = 0.5
    },
    data(){
        return{}
    },
    methods:{
        play(){
            this.$refs['musicPlayer'].play()
        },
        stop(){
            this.$refs['musicPlayer'].pause()
        },
        playPrev(){

        },
        playNext(){

        },
        reduceVolume(){
            let volume = this.$refs['musicPlayer'].volume
            if(volume.toFixed(1) == 0){
                return;
            }else{
                this.$refs['musicPlayer'].volume -= 0.1
            }
        },
        addVolume(){
            let volume = this.$refs['musicPlayer'].volume
            if(volume.toFixed(1) == 1){
                return;
            }
            this.$refs['musicPlayer'].volume += 0.1
        }
    }
}
</script>

<style lang="scss">
@import '../../style/util';
button{
    padding:10px 20px;
    cursor:pointer;
}
.music-control.show{
    transform: translate3d(0,0,0);
}
.music-control{
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    // width:100vh;
    height:100vh;
    overflow:hidden;
    z-index:100;
    background:#000;
    transition: all .5s ease-in-out;
    transform: translate3d(100%,0,0);
    .controller-bg{
        position:absolute;
        top:-15%;
        left:-15%;
        width:150%;
        height:150%;
        background-image:url('../../assets/img/main.png');
        background-size:cover;
        background-repeat: no-repeat;
        // background-size:200% 200%;
    //     background-attachment:fixed;
        background-position:center;
        background-color: rgba(0, 0, 0, 0.35);
        background-blend-mode: darken;
    // 　　-webkit-filter: blur(100px);
    // 　　-moz-filter: blur(100px);
    // 　　-ms-filter: blur(100px);
        filter: blur(80px);
        z-index:1;
    }
}
.control-header{
    position:fixed;
    top:0;
    width:100%;
    text-align:center;
    font-size:rem(33);
    color:#fff;
    border-bottom:rem(1) solid #727173;
    z-index:99;
    .header-group{
        position:relative;
        padding: rem(13) 0; 
        // background: $main-tone;
        z-index:2;
        .icon{ font-weight:100; vertical-align:-5px;}
        .icon-back{ vertical-align:-7px;}
    }
}
.header-back,
.header-share {
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
.header-back{
    left:0;
}
.header-share {
    right: 0;
}
.song-info{
    .song-name{
        font-size:rem(30);
    }
    .author-name{
        font-size:rem(20);
    }
}
.control-main{
    position:relative;
    box-sizing:border-box;
    height:100vh;
    padding-top: rem(120);   
    z-index:2;
}
</style>
