<template>
  <div class="products">
      <div class="products__content">
          <the-product/>
      </div>
  </div>
</template>

<script>
import TheProduct from '@/components/products/TheProduct.vue'
export default {
  components: { TheProduct },
    name:'products',
}
</script>
