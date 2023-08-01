<script setup>
import { formatCurrency } from '../helpers/index';

defineProps({
  product: {
    type: Object,
  },
});
</script>

<template>
  <li class="flex items-center space-x-6 border bg-slate-100 bg-opacity-20 rounded shadow p-5">
    <img :src="product.image" :alt="product.name" class="h-24 w-24 rounded" />
    <div class="space-y-2">
      <h3 class="font-extrabold">{{ product.name }}</h3>
      <p class="font-semibold">{{ formatCurrency(product.price) }}</p>
      <p>{{ product.availability }} en existencia</p>
    </div>
  </li>
</template>
