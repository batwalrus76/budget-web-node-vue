<template>
  <div id="app">
    <Header v-bind:currentStartDate="currentStartDate"
            v-bind:currentEndDate="currentEndDate"
            v-bind:budgetItems="scheduledBudgetItems"
            v-on:previousWeek="previousWeek()"
            v-on:nextWeek="nextWeek()"
            @budgetFileUpload="budgetFileUpload" :budget_file_data="budget_data"></Header>
    <router-view style="min-width: 100%; min-height: 100%"
                 v-bind:checkingAccounts="checkingAccounts"
                 v-bind:savingsAccounts="savingsAccounts"
                 v-bind:creditAccounts="creditAccounts"
                 v-bind:startDate="startDate"
                 v-bind:endDate="endDate"
                 v-bind:scheduledBudgetItems="scheduledBudgetItems"></router-view>
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
        startDate: null,
        endDate: null,
        currentTimePeriodData: {},
        budget_data: {},
        checkingAccounts: [],
        savingsAccounts: [],
        creditAccounts: [],
        scheduledBudgetItems: [],
      }
    },
    computed: {
      currentDate: function(){
        return new Date();
      },
      currentStartDate: function(){
        let vm = this;
        if(vm.startDate === undefined || vm.startDate === null){
          vm.startDate = vm.calculateStartDate(vm.currentDate);
        }
        return this.formatDate(vm.startDate);
      },
      currentEndDate: function(){
        let vm = this;
        if(vm.endDate === undefined || vm.endDate === null){
          vm.endDate = vm.calculateEndDate(vm.currentDate);
        }
        return this.formatDate(vm.endDate);
      }
    },
    watch: {
      currentDate: function(){
        let vm = this;
        vm.startDate = vm.calculateStartDate(vm.currentDate);
        vm.endDate = vm.calculateEndDate(vm.currentDate);
      }
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
        let vm = this;
        vm.startDate = vm.calculateStartDate(vm.currentDate);
        vm.currentStartDate = vm.formatDate(vm.currentDate);
        vm.endDate = vm.calculateEndDate(vm.currentDate);
        vm.currentEndDate = vm.formatDate(vm.currentDate);
      },
      calculateStartDate: function(currentDate) {
        let previousFridayDiff = 0;
        switch (currentDate.getDay()) {
          case 0:
            previousFridayDiff = -2;
            break;
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
        }
        let tempStartDate = new Date();
        tempStartDate.setDate(currentDate.getDate() + previousFridayDiff);
        tempStartDate.setHours(0,0,0);
        return tempStartDate;
      },
      calculateEndDate: function(currentDate) {
        let nextThursdayDiff = 0;
        switch (currentDate.getDay()) {
          case 0:
            nextThursdayDiff = 4;
            break;
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
        }
        let tempEndDate = new Date();
        tempEndDate.setDate(currentDate.getDate() + nextThursdayDiff);
        tempEndDate.setHours(0,0,0);
        return tempEndDate;
      },
      budgetFileUpload: function(budget_file_data) {
        this.checkingAccounts = [ budget_file_data.checkingAccount ];
        this.savingsAccounts = budget_file_data.savingsAccounts;
        this.creditAccounts = budget_file_data.creditAccounts;
        this.scheduledBudgetItems = budget_file_data.budgetItems;
      },
    }
  };
</script>

<style></style>