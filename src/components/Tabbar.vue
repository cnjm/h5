<template>
  <div class="tabbar">
    <van-tabbar v-model="router" @change="onChange" active-color="#FF9800" inactive-color="#757575">
      <van-tabbar-item replace name="Home" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item replace name="Fire" icon="fire">热门</van-tabbar-item>
      <van-tabbar-item replace name="User" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  name: "myBabbar",
  props: {
    active: String
  },
  data() {
    return {
      // transitionName: "slide",
      router: "Home"
    };
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  created() {
  },
  activated () {
    this.router = this.$route.name;
  },
  methods: {
    onChange(name) {
      this.$router.push({ name, params: {} });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../base/css/variable.less";
.tabbar {
}
</style>
