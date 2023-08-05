import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCouponsStore = defineStore('coupon', () => {
  const couponInput = ref('');

  const VALID_COUPONS = [
    { name: '10DESCUENTO', discount: 0.1 },
    { name: '20DESCUENTO', discount: 0.2 },
  ];

  function applyCoupon() {
    if (VALID_COUPONS.some((coupon) => coupon.name === couponInput.value)) {
      console.log('Si existe');
    } else {
      console.log('No existe krbal');
    }
  }
  return {
    couponInput,
    VALID_COUPONS,
    applyCoupon,
  };
});
