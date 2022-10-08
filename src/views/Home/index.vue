<template>
  <div class="farther">
    <div class="bar">
      <div class="animation"></div>
      <div v-for="(i, index) in arr" :class="i" @click="changeCss(i, index)">
        {{ i }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
//@ts-ignore
import MySon from "./../components/son.vue";
import { myMixins } from "../../mixins";
import { getJson } from "../../api";
import { fn } from "./../../mixin/mixin";
import { ref } from "vue";

const arr = ["a", "b", "c"];
let cssIndex = ref(-1);

// :class="index === cssIndex ? `${i} bgc` : i"

const changeCss = (i: string, index: any) => {
  // cssIndex.value = index;
  console.log(index, "index");
};

console.time("计时器名称");
Array.from({ length: 10000001 });

// for (let index = 0; index < 1000; index++) {
//   // new Array(1000).fill("");
//   Array.from({ length: 1000 });
// }
console.timeEnd("计时器名称");
console.time("计时器名称");

// new Array(10000001).fill("").map((I) => {
//   console.log(I, "I");
// });

const a = new Array(20000).join("x");
console.log(a, "a");
console.timeEnd("计时器名称");

/**
 *  块格式上下文的条件
 *  display inline-block  table-ceil
 *  position 不为 relative 而为absolute static
 *  float 不为:none
 *  overflow 不为visible  只为auto scroll hidden
 *  dynamic island
 */
</script>

<style lang="less">
.farther {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #555;
}
.farther .bar {
  width: auto;
  display: flex;
  justify-content: center;
  position: relative;
}
.bar > div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  transition: all 0.2s ease-in-out;
}
.bgc {
  background-color: skyblue;
  opacity: 1 !important;
}

.animation {
  .bgc;
  border-radius: 10px;
  position: absolute;
  width: -100px !important;
}

.bar > div:hover {
  opacity: 0.2;
  background-color: skyblue;
}

.a {
  border: 1px solid #888;
  border-radius: 10px;
}
.b {
  border: 1px solid #888;
  border-radius: 10px;
}
.c {
  border: 1px solid #888;
  border-radius: 10px;
}
</style>
