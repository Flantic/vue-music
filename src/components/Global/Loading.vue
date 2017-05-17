<template>
    <div class="loading">
        <div class="loader-inner line-scale">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p class="info">更新中,请稍候...</p>
    </div>
</template>

<style scoped>
    .loading{
        box-sizing: border-box;
        display: flex;
        flex: 0 1 auto;
        flex-direction: column;
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: 25%;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
    }
    .loading .info{
        font-size:.2rem;
        color:#727173;
    }
    .line-scale > div {
        background-color: #d43c33;
        width: .06rem;
        height: .4rem;
        border-radius: 5px;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        display: inline-block;
    }
   /*animation----------------------------------------*/
    @-webkit-keyframes line-scale {
        0% {
            -webkit-transform: scaley(1);
                    transform: scaley(1); }

        50% {
            -webkit-transform: scaley(0.4);
                    transform: scaley(0.4); }

        100% {
            -webkit-transform: scaley(1);
                    transform: scaley(1); } }
        @keyframes line-scale {
        0% {
            -webkit-transform: scaley(1);
                    transform: scaley(1); }

        50% {
            -webkit-transform: scaley(0.4);
                    transform: scaley(0.4); }

        100% {
            -webkit-transform: scaley(1);
                    transform: scaley(1); } 
    }
    .line-scale > div:nth-child(1) {
        animation: line-scale 1s 0.1s infinite cubic-bezier(.2, .68, .18, 1.08);
    }
    .line-scale > div:nth-child(2) {
        animation: line-scale 1s 0.2s infinite cubic-bezier(.2, .68, .18, 1.08);
    }
    .line-scale > div:nth-child(3) {
        animation: line-scale 1s 0.3s infinite cubic-bezier(.2, .68, .18, 1.08);
    }
    .line-scale > div:nth-child(4) {
        animation: line-scale 1s 0.4s infinite cubic-bezier(.2, .68, .18, 1.08);
    }
    .line-scale > div:nth-child(5) {
        animation: line-scale 1s 0.6s infinite cubic-bezier(.2, .68, .18, 1.08);
    }
</style>