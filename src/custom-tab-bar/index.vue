<template>
    <div class='tabBar'>
        <ul>
            <li @click="go(item.path, selected)"
                :class="{active:selected === item.path}"
                v-for="(item,index) in tabs" :key="index">
                <img :src="selected === item.path?item.icon_active:item.icon" alt="">
                {{item.title}}
            </li>
        </ul>
    </div>
</template>

<script>
// tab-bar
import Vue from 'vue'


export default Vue.extend({
  name: 'TabBar',
  components: { },
  props: {
    selected: {
      type: String,
      default: 'home'
    }
  },
  data() {
    return {
      tabs: [
        { title: '首页',
          path: 'home',
          icon: 'https://chuantu.xyz/t6/728/1586506370x3752237043.png',
          icon_active: 'https://chuantu.xyz/t6/728/1586503882x2890211933.png' },
        { title: '培训',
          path: 'training',
          icon: 'https://chuantu.xyz/t6/728/1586504092x3752237043.png',
          icon_active: 'https://chuantu.xyz/t6/728/1586504118x2362407012.png' },
        { title: '学员',
          path: 'student',
          icon: 'https://chuantu.xyz/t6/728/1586504138x2362407012.png',
          icon_active: 'https://chuantu.xyz/t6/728/1586504153x2362407012.png' },
        { title: '我的',
          path: 'mine',
          icon: 'https://chuantu.xyz/t6/728/1586506564x3752237043.png',
          icon_active: 'https://chuantu.xyz/t6/728/1586506544x3752237043.png' }
      ]
    }
  },
  methods: {
    go(url, selected) {
      if (url !== selected) {
        this.$router.push(`/${url}`)
      }
    }
  }
})
</script>

<style lang="less">
    .tabBar {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 3.3rem;
        ul {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            background-color: #fff;
            li {
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 100%;
                text-align: center;
                // padding: 7px 0;
                border-top: 1px solid #eaeaea;
                font-size: 10px;
                img {
                    width: 1rem;
                    height: 1rem;
                    margin: 5px auto 0;
                }
                &.active {
                    color: #ff5621;
                    font-weight: bold;
                }
            }
        }
    }
</style>
