<template>
    <div>
        <CheckingAccountCard v-bind:checkingAccounts="checkingAccounts"></CheckingAccountCard>
            <SavingsAccountsCard v-bind:savingsAccounts="savingsAccounts"></SavingsAccountsCard>
            <CreditAccountsCard v-bind:credit-accounts="creditAccounts"></CreditAccountsCard>
    </div>
</template>

<script>

    import CheckingAccountCard from "./CheckingAccountCard";
    import SavingsAccountsCard from "./SavingsAccountsCard";
    import CreditAccountsCard from "./CreditAccountsCard";

	export default {
		name: "AccountsCards",
        components: {CreditAccountsCard, SavingsAccountsCard, CheckingAccountCard},
        props: ['checkingAccounts', 'savingsAccounts', 'creditAccounts'],
		data() {
			return {
			}
		},

	}
</script>

<style scoped>

</style>