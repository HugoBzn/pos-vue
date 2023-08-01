<script setup>
import { RouterLink } from 'vue-router';
import Link from './Link.vue';
import Logo from './Logo.vue';
</script>

<template>
  <header class="px-5 py-5 bg-gray-800 flex justify-between absolute top-0 w-full z-10">
    <div class="mt-0.5 md:mt-0">
      <Logo />
    </div>

    <nav class="flex">
      <RouterLink
        :to="{ name: 'products' }"
        class="rounded text-white font-bold p-3 md:p-2 text-xs md:text-base"
        active-class="text-green-500"
      >
        Products
      </RouterLink>
      <RouterLink
        :to="{ name: 'sales' }"
        class="rounded text-white font-bold p-3 md:p-2 text-xs md:text-base"
        active-class="text-green-500"
      >
        Sales
      </RouterLink>
      <div class="flex text-center ml-2">
        <Link to="shop"> Ir a Tienda </Link>
      </div>
    </nav>
  </header>
</template>
