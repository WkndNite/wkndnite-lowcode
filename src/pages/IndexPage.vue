<template>
  <div class="container pt-20 pb-20 pl-20 pr-20">
    <h1 class="font-weight-100 text-center">周末晚的问卷低代码平台</h1>
    <div class="mb-15">
      <el-button
        type="primary"
        :icon="Plus"
        @click="goToEditor"
        >创建问卷</el-button
      >
      <el-button
        type="success"
        :icon="Compass"
        @click="goToComponentMarket"
        >物料市场</el-button
      >
    </div>
    <!-- 数据表格 -->
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        fixed
        prop="createdAt"
        label="创建日期"
        width="150"
        :formatter="formatDate"
        align="center"
      />
      <el-table-column
        prop="title"
        label="问卷标题"
      />
      <el-table-column
        prop="questionsCount"
        label="题目数量"
        width="150"
        align="center"
      />
      <el-table-column
        prop="updatedAt"
        label="最近更新日期"
        width="150"
        align="center"
        :formatter="formatDate"
      />
      <el-table-column
        label="操作"
        width="300"
        align="center"
      >
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click="viewSurvey(scope.row)"
            >查看问卷</el-button
          >
          <el-button
            link
            type="primary"
            size="small"
            @click="editSurvey(scope.row)"
            >编辑</el-button
          >
          <el-button
            link
            type="primary"
            size="small"
            @click="deleteSurvey(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { getAllQuestionnaires } from '@/db/operations';
import type { QuestionnaireDatabaseData, QuestionnaireTableRow } from '@/types';
import { Compass, Plus } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { formatDate } from '@/utils';
import { useEditorStore } from '@/stores';
import { ElMessage, ElMessageBox } from 'element-plus';

const tableData = ref<QuestionnaireDatabaseData[]>([]);
const router = useRouter();
const store = useEditorStore();

function getData() {
  getAllQuestionnaires().then((res) => {
    tableData.value = res;
  });
}
getData();

const goToEditor = () => {
  store.resetComponents();
  localStorage.setItem('activeView', 'editor');
  router.push('/editor/question-type');
};

const goToComponentMarket = () => {
  localStorage.setItem('activeView', 'materials');
  router.push('/materials');
};

const deleteSurvey = (item: QuestionnaireTableRow) => {
  ElMessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      store
        .removeComponents(item.id)
        .then(() => {
          getData();
          ElMessage.success('删除成功');
        })
        .catch(() => {
          ElMessage.error('删除失败');
        });
    })
    .catch(() => {
      ElMessage.info('已取消删除');
    });
};

const viewSurvey = (item: QuestionnaireTableRow) => {
  router.push({
    path: `/preview/${item.id}`,
    state: {
      from: 'home',
    },
  });
};

const editSurvey = (item: QuestionnaireTableRow) => {
  router.push({
    path: `/editor/${item.id}/question-type`,
  });
  store.setCurrentFocusedComponentIndex(-1);
};
</script>
