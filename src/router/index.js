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
            path: "products",
            name: "products",
            component: () => import( /*webpackChunkName: "Products" */ "@/components/products/Products.vue"),
            children: [{
              path: "products/:name",
              name: "products",
              component: () => import( /*webpackChunkName: "Products" */ "@/components/products/Products.vue"),
            }, ]
          },
        ],
        meta: {
          breadcrumb: 'Shop',
        },
      },
      {
        path: "cart",
        name: "cart",
        component: () => import( /*webpackChunkName: "TheCart" */ "@/components/TheCart.vue"),
        meta: {
          breadcrumb: 'Cart',
        },
      },
      {
        path: "checkout",
        name: "checkout",
        component: () => import( /*webpackChunkName: "Checkout" */ "@/components/Checkout.vue"),
        meta: {
          breadcrumb: 'Checkout',
        },
      },
      {
        path: "completed",
        name: "completed",
        component: () => import( /*webpackChunkName: "Completed" */ "@/components/Completed.vue"),
        meta: {
          breadcrumb: 'completed',
        },
      },
      {
        path: "contact",
        name: "contact",
        component: () => import( /*webpackChunkName: "Contact" */ "@/components/Contact.vue"),
        meta: {
          breadcrumb: 'contact',
        },
      },
      {
        path: "about",
        name: "about",
        component: () => import( /*webpackChunkName: "About" */ "@/components/About.vue"),
        meta: {
          breadcrumb: 'about',
        },
      },
      {
        path: "login",
        name: "login",
        component: () => import( /*webpackChunkName: "Login" */ "@/components/Login.vue"),
        meta: {
          breadcrumb: 'login',
        },
      },
      {
        path: "register",
        name: "register",
        component: () => import( /*webpackChunkName: "Register" */ "@/components/Register.vue"),
        meta: {
          breadcrumb: 'register',
        },
      },
      {
        path: "services",
        name: "services",
        component: () => import( /*webpackChunkName: "Services" */ "@/components/Services.vue"),
        meta: {
          breadcrumb: 'services',
        },
      },
    ],
    meta: {
      breadcrumb: 'Home',
    },
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