<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  to: {
    type: String,
  },
});
</script>

<template>
  <RouterLink
    :to="{ name: to }"
    class="rounded bg-green-500 hover:bg-green-500 font-bold py-3 md:py-2 px-3 md:px-10 h-10 text-xs md:text-base"
  >
    <slot></slot>
  </RouterLink>
</template>
