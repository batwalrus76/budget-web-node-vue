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
        <b-card-group style="max-width:100%">
            <b-card
                tag="article"
                style="max-width: 75%"
                header="Current Week Budget"
            >
                <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>
            </b-card>
            <b-card
                header="Accounts"
                tag="article"
                style="max-width: 25%"
            >
                <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>
            </b-card>
        </b-card-group>
        <b-card-group style="max-width:100%">

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
        currentEndDate: this.formatDate(this.getNextThursday(new Date()))
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
