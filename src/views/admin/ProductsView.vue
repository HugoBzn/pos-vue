<script setup>
import Link from '@/components/Link.vue';
import Product from '@/components/Product.vue';
import { useProductsStore } from '../../stores/products';

const products = useProductsStore();
</script>

<template>
  <div class="px-5">
    <Link to="new-product">Nuevo Producto</Link>

    <h1 v-if="products.noResults" class="text-4xl my-5">No hay productos</h1>

    <div v-else>
      <h1 class="text-4xl my-5">Productos</h1>
      <ul role="list" class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
        <Product v-for="product in products.productsCollection" :key="product.id" :product="product" />
      </ul>
    </div>
  </div>
</template>
