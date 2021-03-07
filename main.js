const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: false,
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    deleteItem(id) {
      const itemIndex = this.cart.indexOf(id);
      if (itemIndex >= 0) this.cart.splice(itemIndex, 1);
    },
  },
});
