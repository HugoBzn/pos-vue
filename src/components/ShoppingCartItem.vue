<script setup>
import { useCartStore } from '../stores/cart';
import { formatCurrency } from '../helpers/index';

const cart = useCartStore();

defineProps({
  item: {
    type: Object,
  },
});
</script>

<template>
  <li class="flex space-x-6 py-3">
    <img :src="item.image" :alt="'Imagen de ' + item.name" class="h-32 w-32 flex-none rounded-xl" />
    <div class="flex-auto space-y-2">
      <h3 class="font-bold">{{ item.name }}</h3>
      <p class="font-semibold">{{ formatCurrency(item.price) }}</p>
      <select
        class="w-24 h-10 text-center p-2 rounded-lg bg-slate-100 bg-opacity-20 shadow"
        @change="cart.updateQuantity(item.id, +$event.target.value)"
      >
        <option v-for="n in cart.checkProductAvailability(item)" :value="n" class="text-black">
          {{ n }}
        </option>
      </select>
    </div>
  </li>
</template>
