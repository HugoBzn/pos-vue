<script setup>
import VueTailwindDatePicker from 'vue-tailwind-datepicker';
</script>

<template>
  <div class="px-5">
    <h1 class="text-4xl my-5">Resumen de Ventas</h1>

    <div class="md:flex md:items-start gap-5">
      <div class="md:w-1/2 lg:w-1/3 flex justify-center">
        <VueTailwindDatePicker 
          class="text-black"
        />
      </div>
      <div class="md:w-1/2 lg:w-2/3 space-y-5 lg:h-screen lg:overflow-y-auto p-5 pb-32">
        <p>Ventas aquí</p>
      </div>
    </div>
  </div>
</template>
