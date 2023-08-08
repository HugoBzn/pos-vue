<script setup>
import { ref } from 'vue';
import VueTailwindDatePicker from 'vue-tailwind-datepicker';

const date = ref('');

const formatter = ref({
  date: 'DD/MM/YYYY',
  month: 'MMMM'
});
</script>

<template>
  <div class="px-5">
    <h1 class="text-4xl my-5">Resumen de Ventas</h1>

    <div class="md:flex md:items-start gap-5">
      <div class="md:w-1/2 lg:w-1/3 flex justify-center">
        <VueTailwindDatePicker
          i18n="es-mx"
          as-single
          no-input
          class="text-black"
          :formatter="formatter"
          v-model="date"
        />
      </div>
      <div class="md:w-1/2 lg:w-2/3 space-y-5 lg:overflow-y-auto p-5 pb-32">
        <p>Ventas aquí</p>
        {{ date }}
      </div>
    </div>
  </div>
</template>
