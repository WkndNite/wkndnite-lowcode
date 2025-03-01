<template>
  <div>
    <PageLayout>
      <Router-link
        class="link-item mb-15"
        to="/personal-telephone"
        >手机</Router-link
      >
      <Router-link
        class="link-item mb-15"
        to="/personal-wechat"
        >微信号</Router-link
      >
      <Router-link
        class="link-item mb-15"
        to="/personal-qq"
        >QQ号</Router-link
      >
      <Router-link
        class="link-item mb-15"
        to="/personal-email"
        >邮箱</Router-link
      >
      <Router-link
        class="link-item mb-15"
        to="/personal-address"
        >地址</Router-link
      >
    </PageLayout>
  </div>
</template>

<script setup lang="ts">
import PageLayout from '../PageLayout.vue';
</script>

<style scoped></style>
