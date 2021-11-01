import http from "./http-common";
import { AxiosResponse } from "axios";

class NewApiService {
  get(url: string): Promise<AxiosResponse> {
    return http.get(url);
  }

  create(url: string, data: AxiosResponse): Promise<AxiosResponse> {
    return http.post(url, data);
  }

  update(url: string, data: AxiosResponse): Promise<AxiosResponse> {
    return http.put(url, data);
  }

  delete(url: string): Promise<AxiosResponse> {
    return http.delete(url);
  }
}

export default new NewApiService();
