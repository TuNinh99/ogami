<template>
  <div class="home" style="overflow-x: hidden">
    <the-header @toggleLayer="toggleLayer" />
    <router-view></router-view>
    <partner />
    <the-footer />
    <quick-view />
    <div :class="{ message: true, show: this.$store.state.showMessage }">
      <div class="message__check">
        <i class="fas fa-check"></i>
      </div>
      <div class="message__infor">{{ this.$store.state.message }}</div>
    </div>
    <button class="backTop" @click.prevent="scrollToTop">
      <i class="fas fa-long-arrow-alt-up"></i>
    </button>
    <div class="options">
      <div class="options__toolbar">
        <div class="options__toolbar-item"><i class="fas fa-search"></i></div>
        <div class="options__toolbar-item"><i class="far fa-heart"></i></div>
        <router-link
          :to="{ name: 'cart' }"
          class="options__toolbar-item item-bag"
          ><i class="fas fa-shopping-bag"></i>
          <div class="item__number">
            <span>{{ this.$store.state.amount }}</span>
          </div>
        </router-link>
      </div>
    </div>
    <div :class="{ body__layer: this.showBodyLayer }"></div>
    <button class="mobileShop show">
      <router-link :to="{ name: 'foods'}">
        <i class="fas fa-cart-plus"></i>
      </router-link>
    </button>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import QuickView from "@/components/QuickView.vue";
import Partner from "@/components/Partner.vue";

export default {
  name: "Home",
  data() {
    return {
      cart: [],
      showBodyLayer: false,
    };
  },
  components: {
    TheHeader,
    TheFooter,
    QuickView,
    Partner,
  },
  methods: {
    totalPay(cart) {
      const total = cart.reduce((total, item) => {
        total = total + Number(item.quantity) * Number(item.price);
        return total;
      }, 0);
      return total.toFixed(2);
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    toggleLayer() {
      this.showBodyLayer = !this.showBodyLayer;
    },
  },
  created() {
    const keyValue = "cart";
    let check = 0;
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key !== keyValue) {
        check++;
      }
    }

    if (check === localStorage.length) {
      localStorage.setItem("cart", JSON.stringify(this.cart));
      this.$store.state.totalPay = 0;
      this.$store.state.totalPay = (0).toFixed(2);
    } else {
      this.cart = JSON.parse(localStorage.getItem("cart"));
      this.$store.state.totalPay = this.totalPay(this.cart);
    }
  },
  mounted() {
    const backTop = document.querySelector(".backTop");
    const options = document.querySelector(".options");
    window.addEventListener("scroll", () => {
      window.pageYOffset > 200
        ? backTop.classList.add("show")
        : backTop.classList.remove("show");

      window.pageYOffset > 500 && screen.width < 768
        ? options.classList.add("show")
        : options.classList.remove("show");
    });
  },
};
</script>

