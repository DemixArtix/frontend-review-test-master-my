<template lang="pug">
  div.header
    h3 Товаров в корзине на: {{ cartPrice }} {{ currency }}
</template>

<script>
export default {
  name: 'Header',
  computed: {
    cartPrice() {
      return this.$store.getters['cart/cartPrice']
    },
    currency() {
      return this.$store.getters['currency']
    },
  },
}
</script>

<style scoped>
  .header {
    padding: 10px;
    background: #e5e5e5;
  }
</style>


