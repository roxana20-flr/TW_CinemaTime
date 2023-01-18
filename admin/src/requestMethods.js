import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjU3ZDViMDU3ZmY0MzlkNWY5N2UzMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3Mzc0NjYxMCwiZXhwIjoxNjc0MDA1ODEwfQ.rY48-OIUZZpV20qcRJU5OV4-cxDjz5jS5T5PYRxQb3k"


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});