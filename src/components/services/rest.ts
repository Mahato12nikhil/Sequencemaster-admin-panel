import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export default class RestService {
  client: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.client = axios.create(config);

    const reqHandler = (cfg: AxiosRequestConfig): AxiosRequestConfig => {
    
      return cfg;
    };

    const errorHandler = (err: any) => {
      return Promise.reject(err);
    };

    this.client.interceptors.request.use(reqHandler, errorHandler);
  }
  
  get(endpoint: string) {
    return this.client.get<any>(endpoint);
  }

  post(endpoint: string, payload: any) {
    return this.client.post<any>(endpoint, payload);
  }
}
