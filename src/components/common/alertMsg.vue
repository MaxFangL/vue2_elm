<template>
  <div class="alert_container">
    <section class="Msg_container">
      <div class="Msg_icon">
        <span></span>
        <span></span>
      </div>
      <p class="Msg_text">{{alertText}}</p>
      <div class="Msg_confrim" @click="closeMsg">确认</div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['alertText'],
  methods: {
    closeMsg () {
      this.$emit('closeMsg')
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../style/mixin.less';
  .alert_container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    .Msg_container {
      position: absolute;
      top: 50%;
      left: 50%;
      padding-top: .6rem;
      margin-top: -6rem;
      margin-left: -6rem;
      width: 12rem;
      animation: MsgMotion .4s;
      background-color: rgba(255, 255, 255, 1);
      border: 1px;
      border-radius: .25rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .Msg_icon {
        .wh(3rem, 3rem);
        border: .15rem solid #f8cb86;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        span:nth-of-type(1) {
          .wh(.12rem, 1.5rem);
          background-color: #f8cb86;
        }
        span:nth-of-type(2) {
          .wh(.2rem, .2rem);
          border: 1px;
          border-radius: 50%;
          margin-top: .2rem;
          background-color: #f8cb86;
        }
      }
      .Msg_text {
        .sc(.7rem, #333);
        line-height: .9rem;
        text-align: center;
        margin-top: .8rem;
        padding: 0 .4rem;
      }
      .Msg_confrim {
        .sc(.8rem, #fff);
        margin-top: .8rem;
        width: 100%;
        font-weight: bold;
        text-align: center;
        line-height: 1.8rem;
        background-color: #4cd964;
        border: 1px;
        border-bottom-left-radius: .25rem;
        border-bottom-right-radius: .25rem;
      }
    }
  }
  @keyframes MsgMotion {
    0% {transform: scale(1)}
    35% {transform: scale(.7)}
    70% {transform: scale(1.2)}
    100% {transform: scale(1)}
  }
</style>
