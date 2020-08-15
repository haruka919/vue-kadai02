import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gender: '',
    year: 1990,
    month: 1,
    day: 1,
    question01: '',
    question02: '',
    question03: '',
    consultation: ''
  },
  getters: {
    gender (state) {
      return state.gender
    },
    year (state) {
      return state.year
    },
    month (state) {
      return state.month
    },
    day (state) {
      return state.day
    },
    question01 (state) {
      return state.question01
    },
    question02 (state) {
      return state.question02
    },
    question03 (state) {
      return state.question03
    },
    consultation (state) {
      return state.consultation
    }
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
    },
    saveQuestion01 (state, data) {
      state.question01 = data
    },
    saveQuestion02 (state, data) {
      state.question02 = data
    },
    saveQuestion03 (state, data) {
      state.question03 = data
    },
    saveConsultation (state, data) {
      state.consultation = data
    }
  }
})
