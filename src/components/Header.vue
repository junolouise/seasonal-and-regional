<template>
	<header>
		<h1>{{ title }}</h1>
		<p v-on:click="changeComponent">{{ componentLink }}</p>
	</header>
</template>

<script>
export default {
	props: {
		component: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			title: 'Seasonal Regional',
			componentLink: 'menus',
		};
	},
	methods: {
		changeComponent: function() {
			if (this.component == 'app-ingredients') {
				this.componentLink = 'ingredients';
				this.component = 'app-menus';
			} else {
				this.componentLink = 'menus';
				this.component = 'app-ingredients';
			}

			this.$emit('changeComponent', this.component);
		},
	},
};
</script>

<style scoped>
header {
	background: lightseagreen;
	padding: 10px;
}
h1 {
	color: #222;
	text-align: center;
}
</style>
