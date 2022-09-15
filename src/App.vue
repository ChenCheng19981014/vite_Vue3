<script setup lang="ts"></script>

<template>
  <suspense>
    <router-view></router-view>
  </suspense>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100vw;
  height: 100vh;
}
</style>
