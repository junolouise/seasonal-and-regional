<template>
  <div id="menus">
    <input type="text" v-model="filterMenus" placeholder="search menus" />
    <ul>
      <li
        v-for="(menu, index) in filteredmenus"
        :key="index"
        v-on:click="menu.show = !menu.show"
      >
        <h2>{{ menu.name }}</h2>
        <h3 v-show="menu.show">{{ menu.carbon }}</h3>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filterMenus: "",
      menus: [
        {
          name: "Apple Pie",
          carbon: "200mg",
          show: false
        },
        { name: "Asparagus and eggs", carbon: "300mg", show: false },
        {
          name: "Beef Bourguignon",
          carbon: "3 tonnes",
          show: false
        },
        {
          name: "Beetroot salad",
          carbon: "100mg",
          show: false
        },
        {
          name: "Onion Soup",
          carbon: "100mg",
          show: false
        },
        {
          name: "Mussels Soup",
          carbon: "500mg",
          show: false
        },
        { name: "Watercress soup", carbon: "0mg", show: false }
      ]
    };
  },
  computed: {
    filteredmenus: function() {
      return this.menus.filter(menu => {
        return menu.name.match(this.filterMenus);
      });
    }
  }
};
</script>
<style scoped>
#menus {
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
