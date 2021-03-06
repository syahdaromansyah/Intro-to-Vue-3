const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Socks',
      brand: 'Vue Mastery',
      image: './assets/images/socks_blue.jpg',
      itemRemaining: 12,
      inStock: true,
      details: ['50% Cotton', '30% Wool', '20% Polyester'],
      variants: [
        {
          id: 2234,
          color: '#3E9E79',
          image: './assets/images/socks_green.jpg',
        },
        { id: 2235, color: '#224C70', image: './assets/images/socks_blue.jpg' },
      ],
    };
  },
  methods: {
    addToCart() {
      this.itemRemaining -= 1;
      this.cart += 1;
      if (!this.itemRemaining) return (this.inStock = false);
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
});
