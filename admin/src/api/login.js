import { get } from '../utils/http'

export const login = (data) =>{
    return get('login',data)
}