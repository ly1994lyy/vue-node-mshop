import { get, put, post, del } from '../utils/http'

export const getCate = (params)=>{
    return get('/category',params)
}

export const getCateById = (id) => {
    return get(`/category/${id}`)
}

export const createCate = (data) => {
    return post('/category',data)
}

export const updateCate = (id,data)=>{
    return put(`/category/${id}`,data)
}

export const delCate = (id) => {
    return del(`/category/${id}`)
}