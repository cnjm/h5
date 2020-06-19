<template>
  <div class="login">
    <GoBack :msg="navMsg" @goBackLeft="goBackLeft" @goBackRight="goBackRight"></GoBack>
    <div class="con">
      <van-cell-group>
        <van-field
          v-model="username"
          label="账号"
          left-icon="user-o"
          right-icon="question-o"
          clearable
          placeholder="请输入您的用户名/邮箱"
        />
        <van-field
          v-model="password"
          clearable
          label="密码"
          type="password"
          left-icon="bag-o"
          right-icon="closed-eye"
          placeholder="请输入密码"
        />
      </van-cell-group>

      <div class="con_bottom">
        <van-button @click="toRegister" plain type="primary" color="#FF9800">注册账号</van-button>
        <van-button type="primary" color="#FF9800">立即登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Field, CellGroup, Button } from "vant";
import GoBack from "@/components/GoBack.vue";
import { subPage } from "@/base/js/mixins.js";

export default {
  name: "Login",

  mixins: [subPage],

  components: {
    GoBack,
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
    toRegister: function() {
      this.$router.push({ name: "Register", params: {} });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../base/css/mixin.less";
.login {
  .page_pos();

  .con {
    width: 325px;
    font-size: @font_size_medium;
    .center(translate);
    position: fixed;
    /deep/ .van-field__label {
      width: 60px;
    }
    .con_bottom {
      margin-top: 40px;
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>