import axios from "axios";
import { notifyError, notifySuccess } from "../../utils/notify";

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor request
http.interceptors.response.use(
    (response) => {
        // Success global opcional
        const showSuccess = response.config?.headers?.["x-show-success"];

        if (showSuccess && response.data?.message) {
            notifySuccess(response.data.message);
        }

        return response;
    },
    (error) => {
        const message = error.response?.data?.message || "Ocurrió un error inesperado";

        notifyError(message);

        if (error.response?.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/login";
        }

        return Promise.reject(error);
    },
);

export default http;
