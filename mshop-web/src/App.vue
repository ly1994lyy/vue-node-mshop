<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import jwt_decode from 'jwt-decode'
export default {
  created () {
    if(localStorage.token){
      const user = jwt_decode(localStorage.token)
      this.$store.dispatch('setToken',localStorage.token)
      this.$store.dispatch('setUser',user)
    }else{
      this.$store.dispatch('setToken','')
      this.$store.dispatch('setUser',null)
    };
  },
}
</script>
