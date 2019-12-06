<template>
    <b-card
            header="Savings Accounts"
            tag="article"
            border-variant="dark"
    >
        <b-table striped hover :items="Object.values(savingsAccounts)" :fields="fields"></b-table>
    </b-card>
</template>

<script>
	export default {
		name: "SavingsAccountsCard",
        props: ['savingsAccounts'],
        data() {
            return {
                fields: ['name','balance']
            }
        }
	}
</script>

<style scoped>

</style>