<template>
  <transition name="move">
    <div v-show="showFlag" class="food" ref="food">
      <div class="food-content">
        <div class="image-header">
          <img :src="food.image">
          <span class="back" @click="show">
          <i class="icon-arrow_lift"></i>
          </span>
        </div>
        <div class="content">
          <div class="title">{{food.name}}</div>
          <div class="detail">
            <span class="sell-count">月售{{food.sellCount}}份</span>
            <span class="rating">好评率{{food.rating}}</span>
          </div>
          <div class="price">
            <span class="now">￥{{food.price}}</span><span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
          </div>
        </div>
        <div class="cartcontrol-wrapper">
          <cartcontrol :food="food"></cartcontrol>
        </div>
        <div @click="addFirst" class="buy" v-show="!food.count>0">加入购物车</div>
      </div>
      <split v-show="food.info"></split>
      <div class="info" v-show="food.info">
        <h1 class="title">商品信息</h1>
        <p class="text">{{food.info}}</p>
        <p class="text">{{food.info}}</p>
        <p class="text">{{food.info}}</p>
        <p class="text">{{food.info}}</p>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Bscroll from 'better-scroll';
  import cartcontrol from 'components/cartcontrol/cartcontrol';
  import split from 'components/split/split';
  //  import Vue from 'Vue';
  export default {
    props: {
      food: {
        type: Object
      }
    },
    data() {
      return {
        showFlag: false
      };
    },
    methods: {
      show() {
        this.showFlag = !this.showFlag;
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new Bscroll(this.$refs.food, {
              click: true
            });
          } else {
            this.scroll.refresh();
          }
        });
      },
      addFirst(event) {
        if (!event._constructed) {
          return;
        }
//        this.$emit('cart.add', event.target);
        this.$set(this.food, 'count', 1);
        console.log(this.food);
      }

    },
    components: {
      cartcontrol,
      split
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .food
    position fixed
    left: 0;
    top 0;
    bottom 48px
    z-index: 30
    width 100%
    background white
    &.move-enter-active, &.move-leave-active
      transition all 0.3s
      transform translate3d(0, 0, 0)
    &.move-enter, &.move-leave-active
      transform translate3d(100%, 0, 0)
    .image-header
      position: relative
      width: 100%
      height: 0
      padding-top: 100%
      img
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
      .back
        position: absolute
        top: 10px
        left: 0
        .icon-arrow_lift
          display: block
          padding: 10px
          font-size: 20px
          color: #fff
    .content
      padding 18px
      .title
        line-height 14px
        margin-bottom 8px
        font-size 14px
        font-weight 700
        color: rgb(7, 17, 27)
      .detail
        margin-bottom 18px;
        line-height 10px;
        font-size 0;
        height: 10px
        .sell-count, .rating
          font-size 10px
          color: rgb(147, 153, 159)
        .sell-count
          margin-right 12px
      .price
        font-weight 700;
        line-height 24px;
        .now
          margin-right 8px;
          font-size 14px;
          color red;
        .old
          text-decoration line-through;
          font-size 10px;
          color: gray
    .cartcontrol-wrapper
      position absolute;
      right 12px;
      bottom: 12px;
    .buy
      position absolute
      right: 18px
      bottom 18px;
      height: 24px;
      line-height 24px;
      padding: 0 12px;
      box-sizing border-box;
      font-size 10px;
      border-radius 12px;
      color #fff;
      background rgb(0, 120, 220)
    .info
      padding: 18px;
      .title
        line-height 14px;
        margin-bottom 6px;
        font-size 14px;
        color: rgb(7, 17, 27)
    .text
      line-height 24px;
      padding 0 8px;
      font-size 12px;
      color: rgb(77, 85, 93)
</style>
