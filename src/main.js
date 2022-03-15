import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Carousel3d from 'vue-carousel-3d'

import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css'

Vue.config.productionTip = false
Vue.use(Carousel3d)

new Vue({
  router,
  vuetify,
  render: function (h) { return h(App) },
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app')
