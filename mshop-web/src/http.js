import axios from 'axios'

const http = axios.create({
    baseURL:'http://localhost:3000/api/web'
})

export default http