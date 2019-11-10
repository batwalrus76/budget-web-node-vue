<template>
    <b-card
            header="Future Budget Items"
            tag="article"
            border-variant="dark"
            style="max-width: 100%"
    >
        <b-table striped hover
                 responsive
                 :items="futureBudgetItems"
                 :head-variant="headVariant"
                 :table-variant="tableVariant"></b-table>
    </b-card>
</template>

<script>
	export default {
		name: "FutureBudgetItemsTable",
        props: ['futureBudgetItems', 'headVariant', 'tableVariant'],
		data() {
			return {

			}
		}
	}
</script>

<style scoped>

</style>