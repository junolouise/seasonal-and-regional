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
      copyright: "Copyright 2020 Team Hangry",
      credits: "Data retrieved from Edamam API"
    };
  }
};
</script>
<style scoped>
footer {
  background: #3f8724;
  padding: 6px;
}
p {
  color: white;
  text-align: center;
}
</style>