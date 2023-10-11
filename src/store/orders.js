import { defineStore } from "pinia";
import { ref } from "vue";
import { useProductStore } from "./products";

export const useOrdersStore = defineStore("OrdersStore", () => {
  const productsStore = useProductStore();

  const orders = ref([
    {
      id: 1,
      title: 'Order 1',
      date: '2017-06-29 12:09:33',
      description: 'desc',
    },
    {
      id: 2,
      title: 'Order 2',
      date: '2017-06-29 12:09:33',
      description: 'desc',
    },
    {
      id: 3,
      title: 'Order 3',
      date: '2017-06-29 12:09:33',
      description: 'desc',
    }
  ]);

  const ordersWithProducts = orders.value.map((order) => {
    return {
      ...order,
      get products() {
        // Вручную связываем заказ с продуктами на основе title
        const matchingProducts = productsStore.products.value.filter((product) => product.order === order.id);
        return matchingProducts;
      },
    };
  });

  return {
    orders: ordersWithProducts,
  };
});
