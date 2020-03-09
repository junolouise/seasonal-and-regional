<template>
	<div>
		<div>
			<h2>Search and add a pin</h2>
			<label>
				<gmap-autocomplete @place_changed="setPlace"> </gmap-autocomplete>
				<button @click="addMarker">Add</button>
			</label>
			<br />
		</div>
		<br />
		<gmap-map :center="center" :zoom="15" style="width:80%;  height: 600px;">
			<gmap-marker
				:key="index"
				v-for="(m, index) in markers"
				:position="m.position"
				@click="center = m.position"
			></gmap-marker>
		</gmap-map>
	</div>
</template>
<script>
export default {
	name: 'Map',
	data() {
		return {
			center: { lat: 51.500632, lng: -0.1272445 },
			markers: [],
			places: [],
			currentPlace: null,
		};
	},
	mounted() {
		this.geolocate();
	},
	methods: {
		// receives a place object via the autocomplete component
		setPlace(place) {
			this.currentPlace = place;
		},
		addMarker() {
			if (this.currentPlace) {
				const marker = {
					lat: this.currentPlace.geometry.location.lat(),
					lng: this.currentPlace.geometry.location.lng(),
				};
				this.markers.push({ position: marker });
				this.places.push(this.currentPlace);
				this.center = marker;
				this.currentPlace = null;
			}
		},
		geolocate: function() {
			navigator.geolocation.getCurrentPosition(position => {
				this.center = {
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				};
			});
		},
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
