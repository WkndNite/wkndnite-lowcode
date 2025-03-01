<template>
  <div>
    <ButtonGroup
      title="文本类型"
      :status="status[currentStatus]"
    >
      <el-button-group>
        <el-button
          :class="{
            select: currentStatus === 0,
          }"
          :icon="DocumentRemove"
          @click="changeType(0)"
        >
        </el-button>
        <el-button
          :class="{
            select: currentStatus === 1,
          }"
          :icon="Document"
          @click="changeType(1)"
        >
        </el-button>
      </el-button-group>
    </ButtonGroup>
  </div>
</template>

<script setup lang="ts">
import { Document, DocumentRemove } from '@element-plus/icons-vue';
import type { updateConfigStatus, VueComponentType } from '@/types';
import { inject } from 'vue';
import ButtonGroup from './ButtonGroup.vue';
const updateStatus = inject<updateConfigStatus>('updateStatus');

const props = defineProps<{
  status: string[];
  currentStatus: number;
  isShow: boolean;
  configKey: string;
  editComponent: VueComponentType;
  id: string;
}>();
const changeType = (type: number) => {
  if (updateStatus) {
    updateStatus(props.configKey, type, false);
  }
};
</script>

<style scoped></style>
