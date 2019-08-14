import axios from 'axios'
import Vue from 'vue';

const http = axios.create({
    baseURL:'http://localhost:3000/api/web'
})

http.interceptors.response.use(res=>{
    return res
},err=>{
    if(err.response.data.message){
        Vue.prototype.$notify(err.response.data.message)
    }
    return Promise.reject(err)
})

export default http