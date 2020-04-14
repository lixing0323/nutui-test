<template>
    <div>
        <nut-row class="title">提醒</nut-row>
        <nut-row>3月15日  周三  13:30-17:30</nut-row>
        <nut-row>设备保全科-工程材料及热处理工艺</nut-row>
        <nut-row>已报名：30人  教室：一厂保全学堂</nut-row>

        <nut-row class="title row">公告</nut-row>
        <nut-row>[课程] 09-10  四杆机构原理课程讲师更改为张东讲师</nut-row>
        <nut-row>[计划] 09-09 本月链转动原理课程更改到下月</nut-row>
        <nut-row>[通知] 08-11  本周五在公司大礼堂开会</nut-row>

        <nut-row class="title row">课程计划</nut-row>
        <nut-row>4月15日  周三  13:30-17:30</nut-row>
        <nut-row>设备保全科-四杆机构原理</nut-row>
        <nut-row>已报名：30人  教室：一厂机电实验室</nut-row>

        <custom-tab-bar class="tab-bar" :selected="'home'"/>
    </div>
</template>

<script>
// 主页
import Vue from 'vue'
import CustomTabBar from '../../custom-tab-bar/index.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    CustomTabBar
  },
  mounted() {
    if (process.env.isMiniprogram) {
      wx.login({
        success(res) {
          console.log('login success', res)
        }
      })
    }
  },
  data() {
    return {
    }
  },
  created() {
    this.getCookie()
  },
  methods: {
    getCookie() {
      if (process.env.isMiniprogram) {
        console.log('document.cookie=', document.cookie)
      }
    }
  }
})
</script>

<style lang="less">
    .title {
        font-size: 14px;
        color: #888888;
    }
    .row {
        margin-top: 30px;
    }
</style>
