<template>
    <b-navbar type="dark" class="nav-background">
        <b-navbar-brand href="#">Budget</b-navbar-brand>
        <div class="px-4" style="color: #fff">Start Date: {{currentStartDate}} </div>
        <div class="px-4" style="color: #fff">End Date: {{currentEndDate}} </div>
        <b-button-group class="px-4">
            <b-button variant="danger" v-on:click="$emit('previousWeek')">Previous Week</b-button>
            <b-button variant="success" v-on:click="$emit('nextWeek')">Next Week</b-button>
        </b-button-group>
    </b-navbar>
</template>

<script>
	import { mapGetters } from "vuex";
	export default {
		name: "Header",
		computed: {
			...mapGetters(["currentUser", "isAuthenticated"])
		},
		props: ['currentStartDate', 'currentEndDate'],
		data() {
			return {
			};
		},
		methods: {
		}
	};
</script>