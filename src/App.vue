<template>
  <div id="app">
    <Header v-bind:currentStartDate="currentStartDate"
            v-bind:currentEndDate="currentEndDate"
            v-bind:checkingAccounts="checkingAccounts"
            v-bind:savingsAccounts="savingsAccounts"
            v-bind:creditAccounts="creditAccounts"
            v-bind:budgetItems="budgetItems"
            v-on:previousWeek="previousWeek()"
            v-on:nextWeek="nextWeek()"
            @budgetFileUpload="budgetFileUpload" :budget_file_data="budget_data"></Header>
    <router-view style="min-width: 100%; min-height: 100%" ></router-view>
  </div>
</template>

<script>

  import Header from "@/components/Header";

  export default {
    name: "App",
    components: {
      Header
    },
    data() {
      return {
        currentDate: new Date(),
        currentStartDate: this.formatCurrentStartDate(new Date()),
        currentEndDate: this.formatCurrentEndDate(new Date()),
        currentTimePeriodData: {},
        budget_data: {},
        checkingAccounts: [{name:"",balance:0.0,type: "Checking"}],
        savingsAccounts: [],
        creditAccounts: [],
        budgetItems: [],
      }
    },
    computed: {

    },
    watch: {

    },
    methods: {
      formatDate(date) {
        const d = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();
        if (month.length < 2)
          month = '0' + month;
        if (day.length < 2)
          day = '0' + day;
        return [month, day, year].join('-');
      },
      previousWeek: function() {
        this.currentDate.setDate(this.currentDate.getDate()-7);
        this.updateCurrentStartEndDates();
      },
      nextWeek: function() {
        this.currentDate.setDate(this.currentDate.getDate()+7);
        this.updateCurrentStartEndDates();
      },
      updateCurrentStartEndDates: function(){
        this.currentStartDate = this.formatCurrentStartDate(this.currentDate);
        this.currentEndDate = this.formatCurrentEndDate(this.currentDate);
      },
      formatCurrentStartDate: function(currentDate) {
        let previousFridayDiff = 0;
        switch (currentDate.getDay()) {
          case 1:
            previousFridayDiff = -3;
            break;
          case 2:
            previousFridayDiff = -4;
            break;
          case 3:
            previousFridayDiff = -5;
            break;
          case 4:
            previousFridayDiff = -6;
            break;
          case 5:
            previousFridayDiff = 0;
            break;
          case 6:
            previousFridayDiff = -1;
            break;
          case 7:
            previousFridayDiff = -2;
            break;
        }
        const startDate = (new Date()).setDate(currentDate.getDate() + previousFridayDiff);
        return this.formatDate(startDate);
      },
      formatCurrentEndDate: function(currentDate) {
        let nextThursdayDiff = 0;
        switch (currentDate.getDay()) {
          case 1:
            nextThursdayDiff = 3;
            break;
          case 2:
            nextThursdayDiff = 2;
            break;
          case 3:
            nextThursdayDiff = 1;
            break;
          case 4:
            nextThursdayDiff = 0;
            break;
          case 5:
            nextThursdayDiff = 6;
            break;
          case 6:
            nextThursdayDiff = 5;
            break;
          case 7:
            nextThursdayDiff = 4;
            break;
        }
        const endDate = (new Date()).setDate(currentDate.getDate() + nextThursdayDiff);
        return this.formatDate(endDate);
      },
      budgetFileUpload: function(budget_file_data) {
        this.checkingAccounts = [ budget_file_data.checkingAccount ];
        this.savingsAccounts = budget_file_data.savingsAccounts;
        this.creditAccounts = budget_file_data.creditAccounts;
        this.budgetItems = budget_file_data.budgetItems;
      },
    }
  };
</script>

<style></style>