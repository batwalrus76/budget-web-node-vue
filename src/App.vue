<template>
  <div id="app">
  <b-navbar type="dark" class="nav-background">

    <b-navbar-brand href="#">Budget</b-navbar-brand>

</b-navbar>

    <b-container>
        <b-row class="mt-5">
            <b-form-group id="input-group-1" label="Start Date:" label-for="input-1">
                <b-form-input id="input-1" v-model="this.currentStartDate" placeholder="Current Start Date"></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="End Date:" label-for="input-2">
                <b-form-input id="input-2" v-model="this.currentEndDate" placeholder="Current End Date"></b-form-input>
            </b-form-group>
        </b-row>
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
      show: true,
      currentStartDate: Date.now().toDateString(),
      currentEndDate: "11-10-2019"
    }
  },
  methods: {
    handleClick() {
      this.showDismissibleAlert = true
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
