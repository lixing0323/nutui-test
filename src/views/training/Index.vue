<template>
    <div>
        <nut-tab class="tabs" @tab-switch="tabSwitch"  position-nav="top">
            <nut-tab-panel v-for="(tab, index) in tabs" :key="index" :tab-title="tab.label">
                <div class="search">
                    <nut-textinput  class="my-input" type="search" v-model="search"
                                    placeholder="请输入搜索内容" ref="myInput" @keyup.enter="onSearch" />
                    <nut-button type="primary" class="searchBtn" @click="onSearch">搜索</nut-button>
                </div>

                <nut-checkbox class="checkbox" v-model="checkbox">只看我的</nut-checkbox>

                <div class="content">
                    <nut-row class="row">4月15日  周三  13:30-17:30</nut-row>
                    <nut-row>设备保全科-四杆机构原理</nut-row>
                    <nut-row>已报名：30人  教室：一厂机电实验室</nut-row>

                    <nut-row class="row">4月15日  周三  13:30-17:30</nut-row>
                    <nut-row>设备保全科-四杆机构原理</nut-row>
                    <nut-row>已报名：30人  教室：一厂机电实验室</nut-row>
                </div>
            </nut-tab-panel>
        </nut-tab>
        <custom-tab-bar class="tab-bar" :selected="'training'"/>
    </div>
</template>

<script>
// 培训
import Vue from 'vue'
import CustomTabBar from '../../custom-tab-bar/index.vue'

export default Vue.extend({
  name: 'Training',
  components: {
    CustomTabBar
  },
  data() {
    return {
      tabs: [{ label: '未上课程' }, { label: '已上课程' }, { label: '所有课程' }],
      search: '',
      checkbox: false
    }
  },
  methods: {
    tabSwitch(index, event) {
      console.log(`${index}--${event.target}`)
    },
    onSearch() {
    }
  }
})
</script>

<style lang="less">
    .search{
        background: #fff;
        padding-bottom: 10px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        .my-input{
            flex: 1;
        }
        .searchBtn{
            margin-left: 10px;
        }
    }
    .content {
        .row {
            margin-top: 30px;
        }
    }
    .nut-tab-item {
        height: 100%;
    }
</style>
