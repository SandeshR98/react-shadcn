import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
});

// Add interceptors if needed
axiosInstance.interceptors.request.use(
	(config) => {
		// Add token to headers if needed
		const token = localStorage.getItem('token');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
	(response) => response,
	(error) => {
		// Handle errors globally
		if (error.response?.status === 401) {
			// Handle unauthorized errors
			console.error('Unauthorized access - redirecting to login');
		}
		return Promise.reject(error);
	}
);

export default axiosInstance;
