
import {INIT_STORE, GET_POSITIONS, SHOW_POSITION_BATCHES, SHOW_BATCH_RESUMES} from './mutation-types'

const initPosition = {
  id: +new Date(),
  companyName: '北京华戎京盾科技有限公司',
  title: 'Java软件工程师',
  descr: '软件工程师，Java'
}

const initData = {
  positions: [initPosition],
  activePosition: initPosition
}

export const init = function ({dispatch}) {
  console.log('actions init....')
  dispatch(INIT_STORE, initData)
}

export const getPositions = function (store, pageNumber) {
  var positions = []

  for (var i = 0; i < 10; i++) {
    var position = {
      id: +new Date(),
      companyName: '北京华戎京盾科技有限公司' + i,
      title: 'Java软件工程师',
      descr: '软件工程师，Java'
    }
    positions[i] = position
  }
  store.dispatch(GET_POSITIONS, positions)
}

export const getPositionBatches = function (store, positionId) {
  console.log(positionId)
  store.state.activePosition = store.state.positions.filter(position => position.id === positionId)[0] || {}
  var batches = []
  for (var i = 0; i < 5; i++) {
    var batch = {
      id: +new Date(),
      num: 'BBBBBB' + i,
      time: new Date()
    }
    batches[i] = batch
  }
  store.dispatch(SHOW_POSITION_BATCHES, batches)
}

export const getResumes = function (store, batchId) {
  console.log(batchId)
  store.state.activeBatch = store.state.positionBatches.filter(batch => batch.num === batchId)[0] || {}

  this.$http.get('/', {timeout: 1200}).then(function (response) {
    console.log('success')
    store.dispatch(SHOW_BATCH_RESUMES, batchId)
  }, function (response) {
    console.log('failed')
    store.dispatch(SHOW_BATCH_RESUMES, batchId)
  }).catch(function (response) {
    console.log(response)
    store.dispatch(SHOW_BATCH_RESUMES, batchId)
  })
}
