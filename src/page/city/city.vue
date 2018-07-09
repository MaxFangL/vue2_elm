<template>
  <div class="city_container">
    <head-top head-title="武汉" go-back="true">
      <router-link to="/home" slot="changeCity" class="change_city">切换城市</router-link>
    </head-top>
  </div>
</template>

<script>
import headTop from '../../components/header/head'

export default {
  data () {
    return {
    }
  },

  components: {
    headTop
  },

  methods: {
  },

  computed: {
  }
}
</script>

<style lang="less" scoped>
  @import '../../style/mixin.less';

  .city_container {
    padding-top: 1.95rem;
    .change_city {
      right: .4rem;
      .sc(.6rem, #fff);
      .ct;
    }
  }
</style>
