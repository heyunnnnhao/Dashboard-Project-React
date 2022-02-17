import axios, { AxiosResponse, AxiosRequestConfig, AxiosInstance } from 'axios';

const AxiosRequestInstance: AxiosInstance = axios.create({
  timeout: 10000,
  maxRedirects: 5,
});

AxiosRequestInstance.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    return config;
  },
  (error) => {
    console.log(error);
  }
);

AxiosRequestInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error) => {
    console.log(error);
  }
);

export default AxiosRequestInstance;
