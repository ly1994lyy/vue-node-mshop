import { get} from '../utils/http'

export const getGood = (params)=>{
    return get('/good',params)
}

export const getGoodById = (id) => {
    return get(`/good/${id}`)
}