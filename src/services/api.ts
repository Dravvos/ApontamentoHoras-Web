import axios, { type AxiosRequestConfig } from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API,
  withCredentials: true
})
/*
api.interceptors.request.use(async (request) => {
  await headersWithBearer(request)
  return request
})

const headersWithBearer = async (request: AxiosRequestConfig<any>) => {
  const token = await getAccessToken();
  if (request.headers) {
    request.headers.Authorization = `Bearer ${token}`;
    request.headers["Content-Type"] = "application/json";
  }

  return request;
}
*/
