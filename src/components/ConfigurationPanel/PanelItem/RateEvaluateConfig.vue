<template>
  <div key="id">
    <div class="flex align-items-center mb-10">
      <div class="mr-10">辅助文字</div>
      <el-switch
        :model-value="isUse"
        @change="switchChangeHandle"
      />
    </div>
    <div v-if="isUse">
      <el-input
        v-for="(_, index) in status"
        :key="index"
        class="mt-5 mb-5"
        placeholder="辅助文字"
        v-model="textArr[index]"
        @input="(val: string) => inputHandle(val, index)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  type VueComponentType,
  type StringOptionsArray,
  type updateConfigStatus,
  type RateEvaluateOptionsObject,
} from '@/types';
import { inject, ref } from 'vue';
const props = defineProps<{
  currentStatus: number;
  status: StringOptionsArray;
  isShow: boolean;
  isUse: boolean;
  configKey: string;
  editComponent: VueComponentType;
  id: string;
}>();

const updateStatus = inject<updateConfigStatus>('updateStatus');

const textArr = ref(props.status);

function switchChangeHandle(val: boolean) {
  console.log('🚀 ~ change ISUSE');
  if (updateStatus) {
    updateStatus(props.configKey, val);
  }
}
function inputHandle(value: string, index: number) {
  const payload = { value, index } as RateEvaluateOptionsObject;
  if (updateStatus) {
    updateStatus(props.configKey, payload);
  }
}
</script>

<style scoped></style>
