<template lang="pug">
  div.product-list
    div.card(v-for="product in products")
      p.card-title {{ product.title }}
      img.card-image(:src="product.image" alt="")
      p.card-price Цена: {{ product.price }} {{ currency }}
      form(:name="product.id" @submit.prevent="addToCart(product)")
        div
          input(name="amount" type="number")
          span кг

        button(type="submit") В корзину
</template>

<script>
export default {
  data: function() {
    return {
      requestInterval: 2000,
      monitoringInterval: null,
    }
  },
  computed: {
    products() {
      return this.$store.getters['products/productsList']
    },
    currency() {
      return this.$store.getters['currency']
    },
  },
  methods: {
    async getList() {
      await this.$store.dispatch('products/getProductsList');
    },
    addToCart(product) {
      let form = document.forms[product.id];
      let amount = +form.amount.value;
      if(amount > 0) {
        let data = {
          id: product.id,
          amount,
          price: product.price,
          title: product.title,
        };
        this.$store.dispatch('cart/addToCart', data);
      }
    },
  },
  created() {
    //изначальные функции показались мне излишними поэтому я их упросил до таких выржений
    this.monitoringInterval = setInterval(this.getList, this.requestInterval);
  },
  beforeDestroy() {
    //перед уничтожением компонента добавил остановку запроса данных к api с интервалом
    clearInterval(this.monitoringInterval)
  },
};
</script>

<style scoped lang="scss">
  .product-list {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
  }

  .card {
    display: inline-block;
    width: calc(100% / 3);
    border: 1px solid #908888;
    border-radius: 5px;
    text-align: center;
    padding: 10px;
    @media (max-width: 840px) {
      width: 50%;
    }
    @media (max-width: 420px) {
      width: 100%;
    }
  }
  .card-image {
    width: 100%;
  }
  button {
    padding: 5px;
    margin: 5px;
  }

</style>
