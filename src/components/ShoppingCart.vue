<script setup>
import { useCartStore } from '../stores/cart';

const cart = useCartStore();
</script>

<template>
  <p v-if="cart.isEmpty" class="text-xl text-center font-bold">El carrito está vacío</p>
</template>
