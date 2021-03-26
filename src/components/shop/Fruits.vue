<template>
  <div class="fruits">
    <div class="wraper row" v-if="filterFruits().length !== 0">
      <div
        class="col-12 col-sm-6 col-md-4"
        v-for="food in sortProducts()"
        :key="food.id"
        :id="food.id"
        @click.prevent="sendFood(food)"
      >
        <router-link :to="{ name: 'products', params: {name: food.name}}">
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
            <div class="item__select">
              <button class="item__select-wishlist">
                <i class="far fa-heart"></i>
                <div class="wishlist__tooltip">Add to wishlist</div>
              </button>
              <button class="item__select-card">
                <i class="fas fa-shopping-bag"></i>
                <div class="card__tooltip">Add to card</div>
              </button>
              <button
                class="item__select-view"
                @click.prevent="handleQuickView(food)"
              >
                <i class="far fa-eye"></i>
                <div class="view__tooltip">Quick view</div>
              </button>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="nothing" v-else>
      <h6>
        These products have not been sold yet. <br />
        Please look for another product. Thank you!
      </h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "fruits",
  data() {
    return {
      products: null,
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
    async callProducts() {
      const data = await fetch(
        "https://ogami-shop-default-rtdb.firebaseio.com/food.json"
      ).then((response) => response.json());
      return data;
    },
    getProducts() {
      return this.$store.state.foods !== null
        ? this.$store.state.foods
        : this.callProducts();
    },
    filterFruits() {
      const products = Object.values(this.products || {});
      const fruits = products.filter((food) => food.type === "fruit");
      return fruits;
    },
    sortProducts() {
      const modeSort = this.$store.state.sort;
      const fruits = this.filterFruits();
      if (modeSort === "a to z") {
        fruits.sort((a, b) => {
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
          fruits.sort((a, b) => {
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
            fruits.sort((a, b) => b.price - a.price);
          } else {
            if (modeSort === "low to hight price") {
              fruits.sort((a, b) => a.price - b.price);
            }
          }
        }
      }
      return fruits;
    },
    sendFood(food) {
      this.$store.state.item = food;
    },
  },
  async created() {
    const data = await fetch(
      "https://ogami-shop-default-rtdb.firebaseio.com/food.json"
    ).then((response) => response.json());
    this.products = data;
  },
};
</script>