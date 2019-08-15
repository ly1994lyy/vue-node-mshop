import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  token:'',
  user:{},
}

const getters = {
  
}

const mutations = {
  setToken(state,token){
    state.token = token
  },
  setUser(state,user){
    state.user = user
  }
}

const actions = {
  setToken({commit},token){
    commit('setToken',token)
  },
  setUser({commit},user){
    commit('setUser',user)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
