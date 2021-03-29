<template>
  <div class="home" style="overflow-x: hidden">
    <the-header @toggleLayer="toggleLayer" />
    <router-view></router-view>
    <partner />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
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
    Partner,
  },
  methods: {
    toggleLayer() {
      this.showBodyLayer = !this.showBodyLayer;
    },
  },
  mounted() {
    const backTop = document.querySelector(".backTop");
    const options = document.querySelector(".options");
    window.addEventListener("scroll", () => {
      window.pageYOffset > 150
        ? backTop.classList.add("show")
        : backTop.classList.remove("show");

      window.pageYOffset > 400 && screen.width < 768
        ? options.classList.add("show")
        : options.classList.remove("show");
    });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  },
};
</script>

