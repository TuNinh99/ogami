<template>
  <div class="product-item">
    <div class="wraper" style="margin-bottom: 1.75em">
      <div
        class="product__container container"
        style="border: none"
        v-if="this.$store.state.item !== null"
      >
        <div class="product__container-images">
          <div class="images__main">
            <img :src="getImagesItem()[this.slide_item]" alt="" />
          </div>
          <div class="images__slide">
            <div
              :class="{
                'images__slide-item': true,
                show: index === 0 ? true : false,
              }"
              v-for="(item, index) in getImagesItem()"
              :key="index"
              @click.prevent="handleShowImage(index)"
            >
              <img :src="item" alt="" />
            </div>
          </div>
        </div>
        <div class="product__container-content" style="text-align: left">
          <h6>
            {{ getItem().type }}
          </h6>
          <h2>
            {{ getItem().name }}
          </h2>
          <p>{{ getItem().origin }}</p>
          <div class="content__delivery">Free delivery</div>
          <div class="content__main">
            <div class="content__main-price">
              <del
                ><span v-if="getItem().price !== getItem().sale"
                  >{{ getItem().sale }} US$</span
                >
              </del>
              <h5>
                {{ getItem().price }}
                <span>US$ / {{ getItem().unit }}</span>
              </h5>
              <el-rate v-model="rateValue"></el-rate>
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
                  Number(getItem().price) * this.quantity +
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
            <button class="content__btn-buy" @click.prevent="handleBuyNow">
              buy now
            </button>
          </div>
          <div class="content__share">
            <span class="content__share-title">Share link: </span>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-pinterest-p"></i></a>
          </div>
        </div>
      </div>
      <div class="error" v-else>Dont't find your product</div>
    </div>
    <div class="detail">
      <ul class="detail__redirect">
        <li
          class="detail__redirect-tab active"
          @click.prevent="selectContent(0)"
        >
          description
        </li>
        <li
          class="detail__redirect-tab tab-center"
          @click.prevent="selectContent(1)"
        >
          nutrition
        </li>
        <li class="detail__redirect-tab" @click.prevent="selectContent(2)">
          review
        </li>
      </ul>
      <div class="detail__content">
        <div class="detail__content-item show">{{ getItem().description }}</div>
        <div class="detail__content-item">
          <p>Nutrients in 100 grams</p>
          <table>
            <tbody>
              <tr v-for="(item, index) in getNutrition().keys" :key="index">
                <td>{{ getNutrition().keys[index] }}</td>
                <td>{{ getNutrition().values[index] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="detail__content-item">{{ getItem().description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "the-product",
  data() {
    return {
      products: null,
      item: null,
      slide_item: 0,
      quantity: 1,
      delivery: 0,
      images: [],
      rateValue: 4,
    };
  },
  methods: {
    images_item(item) {
      return Object.values(item.images);
    },
    getItem() {
      return this.$store.state.item;
    },
    getImagesItem() {
      return Object.values(this.$store.state.item.images);
    },
    getNutrition() {
      return {
        keys: Object.keys(this.getItem().nutrition || {}),
        values: Object.values(this.getItem().nutrition || {}),
      };
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
    selectContent(index) {
      const tabs = document.querySelectorAll(".detail__redirect-tab");
      const contents = document.querySelectorAll(".detail__content-item");

      for (let i = 0; i < tabs.length; i++) {
        if (i === index) {
          tabs[i].classList.add("active");
          contents[i].classList.add("show");
        } else {
          tabs[i].classList.remove("active");
          contents[i].classList.remove("show");
        }
      }
    },
    handleBuyNow() {
      this.handleAddCart();
      this.$router.push({ name: "cart" });
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
      const product = this.$store.state.item;
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
          this.showMessage("shopping cart is already");
          this.$store.state.typeMessage = "error";
        }
        this.$store.state.amount = listProducts.length;
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
      }, 2500);
    },
  },
  created() {
    this.$store.state.breadcrumbs[0] = "product";
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