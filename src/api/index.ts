import axios from 'axios'

console.log('process.env.BASE_URL', process.env.BASE_URL)

const api = axios.create({
  baseURL: process.env.BASE_URL || 'https://0774-45-230-240-147.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api
