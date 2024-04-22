import axios from "axios";

const reqInstance = axios.create({
  baseURL: "https://fe-task-api.mainstack.io",
  timeout: 10000
});

export default reqInstance;
