<template>
    <nuxt-link :to="url" exact><slot></slot></nuxt-link>
</template>

<script>
	export default {
		props: {
			url: String,
    },
	}

</script>
