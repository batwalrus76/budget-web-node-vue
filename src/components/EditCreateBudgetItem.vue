<template>
    <b-card
            header="Edit/Create Budget Item"
            tag="article"
            border-variant="dark"
    >
        <b-form-group>
            account:
            <b-form-select v-model="account" :options="accounts"></b-form-select>
        </b-form-group>
        <b-form-group>
            amount: $
            <b-form-input v-model="amount" placeholder="0.00"></b-form-input>
        </b-form-group>
        <b-form-group>
            Due Date:
            <b-form-input v-model="dueDate" placeholder="MM-dd-YYYY"></b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-checkbox v-model="recurring" value="true" unchecked-value="false"> Recurring
            </b-form-checkbox>
        </b-form-group>
        <b-form-group v-show="recurring" v-hide="!recurring">
            <b-form-radio v-model="recurringPeriod" name="recurring-radios" value="1">Weekly</b-form-radio>
            <b-form-radio v-model="recurringPeriod" name="recurring-radios" value="2">Biweekly
            </b-form-radio>
        </b-form-group>
    </b-card>
</template>

<script>
	export default {
		name: "EditCreateBudgetItem",
      data () {
			return {

							accounts: [
								{name: 'checkingAccount', balance: 500.00},
								{name: 'savingsAccount', balance: 500.00}
							]
            }
      }
	}
</script>

<style scoped>

</style>