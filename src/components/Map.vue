<template>
	<div id="map">
		<div class="gmap"></div>
	</div>
</template>
<script>
import gmapsInit from '../gmaps';
export default {
	data() {
		return {};
	},
	async mounted() {
		try {
			const google = await gmapsInit();
			const geocoder = new google.maps.Geocoder();
			const map = new google.maps.Map(this.$el);

			geocoder.geocode({ address: 'Austria' }, (results, status) => {
				if (status !== 'OK' || !results[0]) {
					throw new Error(status);
				}

				map.setCenter(results[0].geometry.location);
				map.fitBounds(results[0].geometry.viewport);
			});
		} catch (error) {
			console.error(error);
		}
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
