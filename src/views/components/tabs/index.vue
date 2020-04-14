<template>
    <div>
        <ul class="tab">
            <li class="tab-item"
                v-for="(tab, index) in tabs"
                :class="{selected: selected === index}"
                @click="changeTab($event, index)"
                :key="index">
                {{ tab }}
            </li>
        </ul>
    </div>
</template>

<script>

export default {
  name: 'Tabs',
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selected: 0
    }
  },
  methods: {
    changeTab(event, index) {
      this.selected = index
    }
  }
}
</script>

<style>
    .tab {
        padding: 10px;
    }

    .tab-item {
        display: inline-block;
        margin-bottom: 10px;
        font-size: 18px;
        width: 33%;
        border-radius: 5px;
        text-align: center;
    }

    .tab-item.selected {
        background: #3eaf7c;
        color: #fff;
    }
</style>
