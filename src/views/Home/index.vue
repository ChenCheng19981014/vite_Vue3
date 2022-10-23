<template>
  <div class="farther">
    <div class="box"></div>
  </div>
</template>

<script setup lang="ts">
import { TweenMax } from "gsap";
import { ref, onMounted } from "vue";

interface Function1 {
  func(str: string): void;
}

type Function2 = (a: string, b: string) => {};

const fn1: Function1["func"] = (str) => {
  return str;
};

enum Function3 {
  name,
  age,
  address,
}

let arr: Array<string> = [];
let arr2: string[] = [];

const fn3 = <T>(param: T): T => {
  return param;
};

let num3 = fn3<number>(123);

console.log(num3, "num3");

onMounted(() => {
  function init() {
    const winWidth = document.documentElement.clientWidth;
    const winHeight = document.documentElement.clientHeight;
    // 屏幕比
    const winScale = winWidth / winHeight;

    let page = document.querySelector(".farther");
    const pageWidth = 750;
    const pageHeight = 1334;
    // 视口比
    const pageScale = pageWidth / pageHeight;

    const origin = "50% 50% 0";

    let initialScale = 1;

    if (winScale > pageScale) {
      // 宽度长了，但是高度不够
      // 高度占满，宽度水平居中
      console.log("高度占满，宽度水平居中");
      initialScale = winHeight / pageHeight;
    } else {
      console.log("宽度占满，高度垂直居中");
      // 高度长了，但是宽度不够
      // 宽度占满，高度垂直居中
      initialScale = winWidth / pageWidth;
    }

    (page as any).style.width = pageWidth + "px";
    (page as any).style.height = pageHeight + "px";
    (page as any).style.transform = "scale(" + initialScale + ")";
    (page as any).style.transformOrigin = origin;
    (page as any).style.left = (pageWidth - winWidth) / -2 + "px";
    (page as any).style.top = (pageHeight - winHeight) / -2 + "px";
  }
  init();
  window.addEventListener("resize", init);
});
</script>

<style scoped>
.farther {
  width: 750px;
  height: 1334px;
  position: absolute;
  left: 0;
  top: 0;
  border: 1px solid red;
  position: relative;
  background-color: #666;
}
.farther .box {
  width: 91px;
  height: 92px;
  position: absolute;
  left: 500px;
  top: 15px;
  background-color: pink;
}
</style>
