<template>
  <div>
    <ButtonGroup
      title="说明类型"
      :status="status[currentStatus]"
    >
      <el-button-group>
        <el-button
          :class="{
            select: currentStatus === 0,
          }"
          @click="changeType(0)"
        >
          <font-awesome-icon icon="heading" />
        </el-button>
        <el-button
          :class="{
            select: currentStatus === 1,
          }"
          @click="changeType(1)"
        >
          <font-awesome-icon icon="paragraph" />
        </el-button>
      </el-button-group>
    </ButtonGroup>
  </div>
</template>

<script setup lang="ts">
import ButtonGroup from './ButtonGroup.vue';
import type { updateConfigStatus, VueComponentType } from '@/types';
import { inject } from 'vue';

const props = defineProps<{
  status: string[];
  currentStatus: number;
  isShow: boolean;
  configKey: string;
  editComponent: VueComponentType;
  id: string;
}>();

const updateStatus = inject<updateConfigStatus>('updateStatus');

const changeType = (type: number) => {
  if (updateStatus) {
    updateStatus(props.configKey, type, true);
  }
};
</script>

<style scoped></style>
