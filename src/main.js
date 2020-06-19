import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'
import socketio from 'socket.io-client';

// 公共样式
import './base/css/index.less'
//rem
import 'amfe-flexible'
import {
  socketadress
} from "@/request/api.js";




//路由守卫
router.beforeEach((to, from, next) => {

  // 判断是否有标题 有就更改标题
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = "web";
  }

  if (to.meta.socket) {
    Vue.use(new VueSocketIO({
      debug: true,
      connection: socketio(socketadress) //xxx填后台给的socket地址，端口号根据实际后台端口写
    }));
  }

  if (to.meta.requireAuth) {
    if (store.state.userId) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//判断开发坏境
if (process.env.NODE_ENV == "development") {
  Vue.config.devtools = true;
  Vue.config.productionTip = true;

} else {
  Vue.config.productionTip = false;
  Vue.config.devtools = false;
}

// Vue.use(VueSocketIO, socketio(socketadress));
