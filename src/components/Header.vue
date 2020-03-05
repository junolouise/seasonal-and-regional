<template>
	<header>
		<h1>{{ title }}</h1>
		<li><router-link to="/" exact>Ingredients</router-link></li>
		<li><router-link to="/menus">Menus</router-link></li>
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
	background: rgb(51, 82, 36);
	margin-bottom: 40px;
	padding: 10px;
}
h1 {
	font-family: Optima, sans-serif;
	color: rgb(255, 255, 255);
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
