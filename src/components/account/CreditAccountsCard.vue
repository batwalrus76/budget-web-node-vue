<template>
        <b-card
                header="Credit Accounts"
                tag="article"
                border-variant="dark"
        >
            <b-table striped hover :items="Object.values(creditAccounts)" :fields="fields"></b-table>
        </b-card>
</template>

<script>
	export default {
		name: "CreditAccountsCard",
        props: ['creditAccounts'],
        data() {
            return {
                fields: ['name','balance']
            }
        }
	}
</script>

<style scoped>

</style>