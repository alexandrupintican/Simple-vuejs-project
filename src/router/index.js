import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/adultswear",
    name: "adultswear",
    // route level code-splitting
    // this generates a separate chunk (chunkName.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "adultswear" */ "../views/Adultswear.vue")
  },
  {
    path: "/kidswear",
    name: "kidswear",
    // route level code-splitting
    // this generates a separate chunk (chunkName.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "kidswear" */ "../views/Kidswear.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;