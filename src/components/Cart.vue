<template lang="pug">
  ul.cart-list
    li.cart-item( v-for="({amount, price, title}) in cart" )
      | Наименование: "{{ title }}".
      | Кол-во: {{ amount }}.
      | Цена за ед. : {{ price }} {{currency}}.

</template>

<script>
export default {
  computed: {
      cart() {
        return this.$store.getters['cart/cart']
      },
      currency() {
        return this.$store.getters['currency']
      },
  },
};
</script>

<style scoped lang="scss">
  .cart {
    &-list {

    }
    &-item {
      margin-bottom: 3px;
      margin-left: 40px;
      &::marker {
        color: #000;
        font-size: 1.2em;
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }
    }
  }
</style>
