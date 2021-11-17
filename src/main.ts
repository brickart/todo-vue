import Vue from 'vue'
import App from './presentation/App.vue'
import router from './presentation/router'
import store from './presentation/store'

import './injection';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
