import axios from 'axios'

const api = axios.create({
  baseURL: 'https://d95a-45-230-240-152.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api
