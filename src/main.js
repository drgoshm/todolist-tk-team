import Vue from 'vue'
//import VueFire from 'vuefire'
import App from './App.vue'
import store from './store'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsisH, faPen, faCheck, faTimes, faAngleLeft, faAngleDoubleLeft, faAngleRight, faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEllipsisH, faPen, faCheck, faTimes, faAngleLeft, faAngleDoubleLeft, faAngleRight, faAngleDoubleRight)

Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false

//Vue.use(VueFire)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
