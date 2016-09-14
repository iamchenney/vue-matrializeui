import Vue from 'vue'
import App from '../App'
import { alert, accordion, panel } from 'vue-strap'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {
    App,
    alert,
    accordion,
    panel,
    myAlert: {
      template: '<p>{{ msg }}</p>',
      props: ['msg']
    }
  },
  data: {
    showRight: false,
    showTop: false,
    currentView: 'alert',
    message: '你好，这是一个数据中的信息',
    msg: '打发士大夫'
  },
  methods: {
    changeView: function () {
      console.log('changeView')
      window.alert(111)
      this.currentView = 'myAlert'
    }
  }

})
