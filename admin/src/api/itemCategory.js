import { get, put, post, del } from '../utils/http'

export const getItemCate = (params)=>{
    return get('/itemcategory',params)
}

export const getItemCateById = (id) => {
    return get(`/itemcategory/${id}`)
}

export const createItemCate = (data) => {
    return post('/itemcategory',data)
}

export const updateItemCate = (id,data)=>{
    return put(`/itemcategory/${id}`,data)
}

export const delItemCate = (id) => {
    return del(`/itemcategory/${id}`)
}