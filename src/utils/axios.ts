import { Axios } from "axios";

export const api = new Axios({
  baseURL: process.env.BASE_URL || "http://localhost:3000",
  timeout: 5000,
});
