<template>
    <div id="app">
        <b-navbar type="dark" class="nav-background">
            <b-navbar-brand href="#">Budget</b-navbar-brand>
            <div class="px-4" style="color: #fff">Start Date: {{currentStartDate}} </div>
            <div class="px-4" style="color: #fff">End Date: {{currentEndDate}} </div>
            <b-button-group class="px-4">
                <b-button variant="danger">Previous Week</b-button>
                <b-button variant="success">Next Week</b-button>
            </b-button-group>
        </b-navbar>

    <b-container>
        <b-card-group style="max-width:100%; max-height:50%;">
            <b-card
                tag="article"
                style="max-width: 70%"
                header="Current Week Budget"
                border-variant="dark"
            >
                <b-table striped hover 
                    responsive
                    :items="budgetItems" 
                    :head-variant="headVariant"
                    :table-variant="tableVariant"></b-table>
            </b-card>
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
                <b-form-group v-if="recurring">
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

export default {
  name: 'app',
  components: {
  },
  data() {
    return {
        currentStartDate: this.formatDate(this.getPreviousFriday(new Date())),
        currentEndDate: this.formatDate(this.getNextThursday(new Date())),
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
        getPreviousFriday(currentDate){
            currentDate.setDate(currentDate.getDate() + (6 - currentDate.getDay() - 1) - 7);
            return currentDate;
        },
        getNextThursday(currentDate) {
            currentDate.setDate(currentDate.getDate() + (4 - currentDate.getDay()));
            return currentDate;
        },
        formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) 
                month = '0' + month;
            if (day.length < 2) 
                day = '0' + day;

            return [month, day, year].join('-');
        }
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
