<template>
  <div class="login_container">
    <head-top head-title="密码登录" go-back='true'>
    </head-top>
    <form class="loginForm">
      <section class="input_container">
        <input type="text" placeholder="账号" v-model.lazy="userAccount">
      </section>
      <section class="input_container">
        <input v-if="!showPassWord" v-model="passWord" type="password" placeholder="密码">
        <input v-else type="text" placeholder="密码" v-model="passWord">
        <div class="button_switch" :class="{change_to_text: showPassWord}">
          <div class="cricle_botton"></div>
          ...
        </div>
      </section>
      <section class="input_container">
        <input type="text" placeholder="验证码" maxlength="4" v-model="verifyCode">
        <div class="change_img_container">
          <img v-show="captchaCodeImg" :src="captchaCodeImg">
          <div class="change_img" @click="getCapchaCode">
            <p>看不清</p>
            <p>换一张</p>
          </div>
        </div>
      </section>
    </form>
    <section class="login_message">
        <p>温馨提示：未注册过的账号，登录时将自动注册</p>
        <p>注册过的用户可凭账号密码登录</p>
    </section>
    <button class="login_btn">登录</button>
  </div>
</template>

<script>
import headTop from '../../components/header/head'

export default {
  data () {
    return {
      userAccount: null, // 用户名
      passWord: null, // 密码
      showPassWord: false, // 是否显示密码
      verifyCode: null, // 验证码
      captchaCodeImg: null // 验证码图片地址
    }
  },
  // 模板渲染前调用
  created () {
    this.getCapchaCode()
  },
  components: {
    headTop
  },
  methods: {
    // 是否显示密码
    changePassWordType () {
      this.showPassword = !this.showPassword
    },
    // 获取验证码，开发使用固定图片，生产环境使用真实验证码
    async getCapchaCode () {
    }
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

  // 密码切换
  .button_switch {
    // display: flex;
    padding: 0 0.3rem;
    .wh(2rem, .8rem);
    .sc(.6rem, #999);
    border: 1px solid #ddd;
    border-radius: 0.4rem;
  }

  .login_message {
    > p {
      .sc(0.5rem, red);
      padding: .4rem .6rem;
      line-height: 0.5rem;
    }
  }

  // 登录按钮
  .login_btn {
    display: block;
    margin: .5rem auto;
    .sc(.7rem, #fff);
    width: 85%;
    height: 2.1rem;
    background-color: #4cd96f;
    line-height: 2.1rem;
    border-radius: .15rem;
  }

  // 切换按钮背景色
  .change_to_text {
    background-color: #4cd96f;
  }
</style>
