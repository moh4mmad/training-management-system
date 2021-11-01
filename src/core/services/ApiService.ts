import { App } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/core/services/JwtService";
import { AxiosResponse, AxiosRequestConfig } from "axios";

class ApiService {
  public static API_URL = "http://localhost:8000/api";
  public static vueInstance: App;
  public static init(app: App<Element>) {
    ApiService.vueInstance = app;
    ApiService.vueInstance.use(VueAxios, axios);
    //ApiService.vueInstance.axios.defaults.baseURL = "http://localhost:8000/api";
  }

  public static setHeader(): void {
    ApiService.vueInstance.axios.defaults.headers.common[
      "Authorization"
    ] = `Token ${JwtService.getToken()}`;
  }

  public static async get(slug = "" as string): Promise<AxiosResponse> {
    try {
      const response = await ApiService.vueInstance.axios.get(
        `${ApiService.API_URL}/${slug}`
      );
      return response;
    } catch (error) {
      throw new Error(`[KT] ApiService ${error}`);
    }
  }

  public static async post(
    slug: string,
    params: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    try {
      const response = await ApiService.vueInstance.axios.post(
        `${ApiService.API_URL}/${slug}`,
        params
      );
      return response.data;
    } catch (error) {
      throw new Error(`[KT] ApiService ${error}`);
    }
  }

  public static async update(
    slug: string,
    params: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    try {
      const response = await ApiService.vueInstance.axios.put(
        `${ApiService.API_URL}/${slug}`,
        params
      );
      return response.data;
    } catch (error) {
      throw new Error(`[RWV] ApiService ${error}`);
    }
  }

  public static async delete(slug: string): Promise<AxiosResponse> {
    try {
      const response = await ApiService.vueInstance.axios.delete(
        `${ApiService.API_URL}/${slug}`
      );
      return response.data;
    } catch (error) {
      throw new Error(`[RWV] ApiService ${error}`);
    }
  }
}

export default ApiService;
