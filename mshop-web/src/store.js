import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const car = JSON.parse(localStorage.getItem('shopcar') || '[]')

const state = {
  token:'',
  user:{},
  shopcar:car
}

const getters = {
  priceSub:state=>{
    let sumPrice=0;
    state.shopcar.forEach(item => {
      if(item.isSelect==true){
        sumPrice+=item.selectedSkuComb.price*item.selectedNum
      }
    });
    return sumPrice
  }
}

const mutations = {
  setToken(state,token){
    state.token = token
  },
  setLogOut(state,user){
    state.user = user
  },
  setUser(state,user){
    state.user = user
  },
  addShopCar(state,shopcar){
    var flag = false
    state.shopcar.some(item=>{
      if(item.selectedSkuComb.id == shopcar.selectedSkuComb.id){
        item.selectedNum += shopcar.selectedNum
        flag = true
        return true
      }
    })
    if(!flag){
      state.shopcar.push(shopcar)
    }
    //存储到本地
    localStorage.setItem('shopcar',JSON.stringify(state.shopcar))
  },
  updateShopCar(state,newShopCar){
    state.shopcar = newShopCar
    localStorage.setItem('shopcar',JSON.stringify(state.shopcar))
  }
}

const actions = {
  setToken({commit},token){
    commit('setToken',token)
  },
  setUser({commit},user){
    commit('setUser',user)
  },
  setShopCar({commit},shopcar){
    commit('addShopCar',shopcar)
  },
  updateShopCar({commit},newshopcar){
    commit('updateShopCar',newshopcar)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
