<script setup>
defineProps({
  product: {
    type: Object,
  },
});
</script>

<template>
  <div class="rounded shadow relative">
    <img :src="product.image" :alt="product.image" class="rounded-3xl" />
  </div>
</template>
