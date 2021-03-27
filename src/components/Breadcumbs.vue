<template>
  <div class="breadcumbs">
    <div class="breadcumbs__container container">
      <div class="breadcrumbs__container-content">
        <span class="content__item"> <i class="fas fa-home"></i> Home </span>
        <span
          :class="{
            content__item: true,
            active: this.$store.state.breadcrumbs.length < 2,
          }"
          v-if="
            this.$store.state.breadcrumbs.length < 2 &&
            this.$store.state.breadcrumbs[0] !== 'home'
          "
          >{{ this.$store.state.breadcrumbs[0] }}</span
        >
        <span
          :class="{
            content__item: true,
            active: this.$store.state.breadcrumbs.length < 3,
          }"
          v-if="this.$store.state.breadcrumbs.length < 3"
          >{{ this.$store.state.breadcrumbs[1] }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "breadcumbs",
};
</script>
