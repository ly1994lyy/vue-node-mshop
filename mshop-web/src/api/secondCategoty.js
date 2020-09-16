import { get } from '../utils/http'

export const getSecondCate = (params)=>{
    return get('/secondcategory',params)
}

export const getSecondCateById = (id) => {
    return get(`/secondcategory/${id}`)
}
