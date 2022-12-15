import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
  {
    path: "/HelloWorld",
    component: () => import("../components/HelloWorld.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
