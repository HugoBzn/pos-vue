<script setup>
import Amount from './Amount.vue';
import { formatCurrency } from '../helpers';
defineProps({
  sale: {
    type: Object,
  },
});
</script>

<template>
  <div class="border-t-4 border-green-500 space-y-3 py-6">
    <h2 class="text-2xl font-bold">Detalles de venta:</h2>
    <p class="text-xl font-semibold text-gray-200">Productos vendidos:</p>

    <ul role="list" class="divide-y divide-gray-200 text-sm font-medium">
      <li v-for="item in sale.items" class="flex space-x-6">
        <img :src="item.image" :alt="'Imagen de ' + item.name" class="h-24 w-24 flex-none rounded-xl" />

        <div class="flex-auto space-y-2">
          <h3 class="">{{ item.name }}</h3>
          <p>{{ formatCurrency(item.price) }}</p>
          <p>Cantidad: {{ item.quantity }}</p>
        </div>
      </li>
    </ul>
    <dl class="pt-2 mt-6 border-t border-gray-200 text-sm md:text-base font-medium text-gray-200">
      <Amount>
        <template #label>Subtotal:</template>
        {{ formatCurrency(sale.subtotal) }}
      </Amount>
      <Amount>
        <template #label>Impuestos:</template>
        {{ formatCurrency(sale.taxes) }}
      </Amount>
      <Amount v-if="sale.discount" class="bg-gradient-to-r from-green-600 to-green-500 rounded-sm p-2">
        <template #label>Descuento:</template>
        {{ formatCurrency(sale.discount) }}
      </Amount>
      <Amount>
        <template #label>Total pagado:</template>
        {{ formatCurrency(sale.total) }}
      </Amount>
    </dl>
  </div>
</template>
