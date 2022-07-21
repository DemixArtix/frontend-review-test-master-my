export default{
  namespaced: true,
  state: {
    cart: [],
  },
  getters: {
    cart: ({cart}) => cart,
    cartPrice: ({cart}) => {
      return cart.reduce((acc, item) => {
        acc += item.price * item.amount;
        return acc;
      }, 0).toFixed(2)
    },
  },
  mutations: {
    ADD_TO_CART(state, product) {
      let productInCartId = state.cart.findIndex(item => item.id === product.id);
      if(productInCartId !== -1) {
        product.amount += +state.cart[productInCartId].amount;
        state.cart.splice(productInCartId, 1)
      }
      state.cart.unshift(product)
    }
  },
  actions: {
    addToCart({ commit }, product) {

      commit('ADD_TO_CART', product)

    },
  },
}