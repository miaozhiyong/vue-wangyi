<template>
    <div id="bg-nav">
        <div class="nav-top">
            <img class="logo" src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp" />
            <i class="iconfont icon-sousuo"></i>
            <input type="text" placeholder="搜索商品,共20413款" class="search_input">
          <button>登录</button>
        </div>
        <!-- 置顶下部分 -->
        <div class="wrapper" ref="bscroll">
            <ul class="content">
                <li class="active">推荐</li>
            </ul>

        </div>

        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">slider1</div>
                <div class="swiper-slide">slider2</div>
                <div class="swiper-slide">slider3</div>
            </div>
        </div>
    </div>
</template>

<script>
    //引入better-scroll

    import BScroll from 'better-scroll'
    // 引入轮播图
    import Swiper from 'swiper'
    import 'swiper/css/swiper.min.css'
    export default {
        mounted() {
            new BScroll('.wrapper',{
                scrollX:true
            })
            //轮播效果
            var mySwiper = new Swiper('.swiper-container',{
                pagination: {
                    el: '.swiper-pagination',
                },
                loop : true
            })
        }

    }
</script>

<style lang="stylus" rel="stylesheet/stulus">
    #bg-nav
        width 100%
        height 100%
        .nav-top
            height 70px
            display flex
            margin 16px 20px 0px 20px
            vertical-align:bottom
            /*background-color red*/
            .logo
                width 138px
                height 40px
                line-height 40px
                margin-left 20px

            img
                width 138px
                height 56px
                margin-top 10px
            input
                width 54%
                background #ededed
                line-height 56px
                border-radius 10px
                margin-right 20px
                padding-left 80px
                box-sizing:border-box
                outline medium
                margin-left -20px
            i
                position relative
                left 75px
                top 10px
                height 60px
                width 60px
                z-index 100
                font-size 50px
            button
                color red
                border 1px solid red
                border-radius 4px
                width 100px
                height 50px
                margin-top 10px
                background-color #fff


    .wrapper
        width 100%
        height 50px
        overflow hidden
        .content
            width 1300px
            height 50px
            display flex
            white-space nowrap
            li
                height 54px
                font-size 24px
                text-align: center
                line-height 45px
                padding  0 24px
                display block
                background #ffffff
                &.active
                    color red
                    border-bottom  8px solid red
                    box-sizing  border-box

</style>