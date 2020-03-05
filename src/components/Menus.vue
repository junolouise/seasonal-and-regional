<template>
	<div id="menus">
		<!-- <input type="text" v-model="filterMenus" placeholder="search menus" /> -->
		<ul>
			<li v-for="(menu, index) in menus" :key="index">
				<h2>{{ menu.recipe.label }}</h2>
				<h3>{{ menu.recipe.url }}</h3>
			</li>
		</ul>
		{{menus}}
	</div>
</template>
<script>
export default {
	data() {
		return {
			// filterMenus: this.$route.params.name,
			search: 'search',
			menus: [],
		};
	},
	// computed: {
	// 	filteredmenus: function() {
	// 		return this.menus.filter(menu => {
	// 			return menu.name.match(this.filterMenus);
	// 		});
	// 	},
	// },
	created() {this.$http.get('https://api.edamam.com/search?q=' + this.$route.params.name + '&app_id=649a31c0&app_key=1cd135a5aa58498a06ad42aa6798aeeb').then(function(data){ this.menus = data.body.hits });}
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

// https://api.edamam.com/search?q=chicken&app_id=${649a31c0}&app_key=${1cd135a5aa58498a06ad42aa6798aeeb}