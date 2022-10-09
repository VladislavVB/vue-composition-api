import { ref, reactive, computed, watch, onMounted, nextTick } from "vue";

const counterData = reactive({
  count: 0,
  title: "My Counter",
});
const appTitleRef = ref(null);

export const useCounter = () => {
  watch(
    () => counterData.count,
    (newCount) => {
      if (newCount === 20) {
        alert("Way to go! You made it to 20!!");
      }
    }
  );
  const appTitle = "My Ok Counter App";

  const oddOrEven = computed(() => {
    if (counterData.count % 2 === 0) return "even";
    return "odd";
  });

  const increaseCounter = async (amount, e) => {
    counterData.count += amount;
    await nextTick();
    console.log("do something when counter has updated in the dom");
  };

  const decreaseCounter = (amount) => {
    counterData.count -= amount;
  };

  onMounted(() => {
    console.log("Do stuff related to Counter");
    console.log(`The app title is ${appTitleRef.value.offsetWidth} px wide!`);
  });

  return {
    appTitle,
    appTitleRef,
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter,
  };
}
