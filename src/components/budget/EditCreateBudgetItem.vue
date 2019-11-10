<template>
    <b-card
            header="Edit/Create Budget Item"
            tag="article"
            border-variant="dark"
    >
        <b-form-group>
            account:
            <b-form-select v-model="selectedAccount" :options="accounts"
                           text-field="name" value-field="name"></b-form-select>
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
        <b-form-group v-show="recurring">
            <b-form-radio v-model="recurringPeriod" name="recurring-radios" value="1">Weekly</b-form-radio>
            <b-form-radio v-model="recurringPeriod" name="recurring-radios" value="2">Biweekly
            </b-form-radio>
        </b-form-group>
    </b-card>
</template>

<script>
	export default {
		name: "EditCreateBudgetItem",
		props: ['accounts','selectedAccount'],
		data () {
			return {
				dueDate: "11-01-2019",
				amount: 0.0,
				recurring: true,
				recurringPeriod: 1
			}
		}
	}
</script>

<style scoped>

</style>