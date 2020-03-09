<template>
<div>
<iframe
  width="1200"
  height="600"
  frameborder="0" style="border:0"
  src="https://www.google.com/maps/embed/v1/search?key=AIzaSyAZOzuHLWb7E1oJWfjObCpt1UvL-iHFa4o&q=farmers+markets+near+me" allowfullscreen>
</iframe>
</div>
</template>
<script>



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
