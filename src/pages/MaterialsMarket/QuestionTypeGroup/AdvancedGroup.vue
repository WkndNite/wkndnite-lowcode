<template>
  <div>
    <PageLayout>
      <Router-link
        class="link-item mb-15"
        exact-active-class="link-item-active"
        to="/rate-evaluate"
        >评价/打分</Router-link
      >
      <Router-link
        class="link-item mb-15"
        exact-active-class="link-item-active"
        to="/time-picker"
        >日期/时间</Router-link
      >
    </PageLayout>
  </div>
</template>

<script setup lang="ts">
import PageLayout from '../PageLayout.vue';
</script>

<style scoped></style>
