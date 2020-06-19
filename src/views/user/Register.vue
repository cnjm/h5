<template>
  <div class="register">
    <GoBack :msg="navMsg" @goBackLeft="goBackLeft" @goBackRight="goBackRight"></GoBack>
    <div class="con">
      <van-cell-group>
        <van-field
          v-model="username"
          label="用户名"
          left-icon="user-o"
          right-icon="question-o"
          clearable
          clickable
          placeholder="请输入您的用户名"
          @click-right-icon="showtips('用户名只能包含(字母，数字，下划线，减号),且为4到16位')"
        />
        <van-field
          v-model="email"
          label="邮箱"
          left-icon="free-postage"
          right-icon="question-o"
          clearable
          clickable
          placeholder="请输入您的邮箱"
          @click-right-icon="showtips('请填写真实有效的邮箱地址，以进行注册校验')"
        />
        <van-field
          v-model="password"
          clearable
          clickable
          label="密码"
          type="password"
          left-icon="bag-o"
          right-icon="closed-eye"
          placeholder="请输入密码"
          @click-right-icon="showpass()"
        />
      </van-cell-group>

      <div class="con_bottom">
        <!-- <van-button @click="toLogin()" plain type="primary" color="#FF9800">前往登录</van-button> -->
        <van-button @click="register()" type="primary" color="#FF9800">立即注册</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Field, CellGroup, Button, Toast } from "vant";
import GoBack from "@/components/GoBack.vue";
import { subPage } from "@/base/js/mixins.js";

import { userSendemail } from "@/request/api.js";

export default {
  name: "Register",

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
        title: "注册",
        ltips: "返回"
        // rtips: "首页"
      },
      username: "",
      password: "",
      email: ""
    };
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {
    register: function() {
      userSendemail({
        username: this.username,
        password: this.password,
        email: this.email
      }).then(res => {
        if (res.code == "1") {
          Toast(res.msg);
        } else {
          Toast(res.msg);
        }
      });
    },
    toLogin: function() {
      this.$router.push({ name: "Login", params: {} });
    },
    showtips: function(msg) {
      Toast(msg);
    },
    showpass:function(){
      
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../base/css/mixin.less";
.register {
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