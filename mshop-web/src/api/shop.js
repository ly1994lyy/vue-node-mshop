import { get} from '../utils/http'

export const getShop = (params)=>{
    return get('/shop',params)
}

export const getShopById = (id) => {
    return get(`/shop/${id}`)
}
