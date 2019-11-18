<template>
    <b-card
            header="Savings Accounts"
            tag="article"
            border-variant="dark"
    >
        <b-table striped hover :items="savingsAccounts"></b-table>
    </b-card>
</template>

<script>
	export default {
		name: "SavingsAccountsCard",
        props: ['savingsAccounts']
	}
</script>

<style scoped>

</style>