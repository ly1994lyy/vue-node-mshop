import { get, put, post, del } from '../utils/http'

export const getGood = (params)=>{
    return get('/good',params)
}

export const getGoodById = (id) => {
    return get(`/good/${id}`)
}

export const createGood = (data) => {
    return post('/good',data)
}

export const updateGood = (id,data)=>{
    return put(`/good/${id}`,data)
}

export const delGood = (id) => {
    return del(`/good/${id}`)
}