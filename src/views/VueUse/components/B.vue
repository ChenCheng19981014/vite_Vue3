<style scoped lang="less">
.B {
  width: 30%;
  // height: 50%;
  height: 700px;
  background-color: #777;
}
</style>
<script setup lang="ts">
import { ref } from "vue";
import { inject } from "vue";
const data = inject("changeNum");
console.log(data, "data");
</script>
<template>
  <div class="B"></div>
</template>
