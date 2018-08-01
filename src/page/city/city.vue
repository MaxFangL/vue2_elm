<template>
  <div class="city_container">
    <head-top :head-title="cityName" go-back="true">
      <router-link to="/home" slot="changeCity" class="change_city">切换城市</router-link>
    </head-top>

    <div class="serch_contariner">
      <input type="text" class="city_input input_style" placeholder="请输入学校、商务楼、地址">
      <input type="submit" class="city_submit input_style" value="搜索">
    </div>

    <div class="serch_list_container">
      <div class="serch_history_title">搜索历史</div>
      <ul class="serch_address_ul">
        <li>
          <h4 class="address_title ellipsis">北部的说法是否发生时</h4>
          <p class="address_describe ellipsis">收到了深刻的价格开始的感慨是读后感</p>
        </li>
        <li>
          <h4 class="address_title">北部的说法是否发生时</h4>
          <p class="address_describe">收到了深刻的价格开始的感慨是读后感</p>
        </li>
        <li>
          <h4 class="address_title">北部的说法是否发生时</h4>
          <p class="address_describe">收到了深刻的价格开始的感慨是读后感</p>
        </li>
        <li>
          <h4 class="address_title">北部的说法是否发生时</h4>
          <p class="address_describe">收到了深刻的价格开始的感慨是读后感</p>
        </li>
        <li>
          <h4 class="address_title">北部的说法是否发生时</h4>
          <p class="address_describe">收到了深刻的价格开始的感慨是读后感</p>
        </li>
        <li>
          <h4 class="address_title">北部的说法是否发生时</h4>
          <p class="address_describe">收到了深刻的价格开始的感慨是读后感</p>
        </li>
        <li>
          <h4 class="address_title">北部的说法是否发生时</h4>
          <p class="address_describe">收到了深刻的价格开始的感慨是读后感</p>
        </li>
        <li>
          <h4 class="address_title">北部的说法是否发生时</h4>
          <p class="address_describe">收到了深刻的价格开始的感慨是读后感</p>
        </li>
        <li>
          <h4 class="address_title">北部的说法是否发生时</h4>
          <p class="address_describe">收到了深刻的价格开始的感慨是读后感</p>
        </li>
        <li>
          <h4 class="address_title">北部的说法是否发生时</h4>
          <p class="address_describe">收到了深刻的价格开始的感慨是读后感</p>
        </li>
        <li>
          <h4 class="address_title">北部的说法是否发生时</h4>
          <p class="address_describe">收到了深刻的价格开始的感慨是读后感</p>
        </li>
        <li>
          <h4 class="address_title">北部的说法是否发生时</h4>
          <p class="address_describe">收到了深刻的价格开始的感慨是读后感</p>
        </li>
      </ul>

      <div class="clear_history">清除所有</div>
    </div>
  </div>
</template>

<script>
import headTop from '../../components/header/head'
import { currentCity } from '../../service/getData.js'

export default {
  data () {
    return {
      inputValue: '', // 搜索地址
      cityId: '', // 当前城市id
      cityName: '' // 当前城市名字
    }
  },

  mounted () {
    this.cityId = this.$route.params.cityId
    // 获取当前城市名字
    currentCity(this.cityId).then(res => {
      this.cityName = res.data.name
    })
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
    padding-top: 2.35rem;
    .change_city {
      right: .4rem;
      .sc(.6rem, #fff);
      .ct;
    }
  }

  .serch_contariner {
    padding-top: .4rem;
    background-color: #fff;
    border-top: 1px solid @bc;
    border-bottom: 1px solid @bc;
    .input_style {
      margin: 0 auto;
      // width: 90%;
      .wh(90%, 1.4rem);
      display: block;
      border-radius: .1rem;
      margin-bottom: .4rem;
    }
    .city_input {
      border: 1px solid @bc;
      padding: 0 .3rem;
      .sc(.65rem, #333);
    }
    .city_submit {
      background-color: @blue;
      .sc(.65rem, #fff);
    }
  }

  .serch_list_container {
    .serch_history_title {
      border-top: 1px solid @bc;
      border-bottom: 1px solid @bc;
      padding-left: .5rem;
      .font(.475rem, .8rem);
    }
    .serch_address_ul {
      border-top: 1px solid @bc;
      background-color: #fff;
      li {
        margin: 0 auto;
        padding-top: .65rem;
        border-bottom: 1px solid @bc;
        .address_title {
          margin: 0 auto .35rem;
          width: 90%;
          .sc(.65rem, #333);
        }
        .address_describe {
          margin: 0 auto .55rem;
          width: 90%;
          .sc(.45rem, #999);
        }
      }
    }

    .clear_history {
      .sc(.7rem, #666);
      text-align: center;
      line-height: 2rem;
      background-color: #fff;
    }
  }
</style>
