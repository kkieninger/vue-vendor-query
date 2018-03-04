import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: []
  },
  actions: {
    LOAD_PRODUCTS: function ({ commit }) {
      axios.get('https://next.json-generator.com/api/json/get/41RBhbHu4').then((response) => {
        commit('SET_PRODUCTS', { list: response.data })
      }, (err) => {
        console.log(err)
      })
    }
  },
  // The mutations calls are the only place that the store can be updated.
  mutations: {
    SET_PRODUCTS: (state, { list }) => {
      state.products = list
    }
  }
})

export default store
