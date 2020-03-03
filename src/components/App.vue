<template>
  <div>
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
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>
