import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: '/field/112'
  },
  {
    path: "/field/:id",
    name: "field",
    component: () => import(/* webpackChunkName: "field" */ '@/views/FieldTable.vue'),
}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
