import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCouponsStore = defineStore('coupon', () => {
  const couponInput = ref('');
  const couponValidationMessage = ref('');

  const VALID_COUPONS = [
    { name: '10DESCUENTO', discount: 0.1 },
    { name: '20DESCUENTO', discount: 0.2 },
  ];

  function applyCoupon() {
    if (VALID_COUPONS.some((coupon) => coupon.name === couponInput.value)) {
      couponValidationMessage.value = 'Aplicando...';
    } else {
      couponValidationMessage.value = 'No existe ese cupón';
    }
    setTimeout(() => {
      couponValidationMessage.value = '';
    }, 5000);
  }
  return {
    couponInput,
    couponValidationMessage,
    VALID_COUPONS,
    applyCoupon,
  };
});
