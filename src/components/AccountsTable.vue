<template>
    <b-card
            header="Accounts"
            tag="article"
            border-variant="dark"
    >

        <b-table striped hover
                 :items="accounts"
                 :head-variant="headVariant"
                 :table-variant="tableVariant"></b-table>
    </b-card>
</template>

<script>
	export default {
		name: "AccountsTable",
        data() {
			return {
		        accounts: [
			        {name: 'checkingAccount', balance: 500.00},
			        {name: 'savingsAccount', balance: 500.00}
		        ]
	        }
        }
	}
</script>

<style scoped>

</style>