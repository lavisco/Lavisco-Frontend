import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import material-icon scss
import "font-awesome/css/font-awesome.min.css";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

//defined as global component
Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);
 
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
