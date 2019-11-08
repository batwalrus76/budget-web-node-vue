<template>
    <div>


        <b-container>
            <b-card-group style="max-width:100%;">
                <CurrentBudgetPeriodTable style="max-width: 70%"></CurrentBudgetPeriodTable>
                <AccountsTable style="max-width: 30%"></AccountsTable>
            </b-card-group>
            <b-card-group style="max-width:100%; max-height:25%;">
                <EditCreateBudgetItem style="max-width: 50%"></EditCreateBudgetItem>
                <b-card
                        header="Past Due Budget Items"
                        border-variant="dark"
                        tag="article"
                >
                    <b-table striped hover
                             responsive
                             :items="budgetItems"
                             :head-variant="headVariant"
                             :table-variant="tableVariant"></b-table>
                </b-card>
            </b-card-group>
            <b-card-group>
                <b-card
                        header="Future Budget Items"
                        tag="article"
                        border-variant="dark"
                        style="max-width: 100%"
                >
                    <b-table striped hover
                             responsive
                             :items="budgetItems"
                             :head-variant="headVariant"
                             :table-variant="tableVariant"></b-table>
                </b-card>
            </b-card-group>
        </b-container>
    </div>
</template>

<script>

	import CurrentBudgetPeriodTable from "@/components/CurrentBudgetPeriodTable"
	import AccountsTable from "@/components/AccountsTable"
    import EditCreateBudgetItem from "@/components/EditCreateBudgetItem"

	export default {
		name: 'app',
		components: {
			CurrentBudgetPeriodTable,
			AccountsTable,
            EditCreateBudgetItem
		},
		data() {
			return {
				budgetItems: [
					{age: 40, first_name: 'Dickerson', last_name: 'Macdonald'},
					{age: 21, first_name: 'Larsen', last_name: 'Shaw'},
					{age: 89, first_name: 'Geneva', last_name: 'Wilson'},
					{age: 38, first_name: 'Jami', last_name: 'Carney'}
				],
				headVariant: "dark",
				tableVariant: "secondary",
				recurring: false,
				recurringPeriod: 1
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
