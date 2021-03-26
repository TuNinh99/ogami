<template>
  <div class="Detail">
    <banner />
    <categories />
    <deal-week />
    <introduction />
    <about-products />
    <countdown />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Categories from "@/components/Categories.vue";
import DealWeek from "@/components/DealWeek.vue";
import Introduction from "@/components/Introduction.vue";
import AboutProducts from "@/components/AboutProducts.vue";
import Countdown from "@/components/Countdown.vue";

export default {
  name: "detail",
  components: {
    Banner,
    Categories,
    DealWeek,
    Introduction,
    AboutProducts,
    Countdown,
  },
};
</script>