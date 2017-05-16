<template>
    <div class="music-control">
        <header class="control-header">
            <div class="header-group">
                <a href="" class="header-back"><i class="icon icon-back"></i></a>
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
    data(){
        return{}
    },
    methods:{

    }
}
</script>

<style lang="scss">
@import '../../style/util';
.music-control{
    width:100%;
    height:100%;
    overflow:hidden;
    .controller-bg{
        position:fixed;
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
</style>
