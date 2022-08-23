<template>
  <div class="vue-use">
    <A />
    <B />
    <C />
  </div>
</template>

<script lang="ts">
import { useIntersectionObserver } from "@vueuse/core";
import { defineAsyncComponent } from "vue";
import A from "./components/A.vue";
import B from "./components/B.vue";
const C = defineAsyncComponent(() => import("./components/C.vue"));

export default {
  components: { A, B, C },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.vue-use {
  width: 100%;
  height: 100%;
  background-color: #555;
  /* display: flex; */
  /* flex-direction: column; */
  /* flex-wrap: wrap; */
  /* justify-content: center; */
  /* align-items: center; */
}
</style>
