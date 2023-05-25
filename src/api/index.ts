import axios from 'axios'

const api = axios.create({
  baseURL: 'https://dce5-45-230-240-147.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api
