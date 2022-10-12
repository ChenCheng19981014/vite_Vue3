<template>
  <div class="farther">
    <div class="bar">
      <div class="animation" ref="animaDom"></div>
      <div
        v-for="(i, index) in arr"
        :class="index === cssIndex ? `${i} selectColor` : i"
        @click="changeCss(i, index)"
      >
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
let cssIndex = ref(0);
let animaDom = ref(null);
let lastIndex = 0;
// :class="index === cssIndex ? `${i} bgc` : i"

const changeCss = (i: string, index: any) => {
  if (lastIndex === index) return;

  cssIndex.value = index;

  (animaDom as any).value.style["left"] = `${index * 100 + index * 2 + 1}px `;

  lastIndex = index;

  console.log(index * 100 + index + 1, "left的值");
};

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
  transition: all 1s;
}
.bgc {
  background-color: skyblue;
  opacity: 1 !important;
}

.animation {
  .bgc;
  color: black;
  border-radius: 10px;
  position: absolute;
  left: 1px;
}

.selectColor {
  color: black;
  opacity: 1 !important;
  z-index: 2;
}

.bar > div:hover {
  opacity: 0.1;
  background-color: skyblue;
  transition: all 1s;
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
