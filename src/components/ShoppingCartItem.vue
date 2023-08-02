<script setup>
import { formatCurrency } from '../helpers/index';
defineProps({
  item: {
    type: Object,
  },
});
</script>

<template>
  <li class="flex space-x-6 py-3">
    <img :src="item.image" :alt="'Imagen de ' + item.name" class="h-24 w-24 flex-none rounded-xl" />
    <div class="flex-auto space-y-2">
      <h3 class="font-bold">{{ item.name }}</h3>
      <p class="font-semibold">{{ formatCurrency(item.price) }}</p>
    </div>
  </li>
</template>
