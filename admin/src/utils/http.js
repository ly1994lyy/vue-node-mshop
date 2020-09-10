import axios from 'axios'
import { Loading } from 'element-ui';

const http = axios.create({
    baseURL:'http://localhost:3008'
})

let loading;
function startLoading() {    //使用Element loading-start 方法
  loading = Loading.service({
    lock: true,
    text: '拼命加载中...',
    background:'rgba(0,0,0,0.7)',
  })
}
function endLoading() {    //使用Element loading-close 方法
  loading.close()
}

http.interceptors.request.use(config=>{
    startLoading()
    return config
},error=>{
    return Promise.reject(error)
})

http.interceptors.response.use(res=>{
    endLoading()
    return res
},error=>{
    endLoading()
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

export default http