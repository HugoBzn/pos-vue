<script setup>
import { formatCurrency } from '../helpers/index';

defineProps({
  product: {
    type: Object,
  },
});
</script>

<template>
  <div class="rounded-xl bg-slate-100 bg-opacity-20 shadow relative">
    <img :src="product.image" :alt="'Imagen de ' + product.name" class="rounded-b-3xl rounded-t-xl" />

    <div class="p-3 space-y-2">
      <h3 class="text-2xl font-extrabold">{{ product.name }}</h3>
      <p>Disponibles: {{ product.availability }}</p>
      <p class="text-xl font-semibold">{{ formatCurrency(product.price) }}</p>
    </div>

    <button type="button" class="absolute top-5 -right-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8 bg-indigo-600 rounded-full"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
  </div>
</template>
