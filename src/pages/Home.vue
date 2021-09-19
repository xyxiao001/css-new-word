<template>
  <main>
    <p class="title-name">css 新世界学习列表</p>
    <section class="list">
      <router-link :to="{name: 'keywords'}">css 全局关键字</router-link>
    </section>
  </main>
</template>

<script setup lang="ts">
</script>

<style>
  .list {
    display: flex;
    flex-wrap: wrap; 
  }
</style>
