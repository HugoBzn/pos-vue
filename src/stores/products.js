import { computed } from 'vue';
import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', () => {
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

  async function createProduct(product) {
    console.log(product);
  }

  return {
    createProduct,
    categoryOptions,
  };
});
