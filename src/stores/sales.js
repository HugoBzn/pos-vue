import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { query, collection, where } from 'firebase/firestore';
import { useFirestore, useCollection } from 'vuefire';

export const useSalesStore = defineStore('sales', () => {
  const db = useFirestore();
  const date = ref('');

  const salesSource = computed(() => {
    if (date.value) {
      const q = query(collection(db, 'sales'), where('date', '==', date.value));
      return q;
    }
  });

  const salesCollection = useCollection(salesSource);

  const isDateSelected = computed(() => date.value);

  const noSales = computed(() => !salesCollection.lenght && date.value);

  return {
    date,
    isDateSelected,
    salesCollection,
    noSales,
  };
});
