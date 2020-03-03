<template>
  <div id="app">
    <app-header></app-header>
    <app-ingredients></app-ingredients>
    <app-footer></app-footer>
  </div>
</template>

<script>
// Imports
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Ingredients from "./components/Ingredients.vue";
export default {
  name: 'App',
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-ingredients": Ingredients
  },
  data() {
    return {};
  }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
