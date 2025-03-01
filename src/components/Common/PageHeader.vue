<template>
  <div>
    <div class="container flex self-start align-items-center border-box">
      <div class="left flex justify-content-center align-items-center">
        <el-button
          :icon="ArrowLeft"
          circle
          size="small"
          @click="goHome"
        />
      </div>
      <div class="center flex align-items-center space-between pl-15 pr-15">
        <div v-if="isEditor">
          <div v-if="pathId">
            <el-button
              type="warning"
              size="small"
              @click="updateQuestionnaire"
              >更新问卷</el-button
            >
          </div>
          <div v-else>
            <el-button
              type="danger"
              size="small"
              @click="resetQuestionnaire"
              >重置问卷</el-button
            >
            <el-button
              type="success"
              size="small"
              @click="saveQuestionnaire"
              >保存问卷</el-button
            >
          </div>
        </div>

        <div v-if="pathId">
          <el-button
            type="primary"
            size="small"
            @click="gotoPreview"
            >预览</el-button
          >
        </div>
      </div>
      <div class="right flex justify-content-center align-items-center">
        <el-avatar
          :size="30"
          :src="avatar"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from '@element-plus/icons-vue';
import { useRouter, useRoute } from 'vue-router';
import { ref, computed } from 'vue';
import { useEditorStore } from '@/stores';
import { ElMessage, ElMessageBox } from 'element-plus';
import type { QuestionnaireDatabaseData } from '@/types';

const router = useRouter();
const store = useEditorStore();
const route = useRoute();

const goHome = () => {
  localStorage.setItem('activeView', 'home');
  router.push('/');
};

const pathId = computed(() => (route.params.id ? route.params.id : null));

const props = defineProps({
  isEditor: {
    type: Boolean,
    required: true,
  },
  id: {
    type: String,
    default: '',
  },
});

const avatar = ref('https://blog.wkndnite-tech.cn/avatar.png');

const resetQuestionnaire = () => {
  ElMessageBox.confirm('确定要重置问卷吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      store.resetComponents();
      ElMessage.success('重置成功');
    })
    .catch(() => {
      ElMessage.info('取消重置');
    });
};

const saveQuestionnaire = () => {
  // 提示输入标题
  ElMessageBox.prompt('请输入问卷标题', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'info',
    inputErrorMessage: '标题不能为空',
  })
    .then(({ value }) => {
      const questionnaireData: QuestionnaireDatabaseData = {
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime(),
        title: value,
        components: JSON.parse(JSON.stringify(store.components)),
        questionsCount: store.questionsCount,
      };
      store
        .saveQuestionnaire(questionnaireData)
        .then((id) => {
          ElMessage.success('保存成功');
          router.push(`/editor/${id}/question-type`);
        })
        .catch(() => {
          ElMessage.error('保存失败');
        });
    })
    .catch(() => {
      ElMessage.info('取消保存');
    });
};

const gotoPreview = () => {
  ElMessageBox.confirm('预览会自动保存问卷，是否继续？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'info',
  })
    .then(() => {
      updateQuestionnaire();
      router.push({
        path: `/preview/${props.id}`,
        state: { from: 'editor' },
      });
    })
    .catch(() => {
      ElMessage.info('取消预览');
    });
};

const updateQuestionnaire = () => {
  store
    .updateQuestionnaire(Number(props.id), {
      updatedAt: new Date().getTime(),
      components: JSON.parse(JSON.stringify(store.components)),
      questionsCount: store.questionsCount,
    })
    .then(() => {
      ElMessage.success('更新成功');
    })
    .catch(() => {
      ElMessage.error('更新失败');
    });
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid var(--border-color);
  .left {
    width: 60px;
    height: 100%;
  }
  .center {
    flex: 1;
    height: 100%;
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
  }
  .right {
    width: 80px;
    height: 100%;
  }
}
</style>
