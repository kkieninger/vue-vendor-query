<template>
  <section class="not-found">
    <div class="not-found-header">
      <h2>Error! Not Found</h2>
      <router-link :to="'/'">Back To Product List</router-link>
    </div>
    <div class="error-message">
      <h2>{{ $route.query.product }}</h2>
      We're sorry. The page or file you're trying to access can't be found. Please try again.
    </div>
  </section>
</template>
