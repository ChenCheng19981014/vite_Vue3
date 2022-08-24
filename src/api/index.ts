import axios from "./../lib/axios/index";

// 获取数据
export const getJson = () => {
  return axios.request({
    url: "zhihui/app.json",
    method: "GET",
  });
};
