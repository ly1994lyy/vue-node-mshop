import axios from 'axios';
import { Loading, Message } from 'element-ui';
import router from '../router'

const http = axios.create({
    baseURL:'http://localhost:3008'
})

let loading;
function startLoading() {
  loading = Loading.service({
    lock: true,
    text: '拼命加载中...',
    background:'rgba(0,0,0,0.7)',
  })
}
function endLoading() {
  loading.close()
}

http.interceptors.request.use(config=>{
    startLoading()
    if(localStorage.adminToken){
        config.headers.Authorization = 'Bearer '+localStorage.adminToken
    }
    return config
},error=>{
    return Promise.reject(error)
})

http.interceptors.response.use(res=>{
    endLoading()
    return res
},error=>{
    endLoading()
    if(error.response.status===401){
        if(error.response.data.message==='Unauthorized'){
            Message.error('对不起，请您先登录!')
        }else{
            Message.error(error.response.data.message)
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
