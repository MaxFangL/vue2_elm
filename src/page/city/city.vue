<template>
  <div class="city_container">
    <head-top :head-title="cityName" go-back="true">
      <router-link to="/home" slot="changeCity" class="change_city">切换城市</router-link>
    </head-top>

    <form class="serch_contariner" v-on:submit.prevent>
      <input v-model="inputValue" type="text" class="city_input input_style" placeholder="请输入学校、商务楼、地址" required>
      <input @click="postPois" type="submit" class="city_submit input_style" value="搜索">
    </form>

    <div class="serch_list_container">
      <div v-if="historyTitle" class="serch_history_title">搜索历史</div>
      <ul class="serch_address_ul">
        <li v-for="(item, index) in addressList" @click="goNextPage(index, item.geohash)" :key="index">
          <h4 class="address_title ellipsis">{{item.name}}</h4>
          <p class="address_describe ellipsis">{{item.address}}</p>
        </li>
      </ul>

      <div v-if="historyTitle&&addressList.length" @click="clearAll" class="clear_history">清除所有</div>
    </div>
    <div v-if="searchMsg" class="search_message">很抱歉，无搜索结果！</div>
  </div>
</template>

<script>
import headTop from '../../components/header/head'
import { currentCity, searchAddress } from '../../service/getData.js'
import { getStore, setStore, removeStore } from '../../config/mUtils.js'

export default {
  data () {
    return {
      inputValue: '', // 搜索地址
      cityId: '', // 当前城市id
      cityName: '', // 当前城市名字
      historyTitle: true, // 默认显示搜索历史标题
      addressList: [], // 搜索地址列表
      historyAddress: [], // 历史搜索记录
      searchMsg: false // 搜索无结果，显示提示信息，默认隐藏
    }
  },

  mounted () {
    this.cityId = this.$route.params.cityId
    // 获取当前城市名字
    currentCity(this.cityId).then(res => {
      this.cityName = res.data.name
    })
    // 获取历史纪录
    this.initData()
  },
  components: {
    headTop
  },

  methods: {
    // 初始化显示搜索历史纪录
    initData () {
      if (getStore('historyAddress')) {
        this.addressList = JSON.parse(getStore('historyAddress'))
      } else {
        this.addressList = []
      }
    },
    // 发送地址搜索信息
    postPois () {
      if (this.inputValue) {
        searchAddress(this.cityId, this.inputValue).then(res => {
          this.historyTitle = false
          this.addressList = res
          this.searchMsg = res.length === 0
          console.log(res)
        })
      }
    },
    /**
     * 点击搜索结果，判断是否有重复的历史纪录
     * 没有则新增，有则不重复存储，判断完成后进入下一个页面
     */
    goNextPage (index, geohash) {
      let history = getStore('historyAddress')
      let chooseAddress = this.addressList[index]
      if (history) {
        let checkRepeat = false
        this.historyAddress = JSON.parse(history)
        this.historyAddress.forEach(element => {
          if (element.geohash === geohash) {
            checkRepeat = true
          }
        })
        if (!checkRepeat) {
          this.historyAddress.push(chooseAddress)
        }
      } else {
        this.historyAddress.push(chooseAddress)
      }
      setStore('historyAddress', this.historyAddress)
    },
    // 清除所有历史纪录
    clearAll () {
      removeStore('historyAddress')
      this.initData()
    }
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

  .search_message {
    // margin: 0 auto;
    .font(.65rem, 1.75rem);
    color: #333;
    background-color: #fff;
    text-indent: .5rem;
  }
</style>
