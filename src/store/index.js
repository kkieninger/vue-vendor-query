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
  mutations: {
    SET_PRODUCTS: (state, { list }) => {
      state.products = list
    }
  },
  getters: {
    // get entire list of products
    getProducts: state => {
      return state.products
    },
    // get a trimmed list of only 10 products
    trimProducts: state => {
      return state.products.slice(0, 10)
    }
  }
})

export default store
