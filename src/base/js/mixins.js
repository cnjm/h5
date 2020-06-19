export const subPage = {
  methods: {
    goBackLeft: function () {
      if (window.history.length <= 1) {
        this.$router.push({
          name: "Home",
          params: {}
        });
        return false;
      } else {
        this.$router.go(-1);
      }
      //上面都没执行就说明卡在当前页不是最后一条， histroy记录数量大于1，又没有回退记录，只能返回首页，
      //如果上面都执行了 页面都跳走了，这个也就不用管了   
      //   setTimeout(() => {
      //     this.$router.push({
      //       name: "Home",
      //       params: {}
      //     });
      //   }, 1000)
    },
    goBackRight: function () {
      this.$router.push({
        name: "Home",
        params: {}
      });
    }
  }
};
