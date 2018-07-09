<template>
  <header id="head_top">
    <slot name="logo"></slot>
    <section class="head_goBack" v-if="goBack" @click="$router.go(-1)">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
      </svg>
    </section>
    <router-link :to="'/login'" class="head_login" v-if="signinUp">
      <span class="login_span">登录|注册</span>
    </router-link>
    <section class="head_title" v-if="headTitle">
      <span class="title_text">{{headTitle}}</span>
    </section>
    <slot name="changeCity"></slot>
  </header>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['signinUp', 'headTitle', 'goBack']
}
</script>

<style lang="less" scoped>
  @import '../../style/mixin.less';

  #head_top {
    background-color: @blue;
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    .wh(100%, 2rem);
    >.head_login {
      .ct;
      .sc(0.65rem, #fff);
      right: 0.55rem;
      > .login_span {
        color: #fff;
      }
    }
    > .head_goBack {
      left: 0.4rem;
      .wh(0.6rem, 1rem);
      line-height: 2.2rem;
      margin-left: 0.4rem;
    }
    > .head_title {
      .center;
      width: 50%;
      color: #fff;
      text-align: center;
      > .title_text {
        .sc(0.8rem, #fff);
        text-align: center;
        font-weight: bold;
      }
    }
  }
</style>
