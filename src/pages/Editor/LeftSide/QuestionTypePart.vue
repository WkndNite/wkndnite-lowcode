<template>
  <div class="survey-type-container">
    <QuestionTypeGroup
      v-for="(item, index) in EditorQuestionTypeList"
      :key="index"
      v-bind="item"
    />
  </div>
</template>

<script setup lang="ts">
import { EditorQuestionTypeList } from '@/configs';
import QuestionTypeGroup from '@/components/Editor/QuestionTypeGroup.vue';
</script>

<style scoped>
.survey-type-container {
  height: calc(100vh - 50px - 40px);
}
</style>
