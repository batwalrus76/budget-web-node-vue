<template>
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
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "WeeklyBudget",
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"])
  },
    data() {
      return {
        budgetItems: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ],
        headVariant: "dark",
        tableVariant: "secondary"
      };
  },
  methods: {

  }
};
</script>