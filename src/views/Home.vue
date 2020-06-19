<template>
  <div class="home">
    <myBabbar></myBabbar>
  </div>
</template>

<script>
// @ is an alias to /src

import { Button } from "vant";
import myBabbar from "@/components/Tabbar.vue";
import { test } from "@/request/api.js";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    myBabbar,
    [Button.name]: Button
  },
  created() {
    // test({
    //   course_section_id: 6,
    //   card_content: "棍",
    //   type: 0,
    //   array_file_id: []
    // }).then(res => {
    //   // 点击上报
    //   console.log(res);
    // });
    // register({
    //   username: "test0",
    //   password: "123465",
    //   email: "123456@qq.com"
    // }).then(res => {
    //   // 点击上报
    //   console.log(res);
    // });
  },
  mounted() {
    // this.$socket.emit("connect");
  },

  methods: {}
};
</script>
