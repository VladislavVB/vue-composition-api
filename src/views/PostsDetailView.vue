<template>
  <h1>post {{ $route.params.id }}</h1>
  <button @click="showPostId">Show Post ID</button>
  <RouterLink to="/posts">back Posts</RouterLink>
</template>
<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const showPostId = () => {
  console.log(route.params.id);
};
</script>
