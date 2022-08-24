<template>
  <div class="farther">
    <button
      @click="
        () => {
          showModal = true;
        }
      "
    >
      我是弗雷
    </button>

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
export default {
  components: {
    MySon,
  },
  data() {
    return {
      value: "超级父类",
      showModal: false,
    };
  },
  methods: {},
};
</script>

<style>
.farther {
  width: 100%;
  height: 100%;
  /* background-color: #555; */
}
</style>
