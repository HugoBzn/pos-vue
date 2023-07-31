<script setup>
import Link from './Link.vue';
import Logo from './Logo.vue';
</script>

<template>
  <header class="px-5 py-5 bg-gray-800 flex justify-between absolute top-0 w-full z-10">
    <div>
      <Logo />
    </div>

    <nav class="mt-2">
      <Link to="admin"> Administrar </Link>
    </nav>
  </header>
</template>
