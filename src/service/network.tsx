import axios from "axios";

const BACKEND_URL = 'http://localhost:8080'

export const network = axios.create({ baseURL: BACKEND_URL })
