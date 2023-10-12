import { defineStore } from "pinia";
import { ref, computed } from "vue";
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

  const formattedOrders = computed(() => {
    return orders.value.map((order) => {
      const dateObj = new Date(order.date);
      const day = dateObj.getDate();
      const month = dateObj.getMonth() + 1; // Months are 0-based
      const year = dateObj.getFullYear();
      const formattedDate = `${day}/${month}/${year}`;

      return {
        ...order,
        date: formattedDate
      };
    });
  });

  const getOrderProducts = computed(() => {
    return orders.value.map(order => {
      const orderNum = parseInt(order.title.split(' ')[1]);
      const relatedProducts = productsStore.products.filter(product => product.order === orderNum);

      return {
        ...order,
        products: relatedProducts
      };
    });
  });

  return {
    orders: formattedOrders,
    getOrderProducts,
  };
});
