<template>
  <div class="user">
    <van-button type="primary" @click="toLogin">立即登录</van-button>
    <myBabbar></myBabbar>
  </div>
</template>

<script>
import { Field, CellGroup, Button } from "vant";
import myBabbar from "@/components/Tabbar.vue";
import { subPage } from "@/base/js/mixins.js";

export default {
  name: "User",

  mixins: [subPage],

  components: {
    myBabbar,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button
  },

  props: {},

  data() {
    return {
      navMsg: {
        title: "登录",
        ltips: "返回"
        // rtips: "首页"
      },
      username: "",
      password: ""
    };
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {
    toLogin: function() {
      this.$router.push({ name: "Login", params: {} });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../base/css/mixin.less";
.user {
}
</style>