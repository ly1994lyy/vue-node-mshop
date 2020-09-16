import axios from 'axios';
import { Toast } from 'vant';
import router from '../router'

const http = axios.create({
    baseURL:'http://localhost:3009'
})

http.interceptors.request.use(config=>{
    if(localStorage.adminToken){
        config.headers.Authorization = 'Bearer '+localStorage.adminToken
    }
    return config
},error=>{
    return Promise.reject(error)
})

http.interceptors.response.use(res=>{
    return res
},error=>{
    if(error.response.status===401){
        if(error.response.data.message==='Unauthorized'){
            Toast.error('对不起，请您先登录!')
        }else{
            Toast.error(error.response.data.message)
        }
        router.push('/login')
    }
    return Promise.reject(error)
})

export const get = (url,params) =>{
    return http.get(url,{params})
}

export const post = (url,data) =>{
    return http.post(url,data)
}

export const put = (url,data) =>{
    return http.put(url,data)
}

export const del = (url) =>{
    return http.delete(url)
}
