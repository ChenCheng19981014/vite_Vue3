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

    <button @click="downLoad">下载</button>
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

let url =
  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic1.bigstockphoto.com%2Fthumbs%2F2%2F4%2F7%2Flarge1500%2F74295409.jpg&refer=http%3A%2F%2Fstatic1.bigstockphoto.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664350962&t=4a2f7fc1fd0daa1b1e56bfc38e6ed706";

let img = "";

(cc as any).fn.imgUrlToBase64(url, (res: any) => {
  console.log(res, "走走");
  img = res;
});

const downLoad = () => {
  (cc as any).fn.downloadFile(img, "图片");
};
</script>
