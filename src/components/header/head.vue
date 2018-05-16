<template>
  <header id="head_top">
    <slot name="logo"></slot>
    <div class="head_login">
      <span class="login_span">登录|注册</span>
    </div>
  </header>
</template>

<script>
export default {

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
  }
</style>
