<template>
  <div class="farther">
    <button
      @click="
        () => {
          // showModal = true;
        }
      "
    >
      我是弗雷
    </button>

    <h1>{{ num }}</h1>
    <button @click="fnBtn">mixin.js</button>

    <teleport to="body">
      <MySon
        :show="showModal"
        @close="
          (isShow:boolean) => {
            showModal = isShow;
          }
        "
      ></MySon>
    </teleport>
  </div>
</template>

<script lang="ts">
//@ts-ignore
import MySon from "./../components/son.vue";
import { fn } from "./../../mixin/mixin";
export default {
  components: {
    MySon,
  },
  created() {
    (this as any).num += 1;
  },
  data() {
    return {
      value: "超级父类",
      showModal: false,
    };
  },
  mixins: [fn],
  methods: {
    fnBtn() {
      console.log(fn, "fn");

      console.log(fn.data().num, "fn");

      fn.methods.fnBtns(1);

      (this as any).num++;
    },
  },
};
</script>

<style>
.farther {
  width: 100%;
  height: 100%;
  /* background-color: #555; */
}
</style>
