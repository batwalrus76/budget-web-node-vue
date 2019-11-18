<template>
    <b-card
            header="Checking Account"
            tag="article"
            border-variant="dark"
    >
        <b-table striped hover :items="checkingAccount" :fields="fields"></b-table>
    </b-card>
</template>

<script>
	export default {
		name: "CheckingAccountCard",
		props: ['checkingAccount'],
		data() {
			return {
				fields: ['name','balance']
			}
		}
	}
</script>

<style scoped>

</style>