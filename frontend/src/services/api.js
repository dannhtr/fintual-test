import axios from "axios"
import dotenv from "dotenv"

dotenv.config()

export default class API {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL
  }

  get(endPoint) {
    return axios.get(`${this.baseUrl}/${endPoint}`)
  }
}
