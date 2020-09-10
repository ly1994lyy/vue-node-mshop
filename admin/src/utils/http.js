import axios from 'axios'

const http = axios.create({
    baseURL:'http://localhost:3008'
})

http.interceptors.request.use(config=>{
    return config
},error=>{
    return Promise.reject(error)
})

http.interceptors.response.use(res=>{
    return res
},error=>{
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