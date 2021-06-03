import axios from 'axios';
import { getItem } from 'services/browserStorage';

const API_BASE_URL = "https://knowledge-base-appl.herokuapp.com";

const Api = axios.create({
  baseUrl: API_BASE_URL,
});

Api.interceptors.request.use(
  (request) => {
    if (!request.url.includes('auth')) {
      request.headers.Authorization = getItem('token');
    }
    return request;
  },
  (error) => {
    Promise.reject(error);
  },
);

export const post = (url, values) => new Promise((resolve, reject) => {
  Api.post(url, values).then((res) => {
    resolve(res);
  }).catch((err) => {
    reject(err);
  });
});

export const get = (url) => new Promise((resolve, reject) => {
  Api.get(url).then((res) => {
    resolve(res);
  }).catch((err) => {
    reject(err);
  });
});

export const patch = (url, values) => new Promise((resolve, reject) => {
  Api.patch(url, values).then((res) => {
    resolve(res);
  }).catch((err) => {
    reject(err);
  });
});

export const deleteApi = (url) => new Promise((resolve, reject) => {
  Api.delete(url).then((res) => {
    resolve(res);
  }).catch((err) => {
    reject(err);
  });
});
