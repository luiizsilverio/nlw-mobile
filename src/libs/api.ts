import axios from 'axios'

export const api = axios.create({
  baseURL: "https://nlw-prisma-production.up.railway.app"
  // baseURL: "http://192.168.100.3:3333"
})
