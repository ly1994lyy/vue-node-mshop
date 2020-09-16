import { get } from '../utils/http'

export const getItemCate = (params)=>{
    return get('/itemcategory',params)
}

export const getItemCateById = (id) => {
    return get(`/itemcategory/${id}`)
}
