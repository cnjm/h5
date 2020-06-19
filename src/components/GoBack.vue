<template>
  <div class="goback">
    <van-nav-bar
      :title="msg.title"
      :left-text="msg.ltips"
      :right-text="msg.rtips"
      :left-arrow="msg.ltips?true:false"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
import { NavBar } from "vant";
export default {
  name: "GoBack",
  props: {
    msg: Object
  },
  components: {
    [NavBar.name]: NavBar
  },
  methods: {
    onClickLeft: function() {
      if (this.msg.ltips && this.msg.ltips != "") {
        this.$emit("goBackLeft", this.$route.path);
      }
    },
    onClickRight() {
      if (this.msg.rtips && this.msg.rtips != "") {
        this.$emit("goBackRight", this.$route.path);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../base/css/variable.less";
.goback {
  /deep/ .van-nav-bar__text,
  /deep/ .van-nav-bar .van-icon {
    color: @textPrimaryColor;
  }
  /deep/ .van-nav-bar__title {
    color: @accentColor;
  }
}
</style>
