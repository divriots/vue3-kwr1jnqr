import MyCounter from "../src/index.vue";

export default {
  parameters: {
    layout: "centered",
  },
};

export const story1 = () => ({
  components: { MyCounter },
  template: "<my-counter></my-counter>",
});
