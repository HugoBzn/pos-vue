<script setup>
import { useProductsStore } from '../stores/products';
import Link from './Link.vue';
import Logo from './Logo.vue';

const products = useProductsStore();
</script>

<template>
  <header class="px-5 py-5 bg-gray-800 flex justify-between absolute top-0 w-full z-10">
    <div class="mt-0.5 md:mt-0">
      <Logo />

      <div class="flex gap-2 md:gap-5 mt-5">
        <h2 class="text-xs md:text-lg font-extrabold">Filtros:</h2>

        <div class="flex items-center gap-2" v-for="category in products.categories" :key="category.id">
          <input
            type="radio"
            name="category"
            :value="category.id"
            :id="category.name"
            class="h-4 w-4 md:h-5 md:w-5 rounded text-green-500 focus:ring-green-600"
            :checked="products.selectCategory === category.id"
            @change="products.selectCategory = +$event.target.value"
          />
          <label :for="category.name" class="cursor-pointer text-xs md:text-lg">{{ category.name }}</label>
        </div>
      </div>
    </div>

    <nav class="mt-1">
      <Link to="products"> Administrar </Link>
    </nav>
  </header>
</template>
