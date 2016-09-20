<template lang="html">
  <collection with-header>
    <collection-header><h4>简历列表</h4></collection-header>
    <collection-item v-for="position in positions">
      <span class="title">{{position.title}}</span>
      <p>{{position.companyName}} <br>
          {{position.descr}}
      </p>
      <a href="#" @click="getPositionBatches(position.id)" class="secondary-content"><icon value="grade"></icon></a>
    </collection-item>
  </collection>
</template>
<script>
import * as actions from '../vuex/actions'
import {activePosition, positions} from '../vuex/getters'

export default {
  vuex: {
    getters: {
      activePosition,
      positions
    },
    actions
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {
    'collection': require('material-ui-vue/components/collections/collection.vue'),
    'collection-header': require('material-ui-vue/components/collections/collection-header.vue'),
    'collection-item': require('material-ui-vue/components/collections/collection-item.vue'),
    'icon': require('material-ui-vue/components/icons/icon.vue')
  }
}
</script>

<style lang="css">
</style>
