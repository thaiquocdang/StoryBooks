import axios from 'axios'

export const axiosWrapper = async (url, method = 'get', data) => {
  return axios({
    method,
    url,
    data,
    baseURL: 'http://localhost:3000',
  })
}
