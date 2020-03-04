<template>
  <div id="ingredients">
    <input
      type="text"
      v-model="filterIngredients"
      placeholder="search ingredients"
    />
    <ul>
      <li
        v-for="(ingredient, index) in filteredIngredients"
        :key="index"
        v-on:click="ingredient.show = !ingredient.show"
      >
        <h2>{{ ingredient.name }}</h2>
        <h3 v-show="ingredient.show">{{ ingredient.season }}</h3>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filterIngredients: "",
      ingredients: [
        {
          name: "Apple",
          season: "Jan, Feb,... Sep, Oct, Nov, Dec",
          show: false
        },
        { name: "Asparagus", season: "May, Jun, Jul, Aug, Sep", show: false },
        {
          name: "Beef",
          season: "Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec",
          show: false
        },
        {
          name: "Beetroot",
          season: "Jan, ... Jul, Aug, Sep, Oct, Nov, Dec",
          show: false
        },
        {
          name: "Onion",
          season: "Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec",
          show: false
        },
        {
          name: "Mussels",
          season: "Jan, Feb, Mar, Oct, Nov, Dec",
          show: false
        },
        { name: "Watercress", season: "May, Jun, Jul, Aug, Sep", show: false }
      ]
    };
  },
  computed: {
    filteredIngredients: function() {
      return this.ingredients.filter(ingredient => {
        return ingredient.name.match(this.filterIngredients);
      });
    }
  }
};
</script>
<style scoped>
#ingredients {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
  max-width: 300px;
}
</style>
