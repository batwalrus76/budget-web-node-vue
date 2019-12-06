<template>
    <b-card
            header="Edit/Create Account"
            tag="article"
            border-variant="dark"
    >
        <b-container>
            <b-row>
                <b-col>name:</b-col>
                <b-col>
                    <b-form-input v-model="name"></b-form-input>
                </b-col>
            </b-row>
            <b-row>
                <b-col>balance: $</b-col>
                <b-col>
                    <b-form-input v-model="balance" placeholder="0.00"></b-form-input>
                </b-col>
            </b-row>
            <b-row>
                <b-col>Type: </b-col>
                <b-col>
                    <b-form-select v-model="selectedAccountType" :options="accountTypes" ></b-form-select>
                </b-col>
            </b-row>
        </b-container>
    </b-card>
</template>

<script>
	export default {
		name: "EditCreateAccountCard",
        props: ['selectedAccount'],
        data () {
            return {
                name: "",
                balance: 0.0,
                type: "Checking",
                selectedAccountType: null,
                accountTypes: ["Checking", "Savings", "Credit"]
            }
        }
	}
</script>

<style scoped>

</style>