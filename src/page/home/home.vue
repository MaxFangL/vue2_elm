<template>
  <div>
    <head-top signin-up='home'>
      <span slot="logo" class="head_logo" @click="reload">elm</span>
    </head-top>

    <!-- 城市定位 -->
    <nav class="city_nav">
      <div class="city_tips">
        <span>当前定位城市：</span>
        <span>定位不准时，请在城市列表中选择</span>
      </div>

      <div class="guess_city">
        <span>{{guessCity}}</span>
        <svg class="icon arrow_right" aria-hidden="true">
          <use xlink:href="#icon-gengduo"></use>
        </svg>
      </div>
    </nav>

    <!-- 热门城市列表 -->
    <section class="hot_city_container">
      <h4 class="city_title">热门城市</h4>
      <ul class="city_ListUl clear">
        <li v-for="item in hotCity" :key="item.id">
          {{item.name}}
        </li>
      </ul>
    </section>

    <!-- 所有城市列表 -->
    <section class="group_city_container">
      <ul class="letter_classify_list">
        <li v-for="(value, key, index) in sortgroupcity" :key="key" class="letter_classity_li">
          <h4 class="city_title">{{key}}
            <span v-if="index == 0">（按字母分类）</span>
          </h4>
          <ul class="groupCity_name_container city_ListUl clear">
            <li v-for="item in value" :key="item.id" class="ellipsis">
              {{item.name}}
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import headTop from '../../components/header/head'
import {cityGuess, hotCity, groupCity} from '../../service/getData'

export default {
  data () {
    return {
      guessCity: '', // 当前城市
      hotCity: [], // 热门城市
      groupCity: {} // 所有城市列表
    }
  },

  mounted () {
    // 生命周期
    // 获取当前城市
    cityGuess().then(res => {
      this.guessCity = res.data.name
    })

    // 获取热门城市
    hotCity().then(res => {
      this.hotCity = res.data
    })

    // 获取所有城市
    groupCity().then(res => {
      this.groupCity = res.data
    })
  },

  components: {
    headTop
  },

  computed: {
    // 将所有城市列表按A-Z字母排序
    sortgroupcity () {
      let sortRes = {}
      for (let i = 65; i <= 90; i++) {
        if (this.groupCity[String.fromCharCode(i)]) {
          sortRes[String.fromCharCode(i)] = this.groupCity[String.fromCharCode(i)]
        }
      }
      return sortRes
    }
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
      align-items: center;
      height: 1.8rem;
      padding: 0 0.45rem;
      border-top: 1px solid @bc;
      border-bottom: 2px solid @bc;
      .font(0.75rem, 1.8rem);
      > span:nth-of-type(1) {
        color: @blue;
      }
      > .arrow_right {
        .wh(0.6rem, 0.6rem);
        fill: #999;
      }
    }
  }
  .hot_city_container {
    background-color: #fff;
    margin-bottom: .4rem;
  }
  .city_title {
    color: #666;
    font-weight: 400;
    text-indent: .45rem;
    border-top: 2px solid @bc;
    border-bottom: 1px solid @bc;
    .font(.55rem, 1.45rem, 'Helvetica Neue');
    > span {
      .sc(.475rem, #999);
    }
  }
  // 城市列表
  .city_ListUl {
    li {
      float: left;
      text-align: center;
      color: @blue;
      border-right: 0.025rem solid @bc;
      border-bottom: 0.025rem solid @bc;
      .wh(25%, 1.75rem);
      .font(.6rem, 1.75rem);
    }
    li:nth-of-type(4n) {
      border-right: none;
    }
  }
  // 所有城市列表
  .letter_classity_li {
    margin-bottom: .4rem;
    background-color: #fff;
    border-bottom: 1px solid @bc;
    > .groupCity_name_container {
      > li {
        color: #666;
      }
    }
  }

</style>
