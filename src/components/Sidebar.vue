<template>
  <div class="sidebar">
    <div class="sidebar__departments">
      <h4>departments</h4>
      <div class="sidebar__departments-content">
        <department/>
      </div>
    </div>
  </div>
</template>

<script>
import Department from '@/components/Department.vue';
export default {
  name: "sidebar",
  components: {
    Department
  },
};
</script>

