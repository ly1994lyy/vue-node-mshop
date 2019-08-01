import axios from 'axios'

const http = axios.create({
    baseURL:'http://localhost:3000/api/admin'
})

export default http