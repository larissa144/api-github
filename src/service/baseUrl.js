import axios from 'axios'

const baseUrl = axios.create({
    baseURL: 'https://api.github.com',
    Headers:{
        Accept: 'application/vnd.github.v3+json',
        
    }
})

export default baseUrl