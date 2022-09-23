export const fn = {
  data() {
    return {
      num: 1 as number,
    };
  },
  methods: {
    fnBtns(newNum: number) {
      console.log(1, this, "1");
      (this as any).num += newNum;
    },
  },
};
