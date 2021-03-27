<template>
  <div class="services">
    <div class="container">this is services</div>
  </div>
</template>

<script>
export default {
  name: "services",
  created() {
    this.$store.state.breadcrumbs[0] = "/ services";
  },
};
</script>

