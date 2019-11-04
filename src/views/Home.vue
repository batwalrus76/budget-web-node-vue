<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">budget</h1>
      </div>
    </div>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";


export default {
  name: "home",
  components: {
  },
  mounted() {
  },
  computed: {
    ...mapGetters(["isAuthenticated"])
  }
};
</script>
