<template>
  <div class="fire">
    <div @click="toPage()">poke</div>

    <myBabbar></myBabbar>
  </div>
</template>

<script>
import { Field, CellGroup, Button } from "vant";
import myBabbar from "@/components/Tabbar.vue";
import { subPage } from "@/base/js/mixins.js";

export default {
  name: "Fire",

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
    toPage: function() {
      this.$router.push({ name: "PokeGame", params: {} });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../base/css/mixin.less";
.fire {
}
</style>