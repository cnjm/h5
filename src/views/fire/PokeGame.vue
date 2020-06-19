<template>
  <div class="pokegame">
    <GoBack :msg="navMsg" @goBackLeft="goBackLeft" @goBackRight="goBackRight"></GoBack>

    <div class="testfield">
      <van-field
        v-model="message"
        rows="1"
        autosize
        :left-icon="lefticon"
        type="textarea"
        maxlength="50"
        placeholder="等待输入..."
      >
        <template #button>
          <van-button @click="onSend()" size="small" type="primary">发送</van-button>
        </template>
      </van-field>
    </div>
  </div>
</template>

<script>
import { Field, CellGroup, Button } from "vant";
import GoBack from "@/components/GoBack.vue";
import { subPage } from "@/base/js/mixins.js";

export default {
  name: "PokeGame",

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
        title: "test",
        ltips: "返回"
        // rtips: "首页"
      },
      username: "",
      password: "",
      message: "",
      lefticon: require("../../assets/images/yuyin.png") //左下标图片
    };
  },

  computed: {},
  sockets: {
    disconnect() {
      console.log("socket 断开连接了！"); // 监听socket断开
    },
    connect() {
      // 监听socket连接
      console.log("socket 已经连接了！");
    },
    // 监听事件
    msg_info(data) {
      console.log("执行服务端方法---------------");
    }
  },
  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {
    onSend: function() {
      let sendData = {
        type: "text",
        msg: "我点击发送"
      };
      this.$socket.emit("send", sendData, data => {
        console.log("执行回调数据：", data);
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../base/css/mixin.less";
.pokegame {
  .testfield {
    position: fixed;
    width: 100%;
    bottom: 0;
    /deep/ .van-field {
      background: #f7f7f7;
      display: flex;
    }
    /deep/ .van-icon {
      width: 34px;
      height: 34px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    /deep/ .van-field__body .van-field__control {
      background: #ffffff;
      padding: 5px 10px;
    }
  }
}
</style>