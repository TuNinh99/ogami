<template>
  <div class="fastFood" v-loading="this.isLoading">
    <div class="wraper row" v-if="filterFastFood().length !== 0">
      <div
        class="col-6 col-md-4 item"
        v-for="(food, index) in sortProducts()"
        :key="food.id"
        :id="food.id"
        @click.prevent="sendFood(food)"
      >
        <div v-if="this.fromProduct <= index && this.toProduct >= index">
          <router-link :to="{ name: 'products', params: { name: food.name } }">
            <div class="wraper-item">
              <div class="item__image">
                <img :src="food.images.item1" alt="" />
              </div>
              <div class="item__type">
                <h6>{{ food.type }}</h6>
                <h3>{{ food.name }}</h3>
              </div>
              <div class="item__price">
                <h6>{{ food.price }} US$</h6>
                <del v-if="food.sale !== food.price">{{ food.sale }} US$</del>
              </div>
              <div
                :class="{
                  item__select: true,
                  'margin-top': food.sale !== food.price,
                }"
              >
                <button
                  class="item__select-wishlist"
                  @click.prevent="addWishList(food)"
                >
                  <i class="far fa-heart"></i>
                  <div class="wishlist__tooltip">Add to wishlist</div>
                </button>
                <button
                  class="item__select-card"
                  @click.prevent="handleAddCart(food)"
                >
                  <i class="el-icon-shopping-cart-2"></i>
                  <div class="card__tooltip">Add to card</div>
                </button>
                <button
                  class="item__select-view"
                  @click.prevent="handleQuickView(food)"
                >
                  <i class="el-icon-view"></i>
                  <div class="view__tooltip">Quick view</div>
                </button>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="nothing" v-else>
      <i class="el-icon-postcard"></i>
      <h6>
        These products have not been sold yet. <br />
        Please look for another product. Thank you!
      </h6>
    </div>
    <el-pagination
      background
      :page-size="this.pageSize"
      layout="prev, pager, next"
      :total="sortProducts().length"
      @current-change="setPage"
      style="text-align: center; margin-top: 1.5em"
      v-if="filterFastFood().length !== 0"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "bread",
  data() {
    return {
      products: null,
      isLoading: true,
      page: 1,
      pageSize: 6,
      fromProduct: 0,
      toProduct: 5,
    };
  },
  methods: {
    handleQuickView(food) {
      this.fixed();
      this.$store.state.product = food;
      this.$store.state.image = food.images.item1;
    },
    fixed() {
      const getBody = document.querySelector("body");
      getBody.classList.add("fixed");
    },
    filterFastFood() {
      const products = Object.values(this.products || {});
      const fastFood = products.filter((food) => food.type === "fast food");
      return fastFood;
    },
    sortProducts() {
      const modeSort = this.$store.state.sort;
      const fastFood = this.filterFastFood();
      if (modeSort === "a to z") {
        fastFood.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
      } else {
        if (modeSort === "z to a") {
          fastFood.sort((a, b) => {
            if (a.name < b.name) {
              return 1;
            }
            if (a.name > b.name) {
              return -1;
            }
            return 0;
          });
        } else {
          if (modeSort === "hight to low price") {
            fastFood.sort((a, b) => b.price - a.price);
          } else {
            if (modeSort === "low to hight price") {
              fastFood.sort((a, b) => a.price - b.price);
            }
          }
        }
      }
      return fastFood;
    },
    sendFood(food) {
      this.$store.state.item = food;
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
        disabled: false,
        id: product.id,
        name: product.name,
        image: product.images.item1,
        price: product.price,
        quantity: 1,
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
        this.showMessage("Shopping cart is already");
        this.$store.state.typeMessage = "error";
      }
    },
    setPage(val) {
      this.page = val;
      this.fromProduct = this.pageSize * this.page - this.pageSize;
      this.toProduct = this.pageSize * this.page - 1;
    },
  },
  async created() {
    const data = await fetch(
      "https://ogami-shop-default-rtdb.firebaseio.com/food.json"
    ).then((response) => response.json());
    this.products = data;
    this.isLoading = false;
  },
  mounted() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  },
};
</script>