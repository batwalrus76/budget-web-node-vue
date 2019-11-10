<template>
    <b-card
        tag="article"
        header="Current Budget Period"
        border-variant="dark"
    >
        <b-table striped hover 
            responsive
            :items="currentBudgetItems"></b-table>
    </b-card>
</template>

<script>

export default {
  name: "CurrentBudgetPeriodTable",
  props: ['currentBudgetItems', 'headVariant', 'tableVariant'],
  computed: {
  },
    data() {
      return {

      };
  },
  methods: {

  }
};
</script>