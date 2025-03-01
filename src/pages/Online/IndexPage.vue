<template>
  <div v-if="quizData">
    <div class="quiz-container mc">
      <div class="mt-30 mb-20">题目数量：{{ quizData.questionsCount }}</div>
      <div
        class="content mb-10"
        v-for="(component, index) in quizData.components"
        :key="index"
      >
        <component
          :is="component.type"
          :status="component.status"
          :serialNum="serialNumber[index]"
          @updateAnswer="updateAnswer(index, $event)"
        ></component>
      </div>

      <div class="mt-20 mb-20 text-center">
        <el-button
          type="primary"
          @click="submit"
          >提交答案</el-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { QuestionnaireData } from '@/types';
import { restoreComponentStatus } from '@/utils';
import { useSerialNumber } from '@/utils/hooks';
import { ElMessage } from 'element-plus';
import { computed, onMounted, ref, type Ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
onMounted(async () => {
  const { id } = route.params;

  const response = await fetch(`/api/getQuiz/${id}`);

  const data = await response.json();
  data.components = JSON.parse(data.components);
  restoreComponentStatus(data.components);
  quizData.value = data;
});

const quizData = ref<QuestionnaireData>({
  components: [],
  questionsCount: 0,
});
const serialNumber = computed(() => useSerialNumber(quizData.value?.components).value);

const answers: Ref<{ [key: number]: string | number }> = ref({});

const updateAnswer = (index: number, answer: string | number) => {
  const serial = serialNumber.value[index];
  if (serial !== null) {
    answers.value[serial] = answer;
  }
};

const submit = async () => {
  await fetch(`/api/submitAnswers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      quizId: route.params.id,
      answers: answers.value,
    }),
  });
  ElMessage.success('提交成功');
};
</script>

<style scoped>
.quiz-container {
  max-width: 800px;
}
</style>
