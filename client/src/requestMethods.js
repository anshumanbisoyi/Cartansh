import axios from "axios";

const BASE_URL = "https://cartansh.vercel.app/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzQxZDBiODliZmM4ODc3ZDk2YzI4YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDE2NDI4NSwiZXhwIjoxNjc0NDIzNDg1fQ.i5JxiYhPJGMUSqOoGJC-Szin0Vqw40FkVuEmdyiDAps";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
});
