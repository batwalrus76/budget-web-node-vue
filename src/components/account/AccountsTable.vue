<template>
    <b-card
            header="Accounts"
            tag="article"
            border-variant="dark"
    >

        <b-table striped hover :items="accounts"></b-table>
    </b-card>
</template>

<script>
	export default {
		name: "AccountsTable",
        props: ['accounts'],
		data() {
			return {
			}
		}
	}
</script>

<style scoped>

</style>