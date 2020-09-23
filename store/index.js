import Vue from 'vue'
import Vuex from 'vuex'
import  * as getters from './getters'
import  * as actions from './actions'
import  * as mutations from './mutations'


Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    coursesList: [],
    lessonsList: [],
    currentCourseId: 1
  },
  actions,
  getters,
  mutations,
})

export default store

