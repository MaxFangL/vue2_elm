<template>
  <div class="login_container">
    <head-top head-title="密码登录" go-back='true'>
    </head-top>
    <form class="loginForm">
      <section class="input_container">
        <input type="text" placeholder="账号" v-model.lazy="userAccount">
      </section>
      <section class="input_container">
        <input v-if="!showPassword" v-model="passWord" type="password" placeholder="密码">
        <input v-else type="text" placeholder="密码" v-model="passWord">
      </section>
    </form>
  </div>
</template>

<script>
import headTop from '../../components/header/head'

export default {
  data () {
    return {
      userAccount: null, // 用户名
      passWord: null, // 密码
      showPassword: false // 是否显示密码
    }
  },
  components: {
    headTop
  }
}
</script>

<style lang="less" scoped>
  @import '../../style/mixin';
  .login_container {
    padding-top: 1.95rem;
    p, span, input {
      font-family: Arial, Helvetica Neue, Tahoma;
    }
  }

  .loginForm {
    background-color: #fff;
    margin-top: 0.6rem;
    > .input_container {
      display: flex;
      justify-content: space-between;
      padding: 0.6rem 0.8rem;
      border-bottom: 1px solid #f1f1f1;
      input {
        .sc(0.7rem, #666);
      }
    }
  }
</style>
