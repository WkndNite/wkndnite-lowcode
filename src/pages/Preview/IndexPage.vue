<template>
  <div class="preview-container pb-40">
    <div class="center mc">
      <div class="button-group flex space-between align-items-center">
        <div class="flex space-between no-print">
          <el-button
            type="danger"
            @click="goBackHandle"
            >返回</el-button
          >
          <el-button
            type="success"
            @click="generateOnlineHandle"
            >生成在线问卷</el-button
          >
          <el-button
            type="warning"
            @click="generatePDFHandle"
            >生成本地PDF</el-button
          >
        </div>
        <div class="mr-15">
          <el-text class="mx-1">题目数量：{{ store.questionsCount }}</el-text>
        </div>
      </div>
      <div class="content-group no-border">
        <div
          class="content mb-10"
          v-for="(component, index) in store.components"
          :key="index"
        >
          <component
            :is="component.type"
            :status="component.status"
            :serialNum="serialNumber[index]"
          ></component>
        </div>
      </div>
    </div>
  </div>
  <el-dialog
    v-model="dialogueVisible"
    title="在线问卷"
    width="500"
  >
    分享链接：<a
      :href="quizLink"
      target="_blank"
      >{{ quizLink }}</a
    >
    <template #footer>
      <div class="dialog-footer">
        <el-button
          type="primary"
          @click="copyLink"
          >复制链接</el-button
        >
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { getQuestionnaireById } from '@/db/operations';
import { restoreComponentStatus } from '@/utils';
import { useEditorStore } from '@/stores/useEditor';
import { computed, ref } from 'vue';
import { useSerialNumber } from '@/utils';
import { isAccessedToGeneratePDF } from '@/types';
import { ElMessage } from 'element-plus';
import { v4 as uuidv4 } from 'uuid';

const store = useEditorStore();

const route = useRoute();
const router = useRouter();
const serialNumber = computed(() => useSerialNumber(store.components).value);

const questionnaireId = Number(route.params.id);
if (questionnaireId) {
  getQuestionnaireById(questionnaireId).then((res) => {
    if (res) {
      // 组件还原
      restoreComponentStatus(res.components);
      store.setStore(res);
    }
    console.log(res);
  });
}

const goBackHandle = () => {
  const from = history.state.from;

  if (from === 'home') {
    router.back();
  } else {
    router.push(`/editor/${questionnaireId}/question-type`);
  }
};

const generatePDFHandle = () => {
  // 提醒移除不适合生成pdf的组件 比如时间选择器
  const result = store.components.every((component) => isAccessedToGeneratePDF(component.name));
  if (!result) {
    ElMessage.warning('存在不适合生成PDF的组件，请移除后重试');
    return;
  }
  window.print();
};

const generateOnlineHandle = () => {
  console.log('生成在线问卷');
  const id = uuidv4();
  fetch('/api/saveQuiz', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      quizData: {
        components: JSON.stringify(store.components),
        questionsCount: store.questionsCount,
      },
    }),
  });

  dialogueVisible.value = true;

  quizLink.value = `${window.location.origin}/quiz/${id}`;
};

const quizLink = ref('');
const copyLink = () => {
  dialogueVisible.value = false;
  navigator.clipboard.writeText(quizLink.value);
  ElMessage.success('在线答题的链接已复制');
};

const dialogueVisible = ref(false);
</script>

<style scoped lang="scss">
.preview-container {
  width: 100vw;
  min-height: 100vh;
  background: url('@/assets/img/editor_background.png');
}
.center {
  width: 800px;
}
.button-group {
  width: 100%;
  height: 60px;
  top: 0;
  left: 0;
  background-color: var(--white);
  z-index: 100;
}
.content-group {
  padding: 20px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-ls);
  background-color: var(--white);
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
}
@media print {
  .no-print {
    display: none;
  }
  .no-border {
    border: none;
    box-shadow: none;
  }
}
</style>
