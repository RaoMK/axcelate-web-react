import axios from "axios";
// import { baseURL } from "@env";
export const baseURL = "http://localhost:8000";

axios.defaults.baseURL = baseURL;

function setJwt(jwt) {
  axios.defaults.headers.authorization = `Bearer ${jwt}`;
}
axios.defaults.headers.common["Content-Type"] = "application/json";

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};

export default http;
