<template>
  <div>
    Budget Header
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "RwvBudgetHeader",
  components: {

  },
  props: {

  },
  data() {
    return {
        currentDate: datetime.datetime()
    };
  },
  computed: {
      currentBudgetItems() {

      }
  },
  watch: {
    currentDate(newValue) {
      this.currentDate = newValue;
    }
  },
  mounted() {
    this.fetchHeaderPeriods();
  },
  methods: {
    fetchHeaderPeriods() {

    }
  }
};
</script>
