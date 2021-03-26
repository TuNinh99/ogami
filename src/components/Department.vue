<template>
  <ul
    :class="{
      departments__drowdown: true,
      show: this.$store.state.toggle_departments,
    }"
  >
    <li class="departments__dropdown-item" @click.prevent="handlerDepartment">
      <router-link tag="button" active-class="active" exact :to="{ name: 'foods' }"
        >All Foods</router-link
      >
    </li>
    <li class="departments__dropdown-item" @click.prevent="handlerDepartment">
      <router-link active-class="active" :to="{ name: 'vegetables' }"
        >vegetables</router-link
      >
    </li>
    <li class="departments__dropdown-item" @click.prevent="handlerDepartment">
      <router-link active-class="active" :to="{ name: 'fruits' }"
        >fruits</router-link
      >
    </li>
    <li class="departments__dropdown-item" @click.prevent="handlerDepartment">
      <router-link active-class="active" :to="{ name: 'bread' }"
        >bread</router-link
      >
    </li>
    <li class="departments__dropdown-item" @click.prevent="handlerDepartment" style="border: none;">
      <router-link active-class="active" :to="{ name: 'fast-food' }"
        >fast food</router-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "department",
  data() {
    return {
      toggle: true,
    };
  },
  methods: {
    handlerDepartment() {
      this.$store.state.toggle_departments = false;
    },
  },
};
</script>
