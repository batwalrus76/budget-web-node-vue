<template>
    <div>
        <b-card no-body
                tag="article"
                border-variant="dark">
            <b-tabs card>
                <b-tab title="Checking Account" active>
                    <BaseAccountCard v-bind:accounts="checkingAccounts"
                                     v-bind:headerName="checkingAccountLabel"></BaseAccountCard>
                </b-tab>
                <b-tab title="Savings Accounts">
                    <BaseAccountCard v-bind:accounts="savingsAccounts"
                                     v-bind:headerName="savingsAccountsLabel"></BaseAccountCard>
                </b-tab>
                <b-tab title="Credit Accounts">
                    <BaseAccountCard v-bind:accounts="creditAccounts"
                                     v-bind:headerName="creditAccountsLabel"></BaseAccountCard>
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>

<script>

	import BaseAccountCard from "./BaseAccountCard";

	export default {
		name: "AccountsCards",
		components: {BaseAccountCard},
		props: ['checkingAccounts', 'savingsAccounts', 'creditAccounts'],
		data() {
			return {
				checkingAccountLabel: "Checking Account",
				savingsAccountsLabel: "Savings Accounts",
				creditAccountsLabel: "Credit Accounts"
			}
		},

	}
</script>

<style scoped>

</style>