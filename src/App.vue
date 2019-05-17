<template>
    <div id="app">
        <v-header :seller="seller" v-if="showHeader"></v-header>
        <div class="tab border-1px">
            <div class="tab-item">
                <router-link to="/goods">商品</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/ratings">评论</router-link>

            </div>
            <div class="tab-item">
                <router-link to="/seller">商家</router-link>
            </div>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import header from './components/header/header'
    import {getSeller, getGoods, getRatings} from "./api/index";

    export default {
        data() {
            return {
                showHeader: true,
                seller: [],
                goods: [],
                ratings: [],
            }
        },
        components: {
            'v-header': header
        },
        created() {
            this._getSeller()
            this._getGoods()
            this._getRatings()
        },
        methods: {
            _getSeller() {
                this.showHeader = false
                getSeller().then(
                    res => {
                        this.seller = res
                        this.showHeader = Object.keys(this.seller).length > 0
                        console.log(this.showHeader)
                    }
                )
            },
            _getGoods() {
                getGoods().then(
                    res => {
                        this.goods = res
                    }
                )
            },
            _getRatings() {
                getRatings().then(
                    res => {
                        this.ratings = res
                    }
                )
            }
        }
    }
</script>

<style lang="stylus">
    @import "./common/stylus/mixin.styl"
    @import "./common/stylus/torem.styl"
    @import "./common/stylus/base.styl"
    #app {
        .tab {
            display: flex
            width: 100%
            height: px2rem(80)
            line-height: px2rem(80)
            .tab-item {
                flex: 1
                border-1px(rgba(7,17,27,.1))
                text-align: center
                & > a {
                    display: block
                    font-size: px2rem(28)
                    color: rgb(77, 85, 93)
                    &.router-link-active{
                        color rgb(240,20,20)
                    }
                }
            }
        }

    }

</style>
