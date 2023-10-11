import { defineStore } from "pinia";
import { useOrdersStore } from './orders'
import { ref, computed } from "vue";

export const useProductStore = defineStore("ProductStore", () => {
  const products = ref([
    {
      id: 1,
      name: 'Длинное название прихода',
      serialNumber: 1234,
      isNew: 1,
      photo: 'src/assets/vue.svg',
      title: 'Product 1',
      type: 'Monitors',
      specification: 'Specification 1',
      guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33'
      },
      price: [
        {value: 100, symbol: 'USD', isDefault: 0},
        {value: 2600, symbol: 'UAH', isDefault: 1}
      ],
      order: 1,
      date: '2017-06-29 12:09:33'
    },
    {
      id: 2,
      name: 'Длинное предлинное название прихода',
      serialNumber: 1234,
      isNew: 1,
      photo: 'src/assets/vue.svg',
      title: 'Product 2',
      type: 'Monitors',
      specification: 'Specification 2',
      guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33'
      },
      price: [
        {value: 100, symbol: 'USD', isDefault: 0},
        {value: 2600, symbol: 'UAH', isDefault: 1}
      ],
      order: 2,
      date: '2017-06-29 12:09:33'
    }
  ]);

  const formattedProducts = computed(() => {
    return products.value.map((product) => {
      const dateWithoutTime = product.date.split(' ')[0];
      const dateParts = dateWithoutTime.split('-');
      const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;

      const guaranteeStartWithoutTime = product.guarantee.start.split(' ')[0];
      const guaranteeStartParts = guaranteeStartWithoutTime.split('-');
      const formattedGuaranteeStart = `${guaranteeStartParts[2]}/${guaranteeStartParts[1]}/${guaranteeStartParts[0]}`;

      const guaranteeEndWithoutTime = product.guarantee.end.split(' ')[0];
      const guaranteeEndParts = guaranteeEndWithoutTime.split('-');
      const formattedGuaranteeEnd = `${guaranteeEndParts[2]}/${guaranteeEndParts[1]}/${guaranteeEndParts[0]}`;

      return {
        ...product,
        date: formattedDate,
        guarantee: {
          start: formattedGuaranteeStart,
          end: formattedGuaranteeEnd,
        },
      };
    });
  });
  return {
    products: formattedProducts
  };
});
