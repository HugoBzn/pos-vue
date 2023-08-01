<script setup>
import Link from './Link.vue';
import Logo from './Logo.vue';
</script>

<template>
  <header class="px-5 py-5 bg-gray-800 flex justify-between absolute top-0 w-full z-10">
    <div class="mt-0.5 md:mt-0">
      <Logo />
    </div>

    <nav class="mt-1">
      <Link to="products"> Administrar </Link>
    </nav>
  </header>
</template>
