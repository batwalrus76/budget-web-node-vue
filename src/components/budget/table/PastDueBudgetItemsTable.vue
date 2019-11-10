<template>
    <b-card
            header="Past Due Budget Items"
            border-variant="dark"
            tag="article"
    >
        <b-table striped hover
                 responsive
                 :items="pastDueBudgetItems"
                 :head-variant="headVariant"
                 :table-variant="tableVariant"></b-table>
    </b-card>
</template>

<script>
	export default {
		name: "PastDueBudgetItemsTable",
        props: ['pastDueBudgetItems', 'headVariant', 'tableVariant'],
        data() {
            return {
            }
        },
        methods: {}
	}
</script>

<style scoped>

</style>