<template>
    <div>
        <nut-tab class="tabs" @tab-switch="tabSwitch"  position-nav="top">
            <nut-tab-panel v-for="(tab, index) in tabs" :key="index" :tab-title="tab.label">

                <nut-checkbox class="checkbox" v-model="checkbox">只看我的</nut-checkbox>

                <div class="content">
                    <nut-row class="title">
                        <nut-col :span="4">排名</nut-col>
                        <nut-col :span="16">学员</nut-col>
                        <nut-col :span="4">学时</nut-col>
                    </nut-row>

                    <nut-row class="list" v-for="(list, index) in lists" :key="index">
                        <nut-col :span="4">{{ list.index }}</nut-col>
                        <nut-col :span="16">{{ list.name }}</nut-col>
                        <nut-col :span="4"> {{ list.time }}</nut-col>
                    </nut-row>
                </div>
            </nut-tab-panel>
        </nut-tab>

        <nut-tab @tab-switch="tabSwitch">
            <nut-tab-panel tab-title="页签1">页签1</nut-tab-panel>
            <nut-tab-panel tab-title="页签2">页签2</nut-tab-panel>
            <nut-tab-panel tab-title="页签3">页签3</nut-tab-panel>
        </nut-tab>

        <custom-tab-bar class="tab-bar" :selected="'student'"/>
    </div>
</template>

<script>
// 学员
import Vue from 'vue'
import CustomTabBar from '../../custom-tab-bar/index.vue'

export default Vue.extend({
  name: 'Student',
  components: {
    CustomTabBar
  },
  data() {
    return {
      tabs: [{ label: '学时排名' }, { label: '学员统计' }],
      checkbox: false,
      lists: []
    }
  },
  created() {
    this.lists =
      [{ index: '001', name: '王刚', time: '5900' },
        { index: '002', name: '刘群', time: '4522' },
        { index: '003', name: '张数', time: '3922' },
        { index: '004', name: '陈少', time: '2000' }]
  },
  methods: {
    tabSwitch(index, event) {
      console.log(`${index}--${event.target}`)
    }
  }
})
</script>

<style lang="less">
    .content {
        margin-top: 10px;
        .row {
            margin-top: 30px;
        }
        .title {
           color: #888888;
            font-size: 14px;
        }
        .list {
            margin-top: 5px;
        }
    }
    .nut-tab-item {
        height: 100%;
    }

</style>
