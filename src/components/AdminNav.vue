<script setup>
import { RouterLink } from 'vue-router';
import Link from './Link.vue';
import Logo from './Logo.vue';
</script>

<template>
  <header class="px-5 py-5 bg-gray-800 flex justify-between absolute top-0 w-full z-10">
    <div>
      <Logo />
    </div>

    <nav class="flex">
      <RouterLink :to="{ name: 'products' }" class="rounded text-white font-bold p-2"> Products </RouterLink>
      <RouterLink :to="{ name: 'sales' }" class="rounded text-white font-bold p-2"> Sales </RouterLink>
      <div class="flex text-center">
        <Link to="shop"> Ir a Tienda </Link>
      </div>
    </nav>
  </header>
</template>
