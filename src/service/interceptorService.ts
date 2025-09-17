import apiClient from "@/types/client";

const interceptorService = {
  setup() {
    apiClient.interceptors.request.use(
      (config) => {
        const isDev = import.meta.env.MODE === "development";

        const token = isDev
          ? import.meta.env.VITE_DEV_FAKE_TOKEN
          : localStorage.getItem("token");

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      (error) => Promise.reject(error),
    );

    apiClient.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }

        return Promise.reject(error);
      },
    );
  },
};

export default interceptorService;
