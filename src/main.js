import Vue from "vue";
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@/assets/styles/scss/main.scss';
Vue.use(VueLodash, {lodash: lodash })
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
