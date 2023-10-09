import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore("ProductStore", () => {
  const products = ref([
    {
      id: 1,
      serialNumber: 1234,
      isNew: 1,
      photo: 'pathToFile.jpg',
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
      serialNumber: 1234,
      isNew: 1,
      photo: 'pathToFile.jpg',
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

  return {
    products,
  };
});
