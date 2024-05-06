import { API_KEY, BASE_URL } from './constants'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY,
  },
})

export const httpClient = <T>(config: AxiosRequestConfig<T>): Promise<T> => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await instance(config)
      resolve(response.data)
    } catch (error) {
      reject(error)
    }
  })
}
