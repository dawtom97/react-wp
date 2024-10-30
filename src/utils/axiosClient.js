import axios from 'axios';

const axiosClient = axios.create({
  baseURL: "http://localhost/headless/wp-json/wp/v2/", // Zastąp tym adresem URL swoim API
  timeout: 120000, // opcjonalnie: czas oczekiwania na odpowiedź w milisekundach
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default axiosClient;