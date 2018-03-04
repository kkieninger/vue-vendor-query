<template>
  <div class="product-list">
    <h2>Product List</h2>
    <div v-if="products.length">
      <ul>
        <li v-for="product in products" v-bind:key="product.id">
          <p>{{product.product}}</p>
          <p>{{product.id}}</p>
          <p>{{product.clientId}}</p>
          <p>{{product.description}}</p>
        </li>
      </ul>
    </div>
    <div v-else>
      <h4>Sorry, there are no products available at this time.</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  computed: {
    products () {
      // limits first 10 products within array
      return this.$store.state.products.slice(0, 10)
    }
  },
  // fire load projects action in store
  mounted: function () {
    this.$store.dispatch('LOAD_PRODUCTS')
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
