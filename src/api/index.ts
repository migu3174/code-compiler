import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || 'https://0774-45-230-240-147.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api
