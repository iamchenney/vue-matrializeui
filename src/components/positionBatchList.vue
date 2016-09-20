<template lang="html">
  <collection with-header>
    <collection-header><h4>批次列表</h4></collection-header>
    <collection-item v-for="batch in positionBatches" :class="{active: batch === activeBatch}">
      <span class="title">{{batch.num}}</span>
      <p>{{batch.time}}
      </p>
      <a href="#" @click="getResumes(batch.num)" class="secondary-content"><icon value="grade"></icon></a>
    </collection-item>
  </collection>
</template>
<script>
import * as actions from '../vuex/actions'
import {activeBatch, positionBatches} from '../vuex/getters'

export default {
  vuex: {
    getters: {
      activeBatch,
      positionBatches
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
