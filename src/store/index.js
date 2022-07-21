import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import Products from './products'
import Cart from './cart'

export default new Vuex.Store({
  state: {
    currency: 'VGTB',
  },
  getters: {
    currency: ({currency}) => currency,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products: Products,
    cart: Cart,
  }
});
