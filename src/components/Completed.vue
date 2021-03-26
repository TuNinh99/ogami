<template>
  <div class="completed">
    <div class="container">
      <breadcumbs />
      <step-block />
      <h2>Congratulation! You’ve <span>completed</span> payment</h2>
      <div class="completed__benefits">
        <benefits />
      </div>
    </div>
  </div>
</template>

<script>
import Breadcumbs from "@/components/Breadcumbs.vue";
import StepBlock from "@/components/StepBlock.vue";
import Benefits from "@/components/Benefits.vue";
export default {
  components: { StepBlock, Benefits, Breadcumbs },
  name: "completed",
  created() {
    this.$store.state.stepActive = 2;
  },
};
</script>
