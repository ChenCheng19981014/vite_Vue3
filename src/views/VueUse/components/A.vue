<style scoped lang="less">
.A {
  width: 30%;
  // height: 50%;
  height: 700px;
  background-color: pink;
  // animation: spin 0.1s infinite linear;
}
</style>
<script setup lang="ts">
import { ref } from "vue";
import { getJson } from "../../../api";

/***
 * 数据请求
 */

const res = await getJson();

const list = JSON.stringify(res);
</script>
<template>
  <div class="A">
    <div>{{ list }}</div>
  </div>
</template>
910618
