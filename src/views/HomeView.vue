<template>
  <div class="home">
    <h2>{{ appTitle }}</h2>
    <h3>{{ counterData.title }}</h3>
    <div>
      <button @click.stop="decrimentCounter(2)" class="btn">--</button>
      <button @click.stop="decrimentCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click.stop="incrementConter(1)" class="btn">+</button>
      <button @click.stop="incrementConter(2)" class="btn">++</button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit count title</h4>
      <input v-model="counterData.title" v-auto-focus type="text" />
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, watch, onMounted } from "vue";
import { vAutoFocus } from '@/directives/vAutoFocus.js'

const appTitle = "My test";

const counterData = reactive({
  count: 0,
  title: "My counter",
});

watch(
  () => counterData.count,
  (newCount) => {
    if (newCount === 10) {
      alert("GO", counterData.count);
    }
  }
);

const incrementConter = (amount) => {
  counterData.count += amount;
};
const decrimentCounter = (amount) => {
  counterData.count -= amount;
};

const oddOrEven = computed(() => {
  if (counterData.count % 2 === 0) return "even";
  return "odd";
});

</script>
<style>
.home {
  text-align: center;
}
.edit {
  margin-top: 20px;
}
</style>
