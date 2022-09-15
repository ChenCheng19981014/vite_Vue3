export const myMixins = {
  data() {
    return {
      fnNum: 2,
      shit: "shit就是shit",
    };
  },
  created() {
    // console.log((this.fnNum += 5), "this---8");
  },
  mounted() {
    // console.log((this.fnNum += 5), "this---8");
  },
  methods: {
    fnBtn: function (param: number) {
      console.log(this, param, "mixins的页面");
    },
  },
};
