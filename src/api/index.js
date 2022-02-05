import http from "./httpServices";
import API_PATH from "./config";
import { getJWT } from "../utils/storage";
import { data } from "autoprefixer";

async function getAndSetJwt() {
  http.setJwt(getJWT());
}

export async function loginUser(data) {
  return http.post("/api/signin", data);
}
export async function addUser(data) {
  getAndSetJwt();
  return http.post("/api/user/add", data);
}

export async function fetchAlluser() {
  getAndSetJwt();
  return http.get("/api/users");
}
export async function fetchUser(id) {
  getAndSetJwt();
  return http.get("/api/user/" + id);
}

export async function addHolding({ id, data }) {
  getAndSetJwt();
  return http.put("/api/holidng/user/" + id, data);
}
export async function addOrderbook({ id, data }) {
  getAndSetJwt();
  return http.put("/api/orderbook/user/" + id, data);
}
export async function addTradebook({ id, data }) {
  getAndSetJwt();
  return http.put("/api/tradebook/user/" + id, data);
}
export async function addLedger({ id, data }) {
  getAndSetJwt();
  return http.put("/api/ledger/user/" + id, data);
}
export async function addLedgerData({ id, data }) {
  getAndSetJwt();
  return http.put("/api/user/ledger/" + id, data);
}
export async function addDashboardStats({ id, data }) {
  getAndSetJwt();
  return http.put("/api/user/dashboard/" + id, data);
}
export async function addFundStats({ id, data }) {
  getAndSetJwt();
  return http.put("/api/user/funds/" + id, data);
}
export async function updateProfile({ id, data }) {
  getAndSetJwt();
  return http.put("/api/user/" + id, data);
}
