<style scoped lang="less">
.A {
  width: 30%;
  // height: 50%;
  height: 700px;
  background-color: pink;
  // animation: spin 0.1s infinite linear;
}
</style>

<template>
  <div class="A">
    <!-- <div>{{ list }}</div> -->

  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import cc from "npm-cc";
import { ref } from "vue";
import { getJson } from "../../../api";
/***
 * 数据请求
 */

// const res = await getJson();

// const list = JSON.stringify(res);

// let url =
//   "https://img1.baidu.com/it/u=282903700,3028230046&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500";
// let img: any;

// cc.fn.imgUrlToBase64(url, (res: any) => {
//   img = res;
// });
// // 下载
// const downLoad = () => {
//   cc.fn.downloadFile(img, "新图片");
// };
