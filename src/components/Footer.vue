<template>
  <footer>
    <p>{{ copyright }}</p>
    <p>{{ credits }}</p>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      copyright: "Copyright 2020 Hangry",
      credits: "Data retrieved from Eaternity API"
    };
  }
};
</script>
<style scoped>
footer {
  background: #222;
  padding: 6px;
}
p {
  color: lightseagreen;
  text-align: center;
}
</style>