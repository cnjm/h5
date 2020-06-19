import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: {
      name: "Home"
    }
  }, // 重定向到主页
  {
    path: '*',
    redirect: {
      name: "Home"
    }
  }, //全不匹配的情况下，返回主页
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '示例'
    },
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/user.vue'),
    meta: {
      title: '我的',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/user/Login.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/user/Register.vue'),
    meta: {
      title: '注册',
    },
  },
  {
    path: '/fire',
    name: 'Fire',
    component: () => import('../views/Fire.vue'),
    meta: {
      title: '热门',
    },
  },
  {
    path: '/pokegame',
    name: 'PokeGame',
    component: () => import('../views/fire/PokeGame.vue'),
    meta: {
      title: 'poke',
      socket: true
    },
  }
]

const router = new VueRouter({
  routes
})

export default router
