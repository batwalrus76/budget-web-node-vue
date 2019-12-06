import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from "./router";
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(Vuex);

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    BudgetingPeriod: {
      Daily: 1,
      Weekly: 7,
      Biweekly: 14,
      Monthly: 30,
      Yearly: 365,
      Custom: -1
    }
  }
});

new Vue({
    router,
  store,
  render: h => h(App),
  computed: {
      budgeting_periods (){
        return this.$store.state.BudgetingPeriod;
      }
  }
}).$mount('#app');
