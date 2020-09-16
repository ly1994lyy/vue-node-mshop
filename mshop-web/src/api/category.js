import { get } from '../utils/http'

export const getCate = (params)=>{
    return get('/category',params)
}

export const getCateById = (id) => {
    return get(`/category/${id}`)
}
