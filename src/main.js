import Vue from 'vue'
import App from './App.vue'
import JQuery from 'jquery'

window.$ = JQuery

Vue.config.productionTip = false

import router from './routes';
import './assets/css/style.css';
import 'animate.css';

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
