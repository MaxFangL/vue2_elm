<template>
  <div>
    <head-top>
      <span slot="logo" class="head_logo">elm</span>
    </head-top>

    <nav class="city_nav">
      <div class="city_tips">
        <span>当前定位城市：</span>
        <span>定位不准时，请在城市列表中选择</span>
      </div>

      <router-link class="guess_city">
        <span>武汉</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
import headTop from '../../components/header/head'
export default {
  data () {

  },

  mounted () {

  },

  components: {
    headTop
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
  }
</style>
