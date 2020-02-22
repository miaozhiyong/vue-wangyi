<template>
    <div id="footerContainer">
        <div :class="{active:$route.path=='/shouye'}" @click="goPath('/shouye')" class="guideItem">
            <i class="iconfont icon-home"></i>
            <span>首页</span>
        </div>
        <div :class="{active:$route.path=='/fenlei'}" @click="goPath('/fenlei')" class="guideItem">
            <i class="iconfont icon-fenlei"></i>
            <span>分类</span>
        </div>
        <div :class="{active:$route.path=='/zhidemai'}" @click="goPath('/zhidemai')" class="guideItem">
            <i class="iconfont icon-tupian"></i>
            <span>值得买</span>
        </div>
        <div :class="{active:$route.path=='/gouwuche'}" @click="goPath('/gouwuche')" class="guideItem">
            <i class="iconfont icon-gouwuche1"></i>
            <span>购物车</span>
        </div>
        <div :class="{active:$route.path=='/geren'}" @click="goPath('/geren')" class="guideItem">
            <i class="iconfont icon-gerenzhongxin"></i>
            <span>个人</span>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            goPath(path){
                this.$router.push(path)
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
    #footerContainer
        display: flex
        border-top:1px (#eee)
        position fixed
        left 0
        bottom: 0
        width:100%
        box-sizing border-box
        .guideItem
            width: 20%
            height 98px
            text-align: center
            display flex
            flex-direction column
            &.active
                color #B4282D
            /*background #7e8c8d*/
            .iconfont
                font-size 40px
                line-height 60px

</style>