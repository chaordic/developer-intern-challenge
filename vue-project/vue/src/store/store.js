import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    url: {
      url: '',
      shortened: false
    },
    topHits: [],
    totalHits: 3
  },
  getters: {
    url (state) {
      return state.url.url
    },
    shortened (state) {
      return state.url.shortened
    },
    topHits (state) {
      return state.topHits
    },
    totalHits (state) {
      return state.totalHits
    }
  }
})
