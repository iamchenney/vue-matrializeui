import Vue from 'vue'
import Sidebar from '../components/sidebar.vue'
import badge from 'material-ui-vue/components/badges/badge.vue'
import Store from '../vuex/store'
import main from './main.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

// or
// Globally register the components that you need
// Material.reg(Vue,['buttons','cards']);

/* eslint-disable no-new */
new Vue({
  el: 'body',
  store: Store,
  components: {
    main, Sidebar, badge
  }
})
