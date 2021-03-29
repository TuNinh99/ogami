<template>
  <router-view to="/"> </router-view>
  <quick-view />
  <el-alert
    :title="this.$store.state.message"
    :type="this.$store.state.typeMessage"
    show-icon
    :class="{ show: this.$store.state.showMessage }"
  >
  </el-alert>
  <el-button
    type="success"
    icon="el-icon-top"
    circle
    class="backTop"
    @click.prevent="scrollToTop"
  ></el-button>

  <div class="options">
    <div class="options__toolbar">
      <div class="options__toolbar-item"><i class="el-icon-search"></i></div>
      <router-link
        :to="{ name: 'wish-list' }"
        class="options__toolbar-item item-bag"
        ><i class="far fa-heart" style="margin: 0.5em 0 0 -2px"></i>
        <div class="item__number">
          <span>{{ this.$store.state.amountWishlist }}</span>
        </div>
      </router-link>
      <router-link :to="{ name: 'cart' }" class="options__toolbar-item item-bag"
        ><i
          class="el-icon-shopping-cart-full"
          style="margin: 0.5em 0 0 -2px"
        ></i>
        <div class="item__number item-bag">
          <span>{{ this.$store.state.amount }}</span>
        </div>
      </router-link>
    </div>
  </div>
  <div :class="{ body__layer: this.showBodyLayer }"></div>
  <router-link :to="{ name: 'foods' }">
    <el-button
      type="danger"
      icon="el-icon-shopping-cart-2"
      circle
      class="mobileShop show"
    ></el-button>
  </router-link>
</template>
<script>
import QuickView from "@/components/QuickView.vue";
export default {
  components: { QuickView },
  data() {
    return {
      cart: [],
      wishlist: [],
      showBodyLayer: false,
    };
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
    setAmountWishList(wishlist) {
      let is_checked = 0;
      wishlist.map((item) => {
        if (item.disabled === true) {
          is_checked++;
        }
      });
      return wishlist.length - is_checked;
    },
    handleLocalStoreage(keyValue) {
      let check = 0;
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key !== keyValue) {
          check++;
        }
      }
      if (check === localStorage.length) {
        if (keyValue === "cart") {
          localStorage.setItem(keyValue, JSON.stringify(this.cart));
          this.$store.state.totalPay = 0;
          this.$store.state.totalPay = (0).toFixed(2);
        } else {
          localStorage.setItem(keyValue, JSON.stringify(this.wishlist));
          this.$store.state.amountWishlist = 0;
        }
      } else {
        if (keyValue === "cart") {
          this.cart = JSON.parse(localStorage.getItem("cart"));
          this.$store.state.totalPay = this.totalPay(this.cart);
        } else {
          this.wishlist = JSON.parse(localStorage.getItem(keyValue));
          this.$store.state.amountWishlist = this.setAmountWishList(
            this.wishlist
          );
        }
      }
    },
  },
  created() {
    this.handleLocalStoreage("cart");
    this.handleLocalStoreage("wishlist");
  },
};
</script>

