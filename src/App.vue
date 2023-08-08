<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView />
</template>

<style>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #ffffff;
  border-radius: 10rem;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 10rem;
  background: #22c55e;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #22c55e;
}
</style>
