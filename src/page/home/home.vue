<template>
  <div>
    <head-top>
      <span slot="logo" class="head_logo" @click="reload">elm</span>
    </head-top>

    <nav class="city_nav">
      <div class="city_tips">
        <span>当前定位城市：</span>
        <span>定位不准时，请在城市列表中选择</span>
      </div>

      <div class="guess_city">
        <span>武汉</span>
        <svg class="icon arrow_right" aria-hidden="true">
          <use xlink:href="#icon-gengduo"></use>
        </svg>
      </div>
    </nav>

    <section class="hot_city_container">
      <h4 class="hot_city_title">热门城市</h4>
    </section>
  </div>
</template>

<script>
import headTop from '../../components/header/head'
export default {
  data () {
    return {
    }
  },

  mounted () {

  },

  components: {
    headTop
  },

  methods: {
    // 点击刷新页面
    reload () {
      window.location.reload()
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../style/mixin.less';
  .head_logo {
    .ct;
    .wh(2.3rem, 0.7rem);
    .sc(0.7rem, #fff);
    left: 0.4rem;
    font-weight: 400;
  }
  .city_nav {
    padding-top: 2.35rem;
    background-color: #fff;
    margin-bottom: 0.4rem;
    border-top: 1px solid @bc;
    > .city_tips {
      .fj;
      line-height: 1.45rem;
      padding: 0 0.45rem;
      > span:nth-of-type(1) {
        .sc(0.55rem, #666);
      }
      > span:nth-of-type(2) {
        .sc(0.475rem, #9f9f9f);
      }
    }
    > .guess_city {
      .fj;
      // align-items: center;
      height: 1.8rem;
      padding: 0 0.45rem;
      border-top: 1px solid @bc;
      border-bottom: 2px solid @bc;
      .font(0.75rem, 1.8rem);
      > span:nth-of-type(1) {
        color: @blue;
      }
      > .arrow_right {
      }
    }
  }

</style>
