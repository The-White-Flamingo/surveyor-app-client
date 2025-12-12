import axios from "axios";

const apiInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "https://an-site-solutions-backend-1.onrender.com/api",
    withCredentials: true,
});

apiInstance.interceptors.request.use(
    (res) => res,
    async (error) => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try{
                await axios.post("/auth/refresh-token");
                return apiInstance(originalRequest);
            }catch (err){
                console.log("Refresh token failed:", err);
                return Promise.reject(err);
            }
        }
        return Promise.reject(error);
    }
);

export default apiInstance;