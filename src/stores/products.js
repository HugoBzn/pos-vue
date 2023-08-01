import { computed } from 'vue';
import { defineStore } from 'pinia';
import { useFirestore, useCollection } from 'vuefire';
import { collection, addDoc, where, query, limit, orderBy } from 'firebase/firestore';

export const useProductsStore = defineStore('products', () => {
  const db = useFirestore();

  const categories = [
    { id: 1, name: 'Sudaderas' },
    { id: 2, name: 'Tenis' },
    { id: 3, name: 'Lentes' },
  ];

  const categoryOptions = computed(() => {
    const options = [
      { label: 'Seleccione', value: '', attrs: { disabled: true } },
      ...categories.map((category) => ({ label: category.name, value: category.id })),
    ];
    return options;
  });

  const q = query(collection(db, 'products'), orderBy('availability', 'asc'));
  const productsCollection = useCollection(q);

  const noResults = computed(() => productsCollection.value.length === 0);

  async function createProduct(product) {
    await addDoc(collection(db, 'products'), product);
  }

  return {
    createProduct,
    categoryOptions,
    productsCollection,
    noResults,
  };
});
