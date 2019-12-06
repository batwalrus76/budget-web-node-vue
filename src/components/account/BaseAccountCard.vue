<template>
    <b-card
            tag="article"
            border-variant="dark"
    >
        <b-table striped hover :items="accounts" :fields="fields"></b-table>
    </b-card>
</template>

<script>
	export default {
		name: "BaseAccountCard",
		props: ['accounts', 'headerName'],
		data() {
			return {
				fields: ['name','balance']
			}
		}
	}
</script>

<style scoped>

</style>