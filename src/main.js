import Vue from 'vue';
import './plugins/vuetify';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://euler-room-api.herokuapp.com' : 'http://localhost:3000';
// // axios.defaults.headers.common.Authorization = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

new Vue({
  router,
  store,
  render: h => h(App),

}).$mount('#app');
