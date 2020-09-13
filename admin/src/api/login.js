import { post } from '../utils/http'

export const login = (data) =>{
    return post('auth/login',data)
}