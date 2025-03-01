<template>
  <div>
    <PageLayout>
      <Router-link
        class="link-item mb-15"
        exact-active-class="link-item-active"
        to="/remark-note"
        >备注说明</Router-link
      >
    </PageLayout>
  </div>
</template>

<script setup lang="ts">
import PageLayout from '../PageLayout.vue';
</script>

<style scoped></style>
