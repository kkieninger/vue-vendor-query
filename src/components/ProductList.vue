<template>
  <section class="product-list">
    <div class="list-header">
      <h2>Product List</h2>
    </div>
    <div v-if="products.length">
      <table-component :data="products"
        sort-by="clientId"
        sort-order="asc"
      >
        <table-column show="product" label="Product"></table-column>
        <table-column show="clientId" label="Client ID" data-type="numeric"></table-column>
        <table-column show="id" label="ID" data-type="numeric"></table-column>
        <table-column show="description" label="Description"></table-column>
        <table-column label="" :sortable="false" :filterable="false">
          <template slot-scope="row">
            <router-link :to="`/product/${row.product}?id=${row.id}&clientId=${row.clientId}&product=${row.product}&description=${row.description}`">More Details</router-link>
          </template>
        </table-column>
      </table-component>
    </div>
    <div v-else>
      <!-- LOADING ICON -->
      <div class="loader">
        <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
          <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
            <animateTransform attributeType="xml"
              attributeName="transform"
              type="rotate"
              from="0 25 25"
              to="360 25 25"
              dur="0.6s"
              repeatCount="indefinite"/>
          </path>
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductList',
  computed: {
    products () {
      return this.$store.getters.trimProducts
    }
  },
  // fire load projects action in store
  mounted: function () {
    this.$store.dispatch('LOAD_PRODUCTS')
  }
}
</script>

<style>
.list-header {
  padding: 0 1rem;
}

/* LOADER COLOR */
svg path,
svg rect{
  fill: #FF6700;
}

/* PULLING IN STYLES FROM VUE-TABLE COMPONENT */
*,
*:after,
*:before {
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.table-component {
  display: flex;
  flex-direction: column;
  margin: 1em 0;
  padding: 0 1rem;
}

.table-component__filter {
  align-self: flex-end;
}

.table-component__filter__field {
  padding: 0 1.25em 0 .75em;
  height: 2.5em;
  border: solid 2px #e0e0e0;
  border-radius: 2em;
  font-size: inherit;
}

.table-component__filter__clear {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2em;
  color: #007593;
  font-weight: bold;
  cursor: pointer;
}

.table-component__filter__field:focus {
  outline: 0;
  border-color: #007593;
}

.table-component__table-wrapper {
  overflow-x: auto;
  margin: 1em 0;
  width: 100%;
  border: solid 1px #ddd;
  border-bottom: none;
}

.table-component__table {
  min-width: 100%;
  border-collapse: collapse;
  border-bottom: solid 1px #ddd;
  table-layout: fixed;
}

.table-component__table__caption {
  position: absolute;
  top: auto;
  left: -10000px;
  overflow: hidden;
  width: 1px;
  height: 1px;
}

.table-component__table th,
.table-component__table td {
  padding: .75em 1.25em;
  vertical-align: top;
  text-align: left;
}

.table-component__table th {
  background-color: #e0e0e0;
  color: #999;
  text-transform: uppercase;
  white-space: nowrap;
  font-size: .85em;
}

.table-component__table tbody tr:nth-child(even) {
  background-color: #f0f0f0;
}

.table-component__table a {
  color: #007593;
}

.table-component__message {
  color: #999;
  font-style: italic;
}

.table-component__th--sort,
.table-component__th--sort-asc,
.table-component__th--sort-desc {
  text-decoration: underline;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.table-component__th--sort-asc:after,
.table-component__th--sort-desc:after {
  position: absolute;
  left: .25em;
  display: inline-block;
  color: #bbb;
}

.table-component__th--sort-asc:after {
  content: '↑';
}

.table-component__th--sort-desc:after {
  content: '↓';
}
</style>
