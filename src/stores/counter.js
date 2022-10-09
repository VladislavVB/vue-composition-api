import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 0,
    title: "Title Test",
  }),
  actions: {
    incrementCounter(amount) {
      this.count += amount;
    },
    decrementCounter(amount) {
      this.count -= amount;
    },
  },
  getters: {
    oddOrEven: (state) => {
      if (state.count % 2 === 0) {
        return "even";
      } else {
        return "odd";
      }
    },
  },
});
