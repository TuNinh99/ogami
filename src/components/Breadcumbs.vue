<template>
  <div class="breadcumbs">
    <div class="breadcumbs__container container">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">
          <i class="fas fa-home"></i>Home</el-breadcrumb-item
        >
        <el-breadcrumb-item
          :class="{
            content__item: true,
            active: this.$store.state.breadcrumbs.length < 2,
          }"
          v-if="
            this.$store.state.breadcrumbs.length < 2 &&
            this.$store.state.breadcrumbs[0] !== 'home'
          "
          >{{ this.$store.state.breadcrumbs[0] }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
export default {
  name: "breadcumbs",
};
</script>

