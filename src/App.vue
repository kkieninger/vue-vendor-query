<template>
  <div id="app">
    <header class="app-header">
      <img src="./assets/logo.png">
      <h1>Vue Vendor Query</h1>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
.app-header {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.app-header img {
  width: 5rem;
  height: auto;
  margin-right: 1rem;
}
#app a {
  text-decoration: none;
}
#app a:hover {
  text-decoration: underline;
}
</style>
