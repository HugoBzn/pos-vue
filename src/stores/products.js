import { computed } from 'vue';
import { defineStore } from 'pinia';
import { useFirestore, useCollection } from 'vuefire';
import { collection, addDoc, query, orderBy, updateDoc } from 'firebase/firestore';

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

  async function updateProduct(docRef, product) {
    const { image, url, ...values } = product;
    if (image.length) {
      await updateDoc(docRef, {
        ...values,
        image: url.value,
      });
    } else {
      await updateDoc(docRef, values);
    }
  }

  return {
    createProduct,
    updateProduct,
    categoryOptions,
    productsCollection,
    noResults,
  };
});
