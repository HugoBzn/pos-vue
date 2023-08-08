<script setup>
import { ref } from 'vue';
import SaleDetails from '../../components/SaleDetails.vue';
import VueTailwindDatePicker from 'vue-tailwind-datepicker';
import { useSalesStore } from '../../stores/sales';
import { formatCurrency } from '../../helpers';

const sales = useSalesStore();

const formatter = ref({
  date: 'DD/MM/YYYY',
  month: 'MMMM',
});

console.log(sales.salesCollection);
</script>

<template>
  <div class="px-5">
    <h1 class="text-4xl my-5">Resumen de <span class="text-green-500">ventas</span></h1>

    <div class="md:flex md:items-start gap-5 mt-10">
      <div class="md:w-1/2 lg:w-1/3 flex justify-center">
        <VueTailwindDatePicker
          i18n="es-mx"
          as-single
          no-input
          class="text-black"
          :formatter="formatter"
          v-model="sales.date"
        />
      </div>

      <div class="md:w-1/2 lg:w-2/3 space-y-5 lg:h-screen lg:overflow-y-auto p-5 pb-32">
        <p v-if="sales.isDateSelected" class="text-center text-2xl">
          Ventas de la fecha <span class="font-black text-green-500">{{ sales.date }}</span>
        </p>
        <p v-else class="text-center text-2xl">Selecciona una fecha</p>

        <div v-if="sales.salesCollection.length" class="space-y-5">
          <p class="text-center md:text-right text-2xl">
            Total del día
            <span class="font-black text-green-500"> {{ formatCurrency(sales.totalSalesPerDay) }} </span>
          </p>

          <SaleDetails v-for="sale in sales.salesCollection" :key="sale.id" :sale="sale" />
        </div>

        <p v-else-if="sales.noSales" class="text-2xl text-center">
          No hay ventas <span class="text-green-500">en este día</span>
        </p>
      </div>
    </div>
  </div>
</template>
