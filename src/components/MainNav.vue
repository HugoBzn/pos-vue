<script setup>
import Link from './Link.vue';
</script>

<template>
  <header class="px-10 py-5 bg-gray-800 flex justify-between absolute top-0 w-full z-10">
    <div>
      <h1 class="text-3xl">POS <span class="text-green-400">Vue.js</span></h1>
    </div>

    <nav class="mt-2">
      <Link to="admin"> Administrar </Link>
    </nav>
  </header>
</template>
