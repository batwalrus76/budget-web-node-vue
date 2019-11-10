<template>
    <div>
        <b-container>
            <b-card-group style="max-width:100%;">
                <CurrentBudgetPeriodTable v-bind:currentBudgetItems="budgetItems"
                                          style="max-width: 70%"></CurrentBudgetPeriodTable>
                <AccountsTable v-bind:accounts="accounts"
                               style="max-width: 30%"></AccountsTable>
            </b-card-group>
            <b-card-group style="max-width:100%; max-height:25%;">
                <EditCreateBudgetItem v-bind:accounts="accounts"
                                      v-bind:selectedAccount="selectedAccount"
                                      style="max-width: 50%"></EditCreateBudgetItem>
                <PastDueBudgetItemsTable v-bind:pastDueBudgetItems="budgetItems"
                                         style="max-width: 50%"></PastDueBudgetItemsTable>
            </b-card-group>
            <FutureBudgetItemsTable v-bind:futureBudgetItems="budgetItems"
                                    style="max-width: 100%"></FutureBudgetItemsTable>
        </b-container>
    </div>
</template>

<script>

	import CurrentBudgetPeriodTable from "@/components/budget/table/CurrentBudgetPeriodTable"
    import PastDueBudgetItemsTable from "@/components/budget/table/PastDueBudgetItemsTable"
    import FutureBudgetItemsTable from "@/components/budget/table/FutureBudgetItemsTable"
    import EditCreateBudgetItem from "@/components/budget/EditCreateBudgetItem"
	import AccountsTable from "@/components/account/AccountsTable"

	export default {
		name: 'app',
		components: {
			CurrentBudgetPeriodTable,
			AccountsTable,
            EditCreateBudgetItem,
            PastDueBudgetItemsTable,
            FutureBudgetItemsTable
		},
		data() {
			return {
				selectedAccount: null,
                accounts: [
                    {name: 'checkingAccount', balance: 500.00},
                    {name: 'savingsAccount', balance: 500.00}
                ],
                budgetItems: [
                    { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                    { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                    { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                    { age: 38, first_name: 'Jami', last_name: 'Carney' }
                ],
                headVariant: "dark",
                tableVariant: "secondary"
			}
		},
		methods: {}
	}
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Lato:400,700');

    body {
        background: #EEF1F4 !important;
        font-family: 'Lato', sans-serif !important;
    }

    .nav-background {
        background: #353535;
    }
</style>
