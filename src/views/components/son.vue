<template>
  <transition name="modal">
    <div class="son" v-show="props.show">
      <h1>子类</h1>
      <button @click="closeSon" class="close">关闭子类</button>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const props = defineProps({
  show: {
    type: Object,
    default: false,
  },
});

console.log(props.show, "props.show");

let show = ref(props.show);

let emit = defineEmits(["close"]);

let closeSon = () => {
  emit("close");
};
</script>

<style lang="less">
.son {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 90%;
  top: 0;
  left: 0;
  background-color: #555;
  display: flex;
  justify-content: center;
  align-items: center;
  .close {
    width: 5%;
    height: 5%;
  }
}
</style>
