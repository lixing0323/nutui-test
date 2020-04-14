<template>
    <div>
        <nut-cell>
            <span slot="title">刘强 80033444</span>
            <span slot="sub-title">
                 <nut-row class="row">机械技术一组 - 机械技术</nut-row>
                 <nut-row class="row">教学学时：25小时    已教授：8 节课</nut-row>
            </span>
        </nut-cell>

        <nut-cell class="cell" :is-link="true" :show-icon="true" title="课程表" desc="10" />
        <nut-cell :is-link="true" :show-icon="true" title="培训计划" desc="20" />
        <nut-cell :is-link="true" :show-icon="true" title="我创建的课程" desc="30" />

        <nut-cell class="cell" :is-link="true" :show-icon="true" title="测试题" desc="10" />
        <nut-cell :is-link="true" :show-icon="true" title="题库" desc="20" />
        <nut-cell :is-link="true" :show-icon="true" title="图库" desc="30" />

        <nut-cell class="cell" :is-link="true" :show-icon="true" title="账户信息" />
        <nut-cell :is-link="true" :show-icon="true" title="意见反馈" />

        <custom-tab-bar class="tab-bar" :selected="'mine'"/>
    </div>
</template>

<script>
// 我的
import Vue from 'vue'
import CustomTabBar from '../../custom-tab-bar/index.vue'
import { login } from '../../api/user'

export default Vue.extend({
  name: 'Mine',
  components: {
    CustomTabBar
  },
  data() {
    return {
    }
  },
  created() {
    this.login()
  },
  methods: {
    login() {
      login('wangyunfeng', '111111').then((res) => {
        document.cookie = res.accessToken
        console.log('用户token=', document.cookie)
      })
    }
  }
})
</script>

<style lang="less">
    .row {
        margin-top: 10px;
    }
    .cell {
        margin-top: 10px;
    }
</style>
