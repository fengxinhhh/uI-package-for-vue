import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import fxVueUi from 'ui-package-for-vue'

Vue.use(ElementUI)
Vue.use(fxVueUi)
console.log(Vue.use(fxVueUi))
Vue.prototype.$bus = new Vue()
new Vue({
  el: '#app',
  render: h => h(App)
})
