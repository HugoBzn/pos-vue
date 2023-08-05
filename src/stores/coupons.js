import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCouponsStore = defineStore('coupon', () => {
  const couponInput = ref('');

  return {
    couponInput,
  };
});
