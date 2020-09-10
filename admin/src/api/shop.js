import { get, put, post, del } from '../utils/http'

export const getShop = (params)=>{
    return get('/shop',params)
}

export const getShopById = (id) => {
    return get(`/shop/${id}`)
}

export const createShop = (data) => {
    return post('/shop',data)
}

export const updateShop = (id,data)=>{
    return put(`/shop/${id}`,data)
}

export const delShop = (id) => {
    return del(`/shop/${id}`)
}