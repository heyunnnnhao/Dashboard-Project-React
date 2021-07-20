import axios from 'axios';

const request = axios.create({
  baseURL: './api',
  timeout: 20000,
});

export const getChartData = () => {
  return request({
    method: 'get',
    url: 'chart_data.json',
  });
};

export const getProductCat = () => {
  return request({
    method: 'get',
    url: 'product_cat.json',
  });
};

const baseURL = window.location.origin + '/api/';

export const getProductDataURL = baseURL + 'product_cat.json';
export const getChartDataURL = baseURL + 'chart_data.json';
