<template>
  <div>
    <PageLayout>
      <Router-link
        class="link-item mb-15"
        to="/personal-name"
        exact-active-class="link-item-active"
        >姓名</Router-link
      >
      <Router-link
        class="link-item mb-15"
        to="personal-identity"
        exact-active-class="link-item-active"
        >身份证</Router-link
      >
      <Router-link
        class="link-item mb-15"
        to="personal-birthday"
        exact-active-class="link-item-active"
        >出生日期</Router-link
      >
      <Router-link
        class="link-item mb-15"
        to="/personal-gender"
        exact-active-class="link-item-active"
        >性别</Router-link
      >
      <Router-link
        class="link-item mb-15"
        to="/personal-age"
        exact-active-class="link-item-active"
        >年龄</Router-link
      >
      <Router-link
        class="link-item mb-15"
        to="/personal-education"
        exact-active-class="link-item-active"
        >学历</Router-link
      >
      <Router-link
        class="link-item mb-15"
        to="/personal-college"
        exact-active-class="link-item-active"
        >大学</Router-link
      >
      <Router-link
        class="link-item mb-15"
        to="/personal-major"
        exact-active-class="link-item-active"
        >专业</Router-link
      >
      <Router-link
        class="link-item mb-15"
        to="/personal-industry"
        exact-active-class="link-item-active"
        >行业</Router-link
      >
      <Router-link
        class="link-item mb-15"
        to="/personal-career"
        exact-active-class="link-item-active"
        >职业</Router-link
      >
      <Router-link
        class="link-item mb-15"
        to="/personal-company"
        exact-active-class="link-item-active"
        >公司</Router-link
      >
      <Router-link
        class="link-item mb-15"
        to="personal-position"
        exact-active-class="link-item-active"
        >职位</Router-link
      >
    </PageLayout>
  </div>
</template>

<script setup lang="ts">
import PageLayout from '../PageLayout.vue';
</script>

<style scoped></style>
