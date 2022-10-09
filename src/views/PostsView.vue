<template>
  <h1>posts</h1>
  <div>
    <RouterLink :to="`/posts-detail/${post.id}`" v-for="post in postsData" :key="post.id">{{ post.title }} <br></RouterLink>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const postsData = ref([
  { id: 1, title: "title 1" },
  { id: 2, title: "title 2" },
  { id: 3, title: "title 3" },
]);
</script>
