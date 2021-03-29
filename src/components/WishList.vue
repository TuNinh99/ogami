<template>
  <div class="cart">
    <div class="cart__container container">
      <breadcumbs />
      <div class="cart__container-table" v-if="this.wishlist.length !== 0">
        <table>
          <colgroup>
            <col style="width: 9.375em" />
            <col style="width: 20%" />
            <col style="width: 25%" />
            <col style="width: 25%" />
            <col style="width: 10%" />
          </colgroup>
          <thead>
            <tr>
              <th>image</th>
              <th>product name</th>
              <th>price</th>
              <th>add to cart</th>
              <th>
                <button class="remove__btn" @click.prevent="removeAllWishlist">
                  <i class="el-icon-close"></i>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in this.wishlist" :key="index">
              <td class="table__img">
                <div class="table__img-wraper">
                  <img :src="item.image" alt="" />
                </div>
              </td>
              <td class="table__name">{{ item.name }}</td>
              <td class="table__price">
                <span>{{ item.price }}</span> US$
              </td>
              <td class="table__quantity">
                <el-button
                  :class="{
                    'el-button--success': !item.disabled,
                    'el-button--info': item.disabled,
                  }"
                  :disabled="item.disabled"
                  round
                  @click="addToCart(item)"
                  >Add to Cart</el-button
                >
              </td>
              <td class="table__remove">
                <button class="remove__btn" @click.prevent="removeItem(index)">
                  <i class="el-icon-close"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="cart__container-footer" v-if="this.wishlist.length !== 0">
        <router-link :to="{ name: 'foods' }">
          <el-button type="warning" round>continue shopping</el-button>
        </router-link>
      </div>
      <div class="cart__container-nothing" v-else>
        <i class="far fa-list-alt"></i>
        <h6>Nothing in your wish list</h6>
      </div>
    </div>
    <div :class="{ model: true, enable: this.stateNotify }">
      <div class="notify">
        <p>{{ this.contentNotify }}</p>
        <div class="notify__close" @click.prevent="cancelNotify">
          <i class="el-icon-close"></i>
        </div>
        <div class="notify__button">
          <button class="notify__button-cancel" @click.prevent="cancelNotify">
            Cancel
          </button>
          <button class="notify__button-ok" @click.prevent="removeItemCart">
            OK
          </button>
        </div>
      </div>
    </div>
    <div
      :class="{ layer: true, enable: this.stateNotify }"
      @click.prevent="cancelNotify"
    ></div>
  </div>
</template>

<script>
import Breadcumbs from "@/components/Breadcumbs.vue";
export default {
  components: { Breadcumbs },
  data() {
    return {
      wishlist: null,
      cart: null,
      stateNotify: false,
      contentNotify: null,
      indexItemRemove: null,
    };
  },
  name: "wish-list",
  methods: {
    removeAllWishlist() {
      this.contentNotify = "Are you sure to all products from wishlist";
      this.indexItemRemove = null;

      this.stateNotify = !this.stateNotify;
      this.manipulateClass("add", "body", "fixed");
    },
    removeItem(index) {
      this.contentNotify = "Are you sure to remove this product from wishlist";
      this.indexItemRemove = index;

      this.stateNotify = !this.stateNotify;
      this.manipulateClass("add", "body", "fixed");
    },
    cancelNotify() {
      this.manipulateClass("remove", "body", "fixed");
      this.stateNotify = !this.stateNotify;
    },
    removeItemCart() {
      this.manipulateClass("remove", "body", "fixed");
      this.stateNotify = !this.stateNotify;

      if (this.indexItemRemove === null) {
        this.wishlist.length = 0;
        localStorage.setItem("wishlist", JSON.stringify(this.wishlist));
      } else {
        this.wishlist.splice(this.indexItemRemove, 1);
        localStorage.setItem("wishlist", JSON.stringify(this.wishlist));
      }
      this.$store.state.amountWishlist = this.wishlist.length;
    },
    addToCart(product) {
      this.wishlist.map((item) => {
        if (item.id === product.id) {
          product.disabled = true;
        }
      });
      localStorage.setItem("wishlist", JSON.stringify(this.wishlist));
      this.$store.state.amountWishlist = this.setAmountWishList(this.wishlist);
      let check = 0;
      if (this.cart.length !== 0) {
        this.cart.map((item) => {
          if (item.id !== product.id) {
            check++;
          }
        });
        if (check === this.cart.length) {
          this.cart.push(product);
          this.showMessage("Product added to cart");
          this.$store.state.typeMessage = "success";
        } else {
          this.showMessage("Shopping cart is already");
          this.$store.state.typeMessage = "error";
        }
        this.$store.state.amount = this.cart.length;
        localStorage.setItem("cart", JSON.stringify(this.cart));
      } else {
        this.cart.push(product);
        localStorage.setItem("cart", JSON.stringify(this.cart));
        this.$store.state.amount = this.cart.length;
        this.showMessage("Product added to cart");
      }
    },
    showMessage(message) {
      this.$store.state.message = message;
      this.$store.state.showMessage = !this.$store.state.showMessage;
      setTimeout(() => {
        this.$store.state.showMessage = !this.$store.state.showMessage;
      }, 2000);
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
    manipulateClass(mode, selector, manipulateClass) {
      const element = document.querySelector(selector);
      if (mode === "add") {
        element.classList.add(manipulateClass);
      } else {
        element.classList.remove(manipulateClass);
      }
    },
  },
  created() {
    this.$store.state.stepActive == 0;
    this.wishlist = JSON.parse(localStorage.getItem("wishlist"));
    this.cart = JSON.parse(localStorage.getItem("cart"));
    this.$store.state.breadcrumbs[0] = "wishlist";
  },
  mounted() {
    window.scrollTo({
      top: 200,
      left: 0,
      behavior: "smooth",
    });
  },
};
</script>
