import axios from "axios";

axios.interceptors.request.use((config) => {
  let configuration = config;
  configuration.baseURL = "http://localhost:3000";
  configuration.timeout = 300000;
  return configuration;
});

export default axios;
