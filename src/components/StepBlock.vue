<template>
  <div class="cart__container-step row">
    <div class="col-12 col-sm-6 col-md-4 item">
      <div
        :class="{
          step__block: true,
          active: this.$store.state.stepActive === 0 ? true : false,
        }"
      >
        <div class="step__block-content">
          <h2>Shopping Cart</h2>
          <span>01</span>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-4 item">
      <div
        :class="{
          step__block: true,
          active: this.$store.state.stepActive === 1 ? true : false,
        }"
      >
        <div class="step__block-content">
          <h2>checkout</h2>
          <span>02</span>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-4 item">
      <div
        :class="{
          step__block: true,
          active: this.$store.state.stepActive === 2 ? true : false,
        }"
      >
        <div class="step__block-content">
          <h2>completed</h2>
          <span>03</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "step-block",
};
</script>