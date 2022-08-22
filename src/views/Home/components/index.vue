<template>
  <div class="container">
    <!-- <h4>{{ "父组件value的值:---fater--- " + value }}</h4> -->
    <!-- 使用计算属性作为传递的属性 -->
    <!-- <Parent v-model="newValue" @input="input"></Parent> -->
    <hr />
    <input type="text" v-model="value" @input="inputF" />

    <hr />
    <h1>{{ value }}</h1>
  </div>
</template>

<script>
import Parent from "./child/index.vue";
export default {
  components: {
    Parent,
  },
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      // value: null,
    };
  },
  computed: {
    // 定义一个过渡的计算属性
    newValue: {
      get() {
        return this.value;
      },
      set(newVal) {
        this.$emit("input", newVal);
      },
    },
  },
  methods: {
    inputF(val) {
      console.log(this.value, "----", val.target.innerText, "val");
    },
  },
  mounted() {
    console.log(this.value, "value");
  },
};
</script>

<style>
.container {
  width: 500px;
  margin: 50px auto 0;
  background-color: #777;
}
</style>
