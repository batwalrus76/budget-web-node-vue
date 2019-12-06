<template>
    <b-card
            header="Edit/Create Budget Item"
            tag="article"
            border-variant="dark"
    >
        <b-container>
            <b-row>
                <b-col>account:</b-col>
                <b-col>
                    <b-form-select v-model="selectedItem" :options="accounts"
                                      text-field="name" value-field="name"></b-form-select>
                </b-col>
            </b-row>
            <b-row>
                <b-col>amount: $</b-col>
                <b-col>
                    <b-form-input v-model="amount" placeholder="0.00"></b-form-input>
                </b-col>
            </b-row>
            <b-row>
                <b-col>Due Date: </b-col>
                <b-col>
                    <b-form-input v-model="dueDate" placeholder="MM-dd-YYYY"></b-form-input>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-checkbox v-model="recurring" value="true" unchecked-value="false"> Recurring
                    </b-form-checkbox>
                </b-col>
                <b-col>
                    <b-form-select v-model="recurringPeriod" :options="Object.keys(this.$store.state.BudgetingPeriod)" class="w-100"></b-form-select>
                </b-col>
            </b-row>
        </b-container>
    </b-card>
</template>

<script>
	export default {
		name: "EditCreateBudgetItem",
		props: ['accounts','selectedItem'],
		data () {
			return {
				dueDate: "11-01-2019",
				amount: 0.0,
				recurring: true,
				recurringPeriod: this.$store.state.BudgetingPeriod.Weekly
			}
		}
	}
</script>

<style scoped>

</style>