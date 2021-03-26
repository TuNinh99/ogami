<template>
  <div class="shop">
    <div class="shop__container container">
      <div class="shop__container-breadcumbs">
        <breadcumbs />
      </div>
      <div class="shop__container-main">
        <div class="main__sidebar">
          <sidebar />
        </div>
        <div class="main__content">
          <top-content-shop />
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcumbs from "@/components/Breadcumbs.vue";
import Sidebar from "@/components/Sidebar.vue";
import TopContentShop from "@/components/shop/TopContentShop.vue";

export default {
  name: "shop",
  components: {
    Breadcumbs,
    Sidebar,
    TopContentShop,
  },
  async created() {
    const data = await fetch(
      "https://ogami-shop-default-rtdb.firebaseio.com/food.json"
    ).then((response) => response.json());
    this.$store.state.foods = data;
  },
};
</script>

<style>
</style>