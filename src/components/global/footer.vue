<template>
<footer class="app-footer">
    <div class="footer-bg"></div>
    <nav class="footer-nav">
        <router-link to="/" class="item active">
            <i class="icon icon-yun-music"></i>
            <p class="title">发现音乐</p>
        </router-link>
        <router-link to="/Mymusic" class="item">
            <i class="icon icon-note"></i>
            <p class="title">我的音乐</p>
        </router-link>
        <router-link to="/Friend" class="item">
            <i class="icon icon-friend"></i>
            <p class="title">朋友</p>
        </router-link>
        <router-link to="/Account" class="item">
            <i class="icon icon-account"></i>
            <p class="title">账号</p>
        </router-link>
    </nav>
</footer>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style lang="scss" scope>
  @import '../../style/footer';
</style>
