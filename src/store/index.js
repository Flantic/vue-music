import Vue from 'vue'
import Vuex from 'vuex'

import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'

Vue.use(Vuex)

export default new Vuex.Store({
  // state 数据
  state,
  //  mutations 触发更新
  mutations,
  // actions 异步事件
  actions,
  // getters 取值
  getters,
  // 开发使用严格模式
  strict: process.env.NODE_ENV !== 'production'
})