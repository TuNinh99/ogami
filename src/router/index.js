import {
  createRouter,
  createWebHistory
} from "vue-router";
import Home from "@/views/Home.vue";

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
    children: [{
        path: "",
        name: "detail",
        component: () => import( /*webpackChunkName: "Detail" */ "@/views/Detail.vue")
      },
      {
        path: "cart",
        name: "cart",
        component: () => import( /*webpackChunkName: "TheCart" */ "@/components/TheCart.vue"),
      },
      {
        path: "wish-list",
        name: "wish-list",
        component: () => import( /*webpackChunkName: "WishList" */ "@/components/WishList.vue"),
      },
      {
        path: "checkout",
        name: "checkout",
        component: () => import( /*webpackChunkName: "Checkout" */ "@/components/Checkout.vue"),
      },
      {
        path: "completed",
        name: "completed",
        component: () => import( /*webpackChunkName: "Completed" */ "@/components/Completed.vue"),
      },
    ],
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import( /*webpackChunkName: "Shop" */ "@/views/Shop.vue"),
    children: [{
        path: "foods",
        name: "foods",
        component: () => import( /*webpackChunkName: "Foods" */ "@/components/shop/Foods.vue"),
      },
      {
        path: "vegetables",
        name: "vegetables",
        component: () => import( /*webpackChunkName: "Vegetables" */ "@/components/shop/Vegetables.vue"),
      },
      {
        path: "fruits",
        name: "fruits",
        component: () => import( /*webpackChunkName: "Fruits" */ "@/components/shop/Fruits.vue"),
      },
      {
        path: "bread",
        name: "bread",
        component: () => import( /*webpackChunkName: "Bread" */ "@/components/shop/Bread.vue"),
      },
      {
        path: "fast-food",
        name: "fast-food",
        component: () => import( /*webpackChunkName: "FastFoods" */ "@/components/shop/FastFoods.vue"),
      },
      {
        path: ":name",
        name: "products",
        component: () => import( /*webpackChunkName: "TheProduct" */ "@/components/products/TheProduct.vue"),
      },
    ],
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import( /*webpackChunkName: "Contact" */ "@/components/Contact.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import( /*webpackChunkName: "About" */ "@/components/About.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import( /*webpackChunkName: "Login" */ "@/components/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import( /*webpackChunkName: "Register" */ "@/components/Register.vue"),

  },
  {
    path: "/services",
    name: "services",
    component: () => import( /*webpackChunkName: "Services" */ "@/components/Services.vue"),
  },
  {
    path: '/:path(.*)*',
    name: 'error',
    component: () => import( /*webpackChunkName: "ErrorPage" */ "@/views/ErrorPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
});

export default router;