<template>
    <b-navbar type="dark" class="nav-background">
        <b-navbar-brand href="#">Budget</b-navbar-brand>
        <div class="px-4" style="color: #fff">Start Date: {{currentStartDate}} </div>
        <div class="px-4" style="color: #fff">End Date: {{currentEndDate}} </div>
        <b-button-group class="px-4">
            <b-button variant="danger">Previous Week</b-button>
            <b-button variant="success">Next Week</b-button>
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
    data() {
      return {
        currentStartDate: this.formatDate(this.getPreviousFriday(new Date())),
        currentEndDate: this.formatDate(this.getNextThursday(new Date()))
      };
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
};
</script>