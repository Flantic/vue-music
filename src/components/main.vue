<template>
    <div class="app-main">
        <router-view></router-view>
		<App-Footer></App-Footer>
    </div>
</template>

<script>
    import AppFooter from './Global/footer'
    export default {
        name: 'main',
        components: {
            AppFooter
        }
    }
</script>