import axios from 'axios';
const api = axios.create({
  baseURL: 'http://192.168.25.6:5000/'
})

export default api;