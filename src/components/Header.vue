<template>
    <b-navbar type="dark" class="nav-background">
        <b-navbar-brand href="#">Budget</b-navbar-brand>
        <div class="px-2" style="color: #fff">Start Date: {{currentStartDate}}</div>
        <div class="px-2" style="color: #fff">End Date: {{currentEndDate}}</div>
        <b-button-group class="px-2">
            <b-button variant="danger" v-on:click="$emit('previousWeek')">Previous</b-button>
            <b-button variant="success" v-on:click="$emit('nextWeek')">Next</b-button>
        </b-button-group>
        <b-form-select v-model="selected_period" :options="Object.keys(this.$store.state.BudgetingPeriod)" class="w-25"></b-form-select>
        <b-form-file
                class="w-25"
                v-model="budget_file"
                :state="Boolean(budget_file)"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
        ></b-form-file>
    </b-navbar>
</template>

<script>
	import {mapGetters} from "vuex";

	export default {
		name: "Header",
		computed: {
			...mapGetters(["currentUser", "isAuthenticated"]),
		},
		props: ['currentStartDate', 'currentEndDate'],
		data() {
			return {
				budget_file: null,
				budget_data: {},
				selected_period: this.$store.state.BudgetingPeriod.Weekly
			};
		},
		watch: {
			budget_file: function () {
				let reader = new FileReader();
				reader.readAsText(this.budget_file, "UTF-8");
				reader.onload = evt => {
					this.budget_data = JSON.parse(evt.target.result);
					this.$emit("budgetFileUpload", this.budget_data);
				}
			}
		},
		methods: {}
	};
</script>