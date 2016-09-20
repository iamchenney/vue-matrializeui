import Vue from 'vue'
import Vuex from 'vuex'
import { INIT_STORE, GET_POSITIONS, SHOW_POSITION_BATCHES, SHOW_BATCH_RESUMES } from './mutation-types'

Vue.use(Vuex)

const state = {
  positions: [],
  activePosition: {},
  positionBatches: [],
  activeBatch: {},
  batchResumes: []
}

const mutations = {
  [INIT_STORE] (state, data) {
    state.positions = data.positions
  },
  [GET_POSITIONS] (state, data) {
    state.positions = data
  },
  [SHOW_POSITION_BATCHES] (state, data) {
    state.positionBatches = data
  },
  [SHOW_BATCH_RESUMES] (state, data) {
    state.batchResumes = data
  }
}

export default new Vuex.Store({
  state,
  mutations
})
