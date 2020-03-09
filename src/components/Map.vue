<template>
	<div id="map">
		<div class="gmap" ref="map"></div>
	</div>
</template>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAZOzuHLWb7E1oJWfjObCpt1UvL-iHFa4o"></script>
<script>
export default {
	data() {
		map: null;
	},
	mounted() {
		this.map = new window.google.maps.Map(this.$refs['map'], {
			zoom: 4,
		});
	},
};
</script>
<style scoped>
#map {
	width: 100%;
	margin: 40px auto;
	padding: 0 30px;
	box-sizing: border-box;
}
h2 {
	border-radius: 10px;
	background: white;
	opacity: 70%;
}
ul {
	display: flex;
	flex-wrap: wrap;
	list-style-type: none;
	padding: 50px;
	border: 1px solid #222;
	border-radius: 25px;
	width: 40%;
}
li {
	font-family: courier, monospace;
	font-size: 20px;
	font-weight: bold;
	line-height: 1em;
	color: purple;
	padding: 5px 15px;
	list-style-type: circle;
}
.gmap {
	height: 500px;
	width: 50%;
	overflow: hidden;
	background-size: cover;
	background-position: center;
	float: left;
	display: block;
	background-color: aqua;
}
</style>
