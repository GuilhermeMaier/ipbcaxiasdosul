import axios from "axios";

axios.interceptors.request.use((config) => {
  let configuration = config;
  configuration.baseURL = "https://api.ipbcaxiasdosul.com.br";
  configuration.timeout = 300000;
  return configuration;
});

export default axios;
