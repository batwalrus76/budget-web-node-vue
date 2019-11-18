<template>
    <b-container>
        <b-row>
            <b-col>
                <b-container>
                    <b-row>
                        <CurrentBudgetPeriodTable v-bind:currentBudgetItems="budgetItems"
                                                  style="min-width: 100%"
                            ></CurrentBudgetPeriodTable>
                    </b-row>
                    <b-row>
                        <EditCreateBudgetItem v-bind:selectedAccount="selectedAccount"
                                              style="min-width: 100%">
                        </EditCreateBudgetItem>
                    </b-row>
                </b-container>
            </b-col>
            <b-col>
                <AccountsCards v-bind:checkingAccount="checkingAccount"
                               v-bind:savingsAccounts="savingsAccounts"
                               v-bind:creditAccounts="creditAccounts"></AccountsCards>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <PastDueBudgetItemsTable v-bind:pastDueBudgetItems="budgetItems"></PastDueBudgetItemsTable>
            </b-col>
            <b-col>
                <FutureBudgetItemsTable v-bind:futureBudgetItems="budgetItems"></FutureBudgetItemsTable>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

	import CurrentBudgetPeriodTable from "@/components/budget/table/CurrentBudgetPeriodTable"
    import PastDueBudgetItemsTable from "@/components/budget/table/PastDueBudgetItemsTable"
    import FutureBudgetItemsTable from "@/components/budget/table/FutureBudgetItemsTable"
    import EditCreateBudgetItem from "@/components/budget/EditCreateBudgetItem"
	import AccountsCards from "@/components/account/AccountsCards"

	export default {
		name: 'app',
		components: {
			CurrentBudgetPeriodTable,
			AccountsCards,
            EditCreateBudgetItem,
            PastDueBudgetItemsTable,
            FutureBudgetItemsTable
		},
		props: ['checkingAccount', 'savingsAccounts', 'creditAccounts', 'budgetItems'],
		data() {
			return {
				selectedAccount: null,
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
