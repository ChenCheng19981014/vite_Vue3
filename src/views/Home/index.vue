<template>
  <div class="farther">
    <button @click="() => {}">我是弗雷</button>
  </div>
</template>

<script lang="ts" setup>
//@ts-ignore
import MySon from "./../components/son.vue";
import { fn } from "./../../mixin/mixin";

/**
 *  块格式上下文的条件
 *  display inline-block  table-ceil
 *  position 不为 relative 而为absolute static
 *  float 不为:none
 *  overflow 不为visible  只为auto scroll hidden
 *  dynamic island
 */
</script>

<style>
.farther {
  width: 100%;
  height: 100%;
  /* background-color: #555; */
}
</style>
