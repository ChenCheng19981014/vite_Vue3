<template>
  <transition name="modal">
    <div class="son" v-show="props.show">
      <div class="son-content">
        <h1>子类</h1>
        <button @click="closeSon" class="close">关闭子类</button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

let emit = defineEmits(["close"]);

let closeSon = () => {
  emit("close", false);
};
</script>

<style lang="less">
.son {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #555;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;

  .son-content {
    width: 20%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;

    .close {
      width: 20%;
      height: 20%;
    }
  }
}

/*
 * 对于 transition="modal" 的元素来说
 * 当通过 Vue.js 切换它们的可见性时
 * 以下样式会被自动应用。
 *
 * 你可以简单地通过编辑这些样式
 * 来体验该模态框的过渡效果。
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from {
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
}
</style>
