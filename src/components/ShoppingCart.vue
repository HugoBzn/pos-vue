<script setup>
import Amount from './Amount.vue';
import ShoppingCartItem from './ShoppingCartItem.vue';
import CuponForm from './CuponForm.vue';
import { useCartStore } from '../stores/cart';
import { useCouponsStore } from '../stores/coupons';
import { formatCurrency } from '../helpers';

const cart = useCartStore();
const coupon = useCouponsStore();
</script>

<template>
  <p v-if="cart.isEmpty" class="text-xl text-center font-bold">El carrito está vacío</p>

  <div v-else>
    <p class="text-4xl font-bold">Resumen de venta</p>

    <ul role="list" class="mt-6 divide-y divide-gray-200">
      <ShoppingCartItem v-for="item in cart.items" :key="item.id" :item="item" />
    </ul>

    <dl class="pt-2 mt-6 border-t border-gray-200 text-sm md:text-base font-medium text-gray-200">
      <Amount>
        <template #label>Subtotal:</template>
        {{ formatCurrency(cart.subtotal) }}
      </Amount>
      <Amount>
        <template #label>Impuestos:</template>
        {{ formatCurrency(cart.taxes) }}
      </Amount>
      <Amount v-if="coupon.isValidCoupon">
        <template #label>Descuento:</template>
        {{ formatCurrency(coupon.discount) }}
      </Amount>
      <Amount>
        <template #label>Total a pagar:</template>
        {{ formatCurrency(cart.total) }}
      </Amount>
    </dl>

    <CuponForm />
  </div>
</template>
