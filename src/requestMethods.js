import axios from "axios"

const BASE_URL = 'http://localhost:3333/'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjg5MGZiNzlhZTY4MDRkODA0M2QwZSIsImlhdCI6MTY3NDAwMjAxOSwiZXhwIjoxNjc0MjYxMjE5fQ.y2DL4M8AHg9sSVqafEMm15eFSjEBy08gNUyhaqLLjOI'

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` }
})