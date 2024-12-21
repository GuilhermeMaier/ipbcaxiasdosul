import axios from "axios";

axios.interceptors.request.use((config) => {
  let configuration = config;
  configuration.baseURL = process.env.API_URL;
  configuration.timeout = 300000;
  return configuration;
});

export default axios;
