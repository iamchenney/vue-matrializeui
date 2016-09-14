import Vue from 'vue'
import App from '../components/header.vue'
import Sidebar from '../components/sidebar.vue'
import badge from 'material-ui-vue/components/badges/badge.vue'
import MyTable from '../components/table.vue'

// or
// Globally register the components that you need
// Material.reg(Vue,['buttons','cards']);

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {
    App, Sidebar, badge, MyTable
  }
})
