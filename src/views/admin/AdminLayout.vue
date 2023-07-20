<script setup>
import AdminNav from '@/components/AdminNav.vue';
</script>

<template>
  <AdminNav />

  <div class="pt-32 container mx-auto lg:min-h-screen lg:pl-20">
    <RouterView />
  </div>
</template>
