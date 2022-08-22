<style scoped lang="less">
.home {
  width: 100%;
  height: 100%;
  background-color: #777;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    display: flex;
    background-color: #555;
  }
}
</style>
<script setup lang="ts">
import { reactive, ref } from "@vue/reactivity";
import { watch, watchEffect } from "@vue/runtime-core";
import { useRouter } from "vue-router";
let num = ref(1);
let str = reactive({ a: 1 });
let route = useRouter();

// 直接使用watch
// watch(num, (newVal, newOld) => {
//   console.log(newVal, newOld, "new,old");
// });

/**
 * 普通监听
 */
// watch([num, str], (newVal, newOld) => {
//   console.log(newVal, newOld, "new,old");
// });

/**
 * 深度监听
 */
// watchEffect(() => {
//   console.log(num);
// });

/**
 * 监听路由
 */
// watch(
//   () => route.currentRoute.value,
//   (newVal) => {
//     console.log(newVal, "newVal");
//   },
//   {
//     immediate: true,
//     deep: true,
//   }
// );

/**
 * Vue3的钩子函数
 */
const ref1 = ref<string>("123");
const ref2 = ref<number>(123);
</script>
<template>
  <div class="home">
    <div class="content">
      <h1>home页面</h1>
      <hr />
      <h2>{{ num }}</h2>
      <hr />
      <h2>{{ str }}</h2>
      <hr />
      <input type="text " v-model="num" />
      <hr />
      <input type="text " v-model="str.a" />
    </div>
  </div>
</template>
