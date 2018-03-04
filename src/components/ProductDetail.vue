<template>
  <section class="product-detail">
    <div class="detail-header">
      <h2>Product Detail</h2>
      <router-link :to="'/'">Back To Product List</router-link>
    </div>
      <div v-if="matchedProduct">
        <div class="product">
          <h2>{{ $route.query.product }}</h2>
          <div class="product-info">
            <strong>Product Description:</strong>
            <p>{{ $route.query.description }}</p>
          </div>
          <div class="product-info">
            <strong>ID:</strong>
            <p>{{ $route.query.id }}</p>
          </div>
          <div class="product-info">
            <strong>Client ID:</strong>
            <p>{{ $route.query.clientId }}</p>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="product product-error">
          <h2>We're sorry. The product you entered is invalid. Please try again.</h2>
        </div>
      </div>
      
  </section>
</template>

<script>
  export default {
    name: 'ProductDetail',
    data() {
      return {
        matchedProduct: true
      }
    },
    created() {
      this.doesExist()
      console.log('started')
    },
    computed: {
      products () {
        return this.$store.getters.trimProducts;
      }
    },
    methods: {
      doesExist: function(){
        for(var i=0; i < this.$store.getters.trimProducts.length; i++){
          if( this.$store.getters.trimProducts[i].product == this.$route.params.id){
            this.matchedProduct = true
            return
          } else {
            this.matchedProduct = false;
            console.log('false');
          }
        }
      }
    },
    // fire load projects action in store
    mounted: function () {
      this.$store.dispatch('LOAD_PRODUCTS')
    }
  }  
</script>

<style scoped>
  .product {
    margin: 1rem;
    padding: 1rem;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    max-width: 35rem;
  }
  .detail-header {
    text-align: left;
    padding: 1rem;
  }
  .detail-header h2 {
    margin-bottom: 0.5rem;
  }
  .product-info {
    margin: 0.5rem 0;
  }
  .product-info strong {
    display: inline-block;
    width: auto;
    border-bottom: 2px solid #ebebeb;
  }
</style>
