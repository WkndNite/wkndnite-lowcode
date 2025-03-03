<template>
  <div>
    <PageLayout>
      <Router-link
        class="link-item mb-15"
        to="/personal-telephone"
        exact-active-class="link-item-active"
        >手机</Router-link
      >
      <Router-link
        class="link-item mb-15"
        to="/personal-wechat"
        exact-active-class="link-item-active"
        >微信号</Router-link
      >
      <Router-link
        class="link-item mb-15"
        to="/personal-qq"
        exact-active-class="link-item-active"
        >QQ号</Router-link
      >
      <Router-link
        class="link-item mb-15"
        to="/personal-email"
        exact-active-class="link-item-active"
        >邮箱</Router-link
      >
      <Router-link
        class="link-item mb-15"
        to="/personal-address"
        exact-active-class="link-item-active"
        >地址</Router-link
      >
    </PageLayout>
  </div>
</template>

<script setup lang="ts">
import PageLayout from '../PageLayout.vue';
</script>

<style scoped></style>
