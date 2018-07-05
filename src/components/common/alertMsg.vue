<template>
  <div class="alert_container">
    <section class="Msg_container">
      <div class="Msg_icon">
        <span></span>
        <span></span>
      </div>
      <p class="Msg_text"></p>
      <div class="Msg_confrim">确认</div>
    </section>
  </div>
</template>

<script>
export default {
  
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
  }
</style>
