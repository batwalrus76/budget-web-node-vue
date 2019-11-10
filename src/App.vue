<template>
  <div id="app">
    <Header v-bind:currentStartDate="currentStartDate"
            v-bind:currentEndDate="currentEndDate"
            v-on:previousWeek="previousWeek()"
            v-on:nextWeek="nextWeek()"></Header>
    <router-view></router-view>
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
      currentDate: new Date()
    }
  },
  computed: {
    currentStartDate: function() {
      const startDate = (new Date()).setDate(this.currentDate.getDate() + (6 - this.currentDate.getDay() - 1) - 7);
      return this.formatDate(startDate);
    },
    currentEndDate: function() {
      const endDate = (new Date()).setDate(this.currentDate.getDate() + (4 - this.currentDate.getDay()));
      return this.formatDate(endDate);
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
    },
    nextWeek: function() {
      this.currentDate.setDate(this.currentDate.getDate()+7);
    }
  }
};
</script>

<style></style>