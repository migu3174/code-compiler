import axios from 'axios'

const api = axios.create({
  baseURL: 'https://0774-45-230-240-147.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api
