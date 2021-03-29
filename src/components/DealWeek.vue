<template>
  <div class="products">
    <div class="container">
      <div class="products__top">
        <h2>Deal of the week</h2>
        <div class="products__top-border"></div>
        <ul class="products__top-nav">
          <li class="nav__item active" @click="handleProductsWeek">all</li>
          <li class="nav__item" @click="handleProductsWeek">fruit</li>
          <li class="nav__item" @click="handleProductsWeek">vegetables</li>
          <li class="nav__item" @click="handleProductsWeek">bread</li>
          <li class="nav__item" @click="handleProductsWeek">fast food</li>
          <li class="nav__item" @click="handleProductsWeek">juice</li>
        </ul>
      </div>
      <div class="products__wraper row" v-if="!this.blank">
        <div
          class="col-6 col-md-4 col-lg-3 item"
          v-for="(product, index) in this.$store.state.valueFilter"
          :key="index"
          :id="product.id"
          @click.prevent="goProductDetail(product)"
        >
          <div class="products__wraper-item" v-if="index < 4">
            <router-link
              :to="{ name: 'products', params: { name: product.name } }"
            >
              <div class="item__image">
                <img :src="product.images.item1" alt="" />
              </div>
              <div class="item__type">
                <h6>{{ product.type }}</h6>
                <h3>{{ product.name }}</h3>
              </div>
              <div class="item__price">
                <h6>{{ product.price }} US$</h6>
                <del v-if="product.sale !== product.price"
                  >{{ product.sale }} US$</del
                >
              </div>
              <div
                :class="{
                  item__select: true,
                  'margin-top': product.sale !== product.price,
                }"
              >
                <button
                  class="item__select-wishlist"
                  @click.prevent="addWishList(product)"
                >
                  <i class="far fa-heart"></i>
                  <div class="wishlist__tooltip">Add to wishlist</div>
                </button>
                <button
                  class="item__select-card"
                  @click.prevent="handleAddCart(product)"
                >
                  <i class="el-icon-shopping-cart-2"></i>
                  <div class="card__tooltip">Add to card</div>
                </button>
                <button
                  class="item__select-view"
                  @click.prevent="handleQuickView(product)"
                >
                  <i class="far fa-eye"></i>
                  <div class="view__tooltip">Quick view</div>
                </button>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="products__blank" v-else>
        <blank-product />
      </div>
    </div>
  </div>
</template>

<script>
import BlankProduct from "./BlankProduct.vue";
export default {
  components: { BlankProduct },
  name: "deal-week",
  data() {
    return {
      blank: false,
    };
  },
  methods: {
    goProductDetail(product) {
      this.$store.state.item = product;
    },
    handleQuickView(product) {
      this.fixed();
      this.$store.state.product = product;
      this.$store.state.image = product.images.item1;
    },
    fixed() {
      const getBody = document.querySelector("body");
      getBody.classList.add("fixed");
    },
    handleProductsWeek(e) {
      this.isActive(e.target);
      this.blank = false;
      let routerValue = e.target.innerText.toLowerCase();

      this.$store.state.valueFilter = this.$store.state.products;
      const values = Object.values(this.$store.state.valueFilter);

      if (routerValue !== "all") {
        const filter = values.filter((value) => value.type === routerValue);
        if (filter.length !== 0) {
          this.$store.state.valueFilter = filter;
        } else {
          this.blank = true;
        }
      } else {
        const products = this.$store.state.products;
        this.$store.state.valueFilter = this.filterProducts(products);
      }
    },
    isActive(el) {
      const navItem = document.querySelectorAll(".nav__item");
      for (let i = 0; i < navItem.length; i++) {
        navItem[i].classList.remove("active");
      }
      el.classList.add("active");
    },
    filterProducts(data) {
      const values = Object.values(data);
      const newValues = values.sort((a, b) => b.transaction - a.transaction);
      const result = [];
      newValues.map((value) => {
        result.push(value);
      });
      return result;
    },
    handleAddCart(product) {
      if (localStorage.getItem("cart").length === 0) {
        const listProducts = [];
        this.addCart(listProducts, product);
      } else {
        const listProducts = JSON.parse(localStorage.getItem("cart"));
        this.addCart(listProducts, product);
      }
    },
    addCart(listProducts, product) {
      let check = 0;
      if (localStorage.getItem("cart") !== "") {
        listProducts.map((item) => {
          if (item.id !== product.id) {
            check++;
          }
        });
        if (check === listProducts.length) {
          listProducts.push(this.inforProduct(product));
          this.showMessage("Product added to cart");
          this.$store.state.typeMessage = "success";
        } else {
          this.showMessage("Shopping cart is already");
          this.$store.state.typeMessage = "error";
        }
        this.$store.state.amount = listProducts.length;
        const cart = JSON.stringify(listProducts);
        localStorage.setItem("cart", cart);
        this.caculateTotal(listProducts);
      }
    },
    inforProduct(product) {
      return {
        id: product.id,
        name: product.name,
        image: product.images.item1,
        price: product.price,
        quantity: 1,
        disabled: false,
      };
    },
    showMessage(message) {
      this.$store.state.message = message;
      this.$store.state.showMessage = !this.$store.state.showMessage;
      setTimeout(() => {
        this.$store.state.showMessage = !this.$store.state.showMessage;
        this.handleCloseQuickView();
      }, 2000);
    },
    handleCloseQuickView() {
      this.$store.state.product = null;
      this.$store.state.images = null;
      const getBody = document.querySelector("body");
      getBody.classList.remove("fixed");
    },
    caculateTotal(listProducts) {
      const total = listProducts.reduce((total, item) => {
        total = total + Number(item.quantity) * Number(item.price);
        return total;
      }, 0);
      this.$store.state.totalPay = total.toFixed(2);
    },
    addWishList(product) {
      let is_checked = 0;
      let storeWishlist = JSON.parse(localStorage.getItem("wishlist"));
      storeWishlist.map((item) => {
        if (item.id !== product.id) {
          is_checked++;
        }
      });
      if (is_checked === storeWishlist.length) {
        storeWishlist.push(this.inforProduct(product));
        localStorage.setItem("wishlist", JSON.stringify(storeWishlist));
        this.showMessage("Product added to wishlist");
        this.$store.state.typeMessage = "success";
        this.$store.state.amountWishlist = storeWishlist.length;
      } else {
        this.showMessage("Product was in wishlist");
        this.$store.state.typeMessage = "error";
      }
    },
  },
  async created() {
    const data = await fetch(
      "https://ogami-shop-default-rtdb.firebaseio.com/food.json"
    ).then((response) => response.json());
    this.$store.state.products = data;
    this.$store.state.valueFilter = this.filterProducts(data);
    this.$store.state.foods = data;
  },
};
</script>
