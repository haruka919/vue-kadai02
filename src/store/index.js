import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gender: '',
    year: 1990,
    month: 1,
    day: 1
  },
  mutations: {
    saveGender (state, data) {
      state.gender = data
    },
    saveYear (state, year) {
      state.year = year
    },
    saveMonth (state, month) {
      state.month = month
    },
    saveDay (state, day) {
      state.day = day
    }
  }
})
