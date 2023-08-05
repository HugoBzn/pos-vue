<script setup>
import { useCouponsStore } from '../stores/coupons';

const couponStore = useCouponsStore();
</script>

<template>
  <p class="mt-5 py-5 font-bold border-t">¿Tienes un cupón?</p>

  <div class="flex">
    <input
      type="text"
      placeholder="Ingresa un cupón"
      class="p-2 border-gray-200 rounded-lg rounded-r-none w-full"
      v-model="couponStore.couponInput"
    />
    <button type="button" class="p-3 bg-green-500 hover:bg-green-600 font-bold rounded-lg rounded-l-none">
      Canjear
    </button>
  </div>
</template>
