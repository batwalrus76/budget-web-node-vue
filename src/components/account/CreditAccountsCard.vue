<template>
        <b-card
                header="Credit Accounts"
                tag="article"
                border-variant="dark"
        >
            <b-table striped hover :items="creditAccounts"></b-table>
        </b-card>
</template>

<script>
	export default {
		name: "CreditAccountsCard",
        props: ['creditAccounts']
	}
</script>

<style scoped>

</style>