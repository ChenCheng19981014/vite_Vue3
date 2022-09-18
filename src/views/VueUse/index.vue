<template>
  <div class="vue-use">
    <div class="flex-center">
      <div class="loading ring"></div>
    </div>
    <A />
    <B />
    <div ref="target" class="c-father">
      <C v-if="targetIsVisible" />
    </div>
  </div>
</template>

<script lang="ts" setup>
// 引入
import { useIntersectionObserver, useWindowScroll } from "@vueuse/core";
import { defineAsyncComponent, ref, provide, computed } from "vue";
import A from "./components/A.vue";
import B from "./components/B.vue";
const A = defineAsyncComponent(() => import("./components/A.vue"));
const C = defineAsyncComponent(() => import("./components/C.vue"));
// const A = defineAsyncComponent(() => import("./components/A.vue"));

provide("changeNum", 100);

const num = computed(() => {});

/**
 * 功能
 */
const target = ref(null);

const targetIsVisible = ref(false);

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }]: any) => {
    targetIsVisible.value = isIntersecting;
  }
);
const { x, y } = useWindowScroll();

console.log(x.value, y.value, "y");

const loading = ref(true);
// svg图片
const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `;
</script>

<style lang="less">
.vue-use {
  width: 100%;
  height: 100%;
  background-color: #555;

  .c-father {
    width: auto;
    height: auto;
  }
  .flex-center {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    .ring {
      width: 48px;
      height: 48px;
      border: 6px rgb(255 74 105 / 25%) solid;
      border-top: 6px #ff4a69 solid;
      border-radius: 50%;
      animation: spin 0.6s infinite linear;
    }
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
