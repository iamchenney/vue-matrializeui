<template lang="html">
  <div class="row">
    <div class="col s4">
      <position-list></position-list>
    </div>
    <div class="col s3">
      <position-batch-list></position-batch-list>
    </div>
    <div class="col s5">
      <resume-list></resume-list>
    </div>
  </div>
</template>

<script>
import PositionList from '../components/positionList.vue'
import PositionBatchList from '../components/positionBatchList.vue'
import ResumeList from '../components/resumeList.vue'
import {init} from '../vuex/actions'

export default {
  data () {
    return {}
  },
  computed: {},
  vuex: {
    actions: {
      init: init
    }
  },
  ready () {
    console.log('how are you!')
    this.init()
    console.log('init')
  },
  attached () {},
  methods: {},
  components: {
    PositionList, PositionBatchList, ResumeList
  }
}
</script>

<style lang="css">
</style>
