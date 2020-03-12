<template>
	<header>
		<img width="8%" src="../assets/logo.png" />
		<li><router-link to="/map">Map Farmers Markets</router-link></li>
		<li><router-link to="/recipes">Recipes</router-link></li>
		<li><router-link to="/" exact>Ingredients</router-link></li>
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
	font-weight: bold;
	font-size: 20px;
	background: #3f8724;
	margin-bottom: 40px;
	padding: 5px;
}
h1 {
	color: #222;
	text-align: center;
	display: inline-block;
}
ul {
	list-style-type: none;
	text-align: center;
	margin: 0;
}
li {
	display: inline-block;
	margin: 60px 10px;
	vertical-align: bottom;
	float: right;
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
