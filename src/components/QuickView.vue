<template>
  <div
    :class="{
      product: true,
      enable: this.$store.state.product !== null ? true : false,
    }"
  >
    <div class="wraper">
      <div
        class="product__container container"
        v-if="this.$store.state.product !== null"
      >
        <div class="product__container-images">
          <div class="images__main">
            <img :src="this.$store.getters.images[this.slide_item]" alt="" />
          </div>
          <div class="images__slide">
            <div
              :class="{
                'images__slide-item': true,
                show: index === 0 ? true : false,
              }"
              v-for="(item, index) in this.$store.getters.images"
              :key="index"
              @click.prevent="handleShowImage(index)"
            >
              <img :src="item" alt="" />
            </div>
          </div>
        </div>
        <div class="product__container-content">
          <h6>
            {{ this.$store.state.product.type }}
          </h6>
          <h2>
            {{ this.$store.state.product.name }}
          </h2>
          <p>{{ this.$store.state.product.origin }}</p>
          <div class="content__delivery">Free delivery</div>
          <div class="content__main">
            <div class="content__main-price">
              <del
                ><span v-if="this.$store.getters.compare"
                  >{{ this.$store.state.product.price }} US$</span
                >
              </del>
              <h5>
                {{ this.$store.state.product.sale }}
                <span>US$ / {{ this.$store.state.product.unit }}</span>
              </h5>
              <ul class="price__rate">
                <li
                  :class="{
                    'price__rate-star': true,
                    active: this.rate[index],
                  }"
                  v-for="(star, index) in this.rate"
                  :key="index"
                  @click.prevent="handleRate(index)"
                >
                  <i class="fas fa-star"></i>
                </li>
              </ul>
            </div>
            <div class="content__main-quantity">
              <div
                class="quantity__number"
                contenteditable="true"
                @input="editNumber"
              >
                {{ this.quantity }}
              </div>
              <div class="quantity__controller">
                <button
                  :class="{
                    'quantity__controller-minus': true,
                    show: this.quantity <= 1 ? true : false,
                  }"
                  :disabled="this.quantity <= 1 ? true : false"
                  @click.prevent="this.quantity--"
                >
                  -
                </button>
                <button
                  class="quantity__controller-plus"
                  @click.prevent="this.quantity++"
                >
                  +
                </button>
              </div>
            </div>
            <div class="content__main-pay">
              Total:
              {{
                (
                  Number(this.$store.state.product.price) * this.quantity +
                  this.delivery
                ).toFixed(2)
              }}
              <span> US$</span>
            </div>
          </div>
          <div class="content__btn">
            <button class="content__btn-card" @click.prevent="handleAddCart">
              add to card
            </button>
            <router-link :to="{ name: 'cart' }">
              <button class="content__btn-buy" @click.prevent="handleAddCart">
                buy now
              </button>
            </router-link>
          </div>
          <div class="content__share">
            <span class="content__share-title">Share link: </span>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-pinterest-p"></i></a>
          </div>
        </div>
        <div
          class="product__container-close"
          @click.prevent="handleCloseQuickView"
        >
          <i class="fas fa-times"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "quick-view",
  data() {
    return {
      show: true,
      quantity: 1,
      delivery: 0,
      slide_item: 0,
      rate: [true, true, true, true, false],
    };
  },
  props: ["product"],
  methods: {
    editNumber(e) {
      this.quantity = Number(e.target.innerText);
    },
    handleRate(num) {
      for (let i = 0; i < this.rate.length; i++) {
        i <= num ? (this.rate[i] = true) : (this.rate[i] = false);
      }
    },
    handleCloseQuickView() {
      this.$store.state.product = null;
      this.$store.state.images = null;
      const getBody = document.querySelector("body");
      getBody.classList.remove("fixed");
    },
    setFirstImages() {
      return this.$store.state.product !== null
        ? this.$store.state.product.images.item1
        : null;
    },
    handleShowImage(index) {
      this.slide_item = index;
      const images = document.querySelectorAll(".images__slide-item");
      for (let i = 0; i < images.length; i++) {
        i === index
          ? images[i].classList.add("show")
          : images[i].classList.remove("show");
      }
    },
    handleAddCart() {
      if (localStorage.getItem("cart") === "") {
        const listProducts = [];
        this.addCart(listProducts);
      } else {
        const listProducts = JSON.parse(localStorage.getItem("cart"));
        this.addCart(listProducts);
      }
    },
    addCart(listProducts) {
      const product = this.$store.state.product;
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
          this.$store.state.typeMessage = 'success';
        } else {
          this.showMessage("Shopping cart is already");
          this.$store.state.typeMessage = 'error';
        }
        this.$store.state.amount = listProducts.length;
        this.caculateTotal(listProducts);
        const cart = JSON.stringify(listProducts);
        localStorage.setItem("cart", cart);
      }
    },
    inforProduct(product) {
      return {
        id: product.id,
        name: product.name,
        image: product.images.item1,
        price: product.price,
        quantity: this.quantity,
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
    caculateTotal(listProducts) {
      const total = listProducts.reduce((total, item) => {
        total = total + Number(item.quantity) * Number(item.price);
        return total;
      }, 0);
      this.$store.state.totalPay = total.toFixed(2);
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
      localStorage.setItem("cart", []);
    }
  },
};
</script>

