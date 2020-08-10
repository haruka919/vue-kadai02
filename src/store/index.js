import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questionnaire: {}
  },
  mutations: {
    save (state, data) {
      state.questionnaire = data
    }
  },
  actions: {
  },
  modules: {
  }
})
