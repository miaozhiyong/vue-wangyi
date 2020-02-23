<template>
    <div id="fenleiContainer">
        <div class="header">
            头部
        </div>
        <div class="content">
            <div class="left">
                <fenleiLeft/>
            </div>
            <div class="right">
                <fenleiright/>
            </div>
        </div>
    </div>
</template>

<script>
    import fenleiLeft from './fenleiLeft'
    import fenleiright from './fenleiright'
    export default {
        components:{
            fenleiLeft,fenleiright
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stulus">
    #fenleiContainer
        .header
            width 100%
            height 50px
            background yellow
        .content
            display flex
            height 500px
            .left
                width 80px
                background darkgoldenrod
            .right
                width 295px
                background bisque


</style>