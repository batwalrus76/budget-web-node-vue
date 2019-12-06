<template>
    <b-card
            tag="article"
            border-variant="dark"
    >
        <b-table striped hover
                 responsive
                 :items="budgetItems"
                 :fields="fields"></b-table>
    </b-card>
</template>

<script>
	export default {
		name: "BaseBudgetItemTable",
		props: ['budgetItems'],
		data() {
			return {
				fields: ['name', 'dueDate', 'amount', 'required', 'recurrence']
			}
		}
	}
</script>

<style scoped>

</style>