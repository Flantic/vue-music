<template>
    <span>
        {{msg}}
    </span>
</template>

<script>
export default {
    name:'my-music',
    components:{},
    data(){
        return{
            msg:'我是my-music模块'
        }
    },
    methods:{

    }
}
</script>

<style lang="scss">
@import '../style/my_music';
</style>