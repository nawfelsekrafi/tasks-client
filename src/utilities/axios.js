import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://localhost:5011/api/v1" });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/";
    } else {
      Promise.reject(
        (error.response && error.response.data) || "Something went wrong"
      );
    }
  }
);

export default axiosInstance;
