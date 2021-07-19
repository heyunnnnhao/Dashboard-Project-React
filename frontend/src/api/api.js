import axios from "axios";

const request = axios.create({
  baseURL:'./example.json',
  timeout: 20000,
});

export const getAllData = () => {
  return request({
    method: 'get',
    url: '',
  });
};

