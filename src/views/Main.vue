<template>
    <b-container>
        <b-row>
            <b-col cols="8">
                <b-card no-body
                        tag="article"
                        border-variant="dark">
                    <b-tabs card>
                        <b-tab title="Past Due Budget Items">
                            <BaseBudgetItemTable v-bind:budgetItems="this.pastDueTimePeriodItems"
                                                 style="min-width: 100%; min-height: 100%">
                            </BaseBudgetItemTable>
                        </b-tab>
                        <b-tab title="Current Budget Items" active>
                            <BaseBudgetItemTable v-bind:budgetItems="this.currentTimePeriodItems"
                                                 style="min-width: 100%; min-height: 100%">
                            </BaseBudgetItemTable>
                        </b-tab>
                        <b-tab title="Future Budget Item">
                            <BaseBudgetItemTable v-bind:budgetItems="this.futureTimePeriodItems"
                                                 style="min-width: 100%; min-height: 100%">
                            </BaseBudgetItemTable>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </b-col>
            <b-col cols="4">
                <b-container>
                    <b-row>
                        <b-col>
                            <AccountsCards v-bind:checkingAccounts="checkingAccounts"
                                           v-bind:savingsAccounts="savingsAccounts"
                                           v-bind:creditAccounts="creditAccounts"
                                           style="min-width: 100%; min-height: 100%"></AccountsCards>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-card no-body
                                    tag="article"
                                    border-variant="dark">
                                <b-tabs card>
                                    <b-tab title="Edit/Create Budget Item" active>
                                        <EditCreateBudgetItem v-bind:selectedItem="selectedItem"
                                                              v-bind:accounts="accounts"
                                                              style="min-width: 100%; min-height: 100%">
                                        </EditCreateBudgetItem>
                                    </b-tab>
                                    <b-tab title="Edit/Create Account">
                                        <EditCreateAccountCard v-bind:selectedAccount="selectedAccount"
                                                               style="min-width: 100%; min-height: 100%">
                                        </EditCreateAccountCard>
                                    </b-tab>
                                </b-tabs>
                            </b-card>
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

	import PastDueBudgetItemsTable from "../components/budget/table/PastDueBudgetItemsTable";
	import FutureBudgetItemsTable from "../components/budget/table/FutureBudgetItemsTable";
	import EditCreateBudgetItem from "../components/budget/EditCreateBudgetItem";
	import EditCreateAccountCard from "../components/account/EditCreateAccountCard";
	import AccountsCards from "../components/account/AccountsCards";
	import BaseBudgetItemTable from "../components/budget/table/BaseBudgetItemTable";

	export default {
		name: 'app',
		components: {
			BaseBudgetItemTable,
			AccountsCards,
			EditCreateBudgetItem,
			EditCreateAccountCard,
			PastDueBudgetItemsTable,
			FutureBudgetItemsTable
		},
		props: ['checkingAccounts', 'savingsAccounts', 'creditAccounts', 'budgetItems',
			'startDate', 'endDate', 'scheduledBudgetItems'],
		data() {
			return {
				selectedAccount: null,
				selectedItem: null,
				headVariant: "dark",
				tableVariant: "secondary",
				fields: ['name', 'balance'],
				currentTimePeriodItems: [],
				futureTimePeriodItems: [],
				pastDueTimePeriodItems: [],
				currentBudgetPeriodLabel: "Current Budget Period",
			}
		},
		computed: {
			accounts: function () {
				let accountsArray = [];
				accountsArray = accountsArray.concat(this.checkingAccounts);
				accountsArray = accountsArray.concat(this.savingsAccounts);
				accountsArray = accountsArray.concat(this.creditAccounts);
				return accountsArray;
			}
		},
		methods: {
			compareDates(date0, date1) {
				let result = 0;
				if (date0.getFullYear() < date1.getFullYear()) {
					result = -1;
				} else if (date0.getFullYear() > date1.getFullYear()) {
					result = 1;
				} else {
					if (date0.getMonth() < date1.getMonth()) {
						result = -1;
					} else if (date0.getMonth() > date1.getMonth()) {
						result = 1;
					} else {
						if (date0.getDate() < date1.getDate()) {
							result = -1;
						} else if (date0.getDate() > date1.getDate()) {
							result = 1;
						}
					}
				}
				return result;
			},
            scheduleBudgetItem(budgetItem) {

            },
			scheduleBudgetItems(budgetItems) {
				let updatedBudgetItems = [];
				budgetItems.forEach(function (budgetItem) {
					let scheduledBudgetItem = budgetItem;
					let dueDates = [];
					//loop through each applicable due date add to dueDates and then replace in scheduledBudgetItem
					scheduledBudgetItem.dueDates = dueDates;
					updatedBudgetItems.unshift(scheduledBudgetItem);
				});
				return updatedBudgetItems;
			},
			determineBudgetItemApplicability(budgetItem, startDate, endDate) {
				let vm = this;
				let budgetItemApplicable = false;
				let dueDates = budgetItem.dueDates;
				if (dueDates === undefined || dueDates.length <= 1) {
					dueDates = [budgetItem.dueDate];
				}
				dueDates.forEach(function (dueDateString) {
					let dueDate = new Date(dueDateString + "T00:00:00");
					if (startDate != null) {
						if (vm.compareDates(startDate, dueDate) <= 0) {
							if (endDate != null) {
								if (vm.compareDates(endDate, dueDate) >= 0) { //This works for time period scheduling
									budgetItemApplicable = true;
								}
							} else { // This works for future scheduling
								budgetItemApplicable = true;
							}
						}
					} else { // This is useful for determine past scheduling
						if (endDate != null && vm.compareDates(endDate, dueDate) >= 0) {
							budgetItemApplicable = true;
						}
					}
				});
				return budgetItemApplicable;
			},
			determineBudgetItemsApplicability(budgetItems, startDate, endDate) {
				let vm = this;
				let applicableBudgetItems = [];
				budgetItems.forEach(function (budgetItem) {
					if (vm.determineBudgetItemApplicability(budgetItem, startDate, endDate)) {
						applicableBudgetItems.unshift(budgetItem);
					}
				});
				return applicableBudgetItems;
			},
			updatePastPresentFutureBudgetItems() {
				if (this.scheduledBudgetItems !== undefined && this.scheduledBudgetItems.length > 0) {
					this.currentTimePeriodItems = this.determineBudgetItemsApplicability(this.scheduledBudgetItems,
							this.startDate, this.endDate);
					let futureDate = new Date(this.endDate.getTime());
					futureDate.setDate(futureDate.getDate() + 1);
					futureDate.setHours(0, 0, 0);
					this.futureTimePeriodItems = this.determineBudgetItemsApplicability(this.scheduledBudgetItems, futureDate);
					let pastDate = new Date(this.startDate.getTime())
					pastDate.setDate(pastDate.getDate() - 1);
					pastDate.setHours(0, 0, 0);
					this.pastDueTimePeriodItems = this.determineBudgetItemsApplicability(this.scheduledBudgetItems, null, pastDate);

				}
			}
		},
		watch: {
			startDate: function () {
				this.updatePastPresentFutureBudgetItems();
			},
			endDate: function () {
				this.updatePastPresentFutureBudgetItems();
			},
			scheduledBudgetItems: function () {
				this.scheduleBudgetItems(this.scheduledBudgetItems);
				this.updatePastPresentFutureBudgetItems();
			}
		}
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
