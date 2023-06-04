import axios from "axios";

export const axiosManager = axios.create({
  baseURL: "http://localhost:8001/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=UTF-8",
  },
});

export async function testConnection() {
  const result = await axiosManager.get("/test");

  console.log(result);
}
