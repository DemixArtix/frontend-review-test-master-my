import api from "api/products";

export default{
  namespaced: true,
  state: {
    productsList: []
  },
  getters: {
    productsList: ({productsList}) => productsList,
  },
  mutations: {
    SET_PRODUCTS_LIST(state, list) {
      state.productsList = list
    }
  },
  actions: {
    async getProductsList({ commit }) {
      commit('SET_PRODUCTS_LIST', await api.getProductsList())
    },
  },
}