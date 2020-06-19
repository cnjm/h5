<template>
  <div id="app">
    <div id="con">
      <!-- <transition :name="transitionName"> -->
      <keep-alive>
        <!-- <router-view /> -->
        <router-view></router-view>
      </keep-alive>
      <!-- </transition> -->
    </div>
    <!-- <div id="tabbar" v-show="$route.meta.navShow">
      
    </div>-->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "app",
  data() {
    return {
      // transitionName: "slide",
    };
  },
  components: {},
  created() {},
  methods: {},
  watch: {}
};
</script>

<style lang="less">
// 过渡动画
.slide-enter {
  transform: scale(0);
  opacity: 0.5;
}
.slide-enter-active {
  animation: slide-enter 0.4s reverse;
}
.slide-enter-to {
}
.slide-leave {
}
.slide-leave-active {
}
.slide-leave-to {
}
@keyframes slide-enter {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(0);
    opacity: 1;
  }
}
#app {
  text-align: center;
  color: #2c3e50;
  position: relative;
  #con {
  }
  #tabbar {
    // background: brown;
  }
}
</style>
