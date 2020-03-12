<template>
	<header>
		<h1>{{ title }}</h1>
		<li><router-link to="/" exact>Ingredients</router-link></li>
		<li><router-link to="/recipes">Recipes</router-link></li>
		<li><router-link to="/map">Map Farmers Markets</router-link></li>
	</header>
</template>

<script>
export default {
	data() {
		return {
			title: 'Seasonal Regional',
		};
	},
};
</script>

<style scoped>
header {
	background: #3f8724;
	margin-bottom: 40px;
	padding: 10px;
}
h1 {
	color: #222;
	text-align: center;
}
ul {
	list-style-type: none;
	text-align: center;
	margin: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #fff;
	text-decoration: none;
	padding: 6px 8px;
	border-radius: 10px;
}
.router-link-active {
	background: #eee;
	color: #444;
}
</style>
