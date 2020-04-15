import Vue from 'vue';
import App from './App.vue';
import router from './router'
import './css/index.css'
import './plugins/element.js'

Vue.config.productionTip = process.env.NODE_ENV === 'production';
console.log(process.env.NODE_ENV);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");