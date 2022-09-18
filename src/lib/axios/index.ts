/**
 * @description axios配置管理
 */

import axios from "axios";
import router from "./../../router/index";
import { ElNotification } from "element-plus";
const NETWORD_SUCCESS_CODE = 200;
const NETWORK_UN_LOGIN_CODE = 500;
// vite的环境变量
const viteUrl = import.meta.env;

console.log(viteUrl.VITE_APP_BASE_HTTP_BASE_URL, "viteUrl");

let instance = axios.create({
  // 基础的url
  baseURL: viteUrl.VITE_APP_BASE_HTTP_BASE_URL,
  // 超时时间
  timeout: 100000,
  // withCredentials: true,  //跨域携带cookie
  // 请求头
  headers: {
    get: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
    post: {
      "Content-Type": "application/json;charset=utf-8",
    },
  } as any,
});

// 添加请求拦截器
instance.interceptors.request.use((config) => {
  return config;
});

// 添加响应拦截器
instance.interceptors.response.use((data) => {
  //成功返回信息
  if (data.status === NETWORD_SUCCESS_CODE) {
    return data.data;
  } else {
    ElNotification.error(data.data.message);
    //如果未登录
    if (data.status == NETWORK_UN_LOGIN_CODE) {
      router.replace({
        name: "Home",
      });
    }
    throw new Error(data.data.message);
  }
});

export default instance;
