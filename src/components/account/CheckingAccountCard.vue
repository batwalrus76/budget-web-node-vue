<template>
    <b-card
            header="Checking Account"
            tag="article"
            border-variant="dark"
    >
        <b-table striped hover :items="checkingAccounts" :fields="fields"></b-table>
    </b-card>
</template>

<script>
	export default {
		name: "CheckingAccountCard",
		props: ['checkingAccounts'],
		data() {
			return {
				fields: ['name','balance']
			}
		}
	}
</script>

<style scoped>

</style>