// const product = 'Socks';

const app = Vue.createApp({
  data() {
    return {
      product: 'Boots',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat earum cupiditate amet? Eos beatae nihil aperiam laborum molestias perferendis necessitatibus expedita tempora ea assumenda.',
    };
  },
});

const mountApp = app.mount('#app');
