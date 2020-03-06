<template>
	<div id="menus">
		<!-- <input type="text" v-model="filterMenus" placeholder="search menus" /> -->
		<ul>
			<li v-for="(menu, index) in menus" :key="index" :style="{ backgroundImage: `url(${menu.recipe.image})` }">
				<h2>{{ menu.recipe.label }}</h2>
			</li>
		</ul>
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
	margin: 40px auto;
	padding: 0 30px;
	box-sizing: border-box;
}
h2 {
	border-radius: 10px;
	background: white;
}
ul {
	display: flex;
	flex-wrap: wrap;
	list-style-type: none;
	padding: 0;
}
li {
	align: center;
	border-radius: 25px;
	flex-grow: 1;
	flex-basis: 300px;
	text-align: center;
	padding: 30px;
	border: 1px solid #222;
	margin: 10px;
	max-width: 240px;
	min-height: 240px;
}
</style>

// https://api.edamam.com/search?q=chicken&app_id=${649a31c0}&app_key=${1cd135a5aa58498a06ad42aa6798aeeb}