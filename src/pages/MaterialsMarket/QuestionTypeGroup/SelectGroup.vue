<template>
  <div>
    <PageLayout>
      <Router-link
        class="link-item mb-15"
        exact-active-class="link-item-active"
        to="/single-select"
        >单选题</Router-link
      >
      <Router-link
        class="link-item mb-15"
        exact-active-class="link-item-active"
        to="/multiple-select"
        >多选题</Router-link
      >
      <Router-link
        class="link-item mb-15"
        exact-active-class="link-item-active"
        to="/drop-down-select"
        >下拉选择</Router-link
      >
      <Router-link
        class="link-item mb-15"
        exact-active-class="link-item-active"
        to="/single-picture-select"
        >图片单选题</Router-link
      >
      <Router-link
        class="link-item mb-15"
        exact-active-class="link-item-active"
        to="/multiple-picture-select"
        >图片多选题</Router-link
      >
    </PageLayout>
  </div>
</template>

<script setup lang="ts">
import PageLayout from '../PageLayout.vue';
</script>

<style scoped></style>
