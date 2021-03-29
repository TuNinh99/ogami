<template>
  <div class="services">
    <the-header />
    <div class="container">this is services</div>
    <the-footer />
  </div>
</template>

<script>
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";
export default {
  name: "services",
  components: { TheFooter, TheHeader },
  created() {
    this.$store.state.breadcrumbs[0] = "/ services";
  },
};
</script>

