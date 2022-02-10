import http from "./httpServices";

import { getJWT } from "../utils/storage";

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

// holding

export async function getHoldings(id) {
  getAndSetJwt();
  return http.get("/api/holding/" + id);
}
export async function createHolding(data) {
  getAndSetJwt();
  return http.post("/api/holding/add", data);
}
export async function updateHolding(data) {
  getAndSetJwt();
  return http.put("/api/holding/update", data);
}
export async function removeHolding(id) {
  getAndSetJwt();
  return http.delete("/api/holding/remove/" + id);
}

// tradebook
export async function getTradebook(id) {
  getAndSetJwt();
  return http.get("/api/tradebook/" + id);
}
export async function createTradebook(data) {
  getAndSetJwt();
  return http.post("/api/tradebook/add", data);
}
export async function updateTradebook(data) {
  getAndSetJwt();
  return http.put("/api/tradebook/update", data);
}
export async function deleteTradebook(id) {
  getAndSetJwt();
  return http.delete("/api/tradebook/remove/" + id);
}

//orderbook
export async function getOrderbook(id) {
  getAndSetJwt();
  return http.get("/api/orderbook/" + id);
}
export async function createOrderbook(data) {
  getAndSetJwt();
  return http.post("/api/orderbook/add", data);
}
export async function updateOrderbook(data) {
  getAndSetJwt();
  return http.put("/api/orderbook/update", data);
}
export async function deleteOrderbook(id) {
  getAndSetJwt();
  return http.delete("/api/orderbook/remove/" + id);
}

/// ledger

export async function getLedger(id) {
  getAndSetJwt();
  return http.get("/api/ledger/" + id);
}
export async function createLedger(data) {
  getAndSetJwt();
  return http.post("/api/ledger/add", data);
}
export async function updateLedger(data) {
  getAndSetJwt();
  return http.put("/api/ledger/update", data);
}
export async function deleteLedger(id) {
  getAndSetJwt();
  return http.delete("/api/ledger/remove/" + id);
}
