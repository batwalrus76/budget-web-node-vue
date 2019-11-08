<template>
    <div>


    <b-container>
        <b-card-group style="max-width:100%; max-height:50%;">
            <WeeklyBudget ></WeeklyBudget>
            <b-card
                header="Accounts"
                tag="article"
                border-variant="dark"
                style="max-width: 30%"
            >

                <b-table striped hover
                    :items="accounts"
                    :head-variant="headVariant"
                    :table-variant="tableVariant"></b-table>
            </b-card>
        </b-card-group>
        <b-card-group style="max-width:100%; max-height:25%;">
            <b-card
                header="Edit/Create Budget Item"
                tag="article"
                border-variant="dark"
                style="max-width: 50%"
            >
                <b-form-group>
                    account: <b-form-select v-model="account" :options="accounts"></b-form-select>
                </b-form-group>                    
                <b-form-group>
                    amount: $ <b-form-input v-model="amount" placeholder="0.00"></b-form-input>
                </b-form-group>
                <b-form-group>    
                    Due Date: <b-form-input v-model="dueDate" placeholder="MM-dd-YYYY"></b-form-input>
                </b-form-group>
                <b-form-group>    
                    <b-form-checkbox v-model="recurring" value="true" unchecked-value="false"> Recurring</b-form-checkbox>
                </b-form-group>
                <b-form-group v-show="recurring" v-hide="!recurring">
                    <b-form-radio v-model="recurringPeriod" name="recurring-radios" value="1">Weekly</b-form-radio>
                    <b-form-radio v-model="recurringPeriod" name="recurring-radios" value="2">Biweekly</b-form-radio>
                </b-form-group>
            </b-card>
            <b-card
                header="Past Due Budget Items"
                border-variant="dark"
                tag="article"
            >
            <b-table striped hover 
                responsive
                :items="budgetItems" 
                :head-variant="headVariant"
                :table-variant="tableVariant"></b-table>
            </b-card>
        </b-card-group>    
        <b-card-group>
                <b-card
                    header="Future Budget Items"
                    tag="article"
                    border-variant="dark"
                    style="max-width: 100%"
                >
                <b-table striped hover 
                    responsive
                    :items="budgetItems" 
                    :head-variant="headVariant"
                    :table-variant="tableVariant"></b-table>
                </b-card>
        </b-card-group>
    </b-container>
  </div>
</template>

<script>

import WeeklyBudget from "@/components/WeeklyBudget"

export default {
  name: 'app',
  components: {
      WeeklyBudget
  },
  data() {
    return {
        budgetItems: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ],
        accounts: [
            { name: 'checkingAccount', balance: 500.00},
            { name: 'savingsAccount', balance: 500.00}
        ],
        headVariant: "dark",
        tableVariant: "secondary",
        recurring: false,
        recurringPeriod: 1
    }
  },
  methods: {

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
