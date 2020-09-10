import { get, put, post, del } from '../utils/http'

export const getSecondCate = (params)=>{
    return get('/secondcategory',params)
}

export const getSecondCateById = (id) => {
    return get(`/secondcategory/${id}`)
}

export const createSecondCate = (data) => {
    return post('/secondcategory',data)
}

export const updateSecondCate = (id,data)=>{
    return put(`/secondcategory/${id}`,data)
}

export const delSecondCate = (id) => {
    return del(`/secondcategory/${id}`)
}