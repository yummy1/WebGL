import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '../components/Layout.vue'
import Home from '../views/home.vue'
import DrawPoint from '../views/drawpoint.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: Layout,
        redirect: '/home',
        children: [
          {
            path: '/home',
            component: Home,
            meta: {title: '首页'}
          }
        ]
      },
      {
        path: "/point",
        component: Layout,
        children: [
          {
            path: '/',
            component: DrawPoint,
            meta: {title: 'WebGL实现绘制点'}
          }
        ]
      }
];

const router = new VueRouter({
  mode: "hash",
  // base: process.env.BASE_URL,
  routes
});

export default router;