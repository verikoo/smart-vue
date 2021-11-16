import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import VueRouter from 'vue-router'
import { i18n } from './i18n';
Vue.use(VueRouter)

import { required, alpha, max, min, between } from 'vee-validate/dist/rules';
import { extend, localize, ValidationProvider, ValidationObserver } from 'vee-validate';
import en from "vee-validate/dist/locale/en.json";
import ka from "vee-validate/dist/locale/ka.json";

localize({
  en,
  ka,
});

extend('required', required);
extend('alpha', alpha);
extend('max', max);
extend('min', min);
extend('between', between);

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  i18n
}).$mount('#app')
