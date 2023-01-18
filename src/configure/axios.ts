import axios from "axios";
import { checkStatusCode } from "./utils/checkStatusCode";

const baseUrl = process.env.REACT_APP_API_URL;

const axiosInstance = axios.create({
  baseURL: `${baseUrl}/`,
});

axiosInstance.interceptors.response.use(
  (response) => {
    const statusCode = checkStatusCode(response.status);
    if (statusCode) {
      return response;
    }
  },
  (error) => {
    const statusCode = checkStatusCode(error.response.status);
    if (!statusCode) {
      throw new Error(error.response.data.ErrorMessage);
    }
  }
);

axiosInstance.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${window.localStorage.getItem(
    "zoodocToken"
  )}`;

  return config;
});

export default axiosInstance;
