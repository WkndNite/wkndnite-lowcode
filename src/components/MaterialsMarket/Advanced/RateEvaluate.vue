<template>
  <div
    :class="{
      'text-center': computedStatus.position,
    }"
  >
    <MaterialsHeader
      :serialNum="serialNum"
      :title="computedStatus.title"
      :desc="computedStatus.desc"
      :titleSize="computedStatus.titleSize"
      :descSize="computedStatus.descSize"
      :titleWeight="computedStatus.titleWeight"
      :descWeight="computedStatus.descWeight"
      :titleItalic="computedStatus.titleItalic"
      :descItalic="computedStatus.descItalic"
      :titleColor="computedStatus.titleColor"
      :descColor="computedStatus.descColor"
    />

    <el-rate
      v-model="rateValue"
      :texts="computedStatus.options"
      :show-text="status?.options?.isUse"
      size="large"
      allow-half
      clearable
      @click.stop
      @change="emitAnswer"
    />
  </div>
</template>

<script setup lang="ts">
import MaterialsHeader from '@/components/MaterialsMarket/MaterialsHeader.vue';
import type { OptionalStatusConfig } from '@/types';
import {
  getCurrentStatusConfig,
  getStringArrayStatusByCurrentStatus,
  getStringArrayStatusConfig,
  getTextStatusConfig,
} from '@/utils';
import { computed, ref } from 'vue';

const props = defineProps<{
  serialNum: number;
  status: OptionalStatusConfig;
}>();
const rateValue = ref<number>(3);

const computedStatus = computed(() => ({
  title: getTextStatusConfig(props.status.title),
  desc: getTextStatusConfig(props.status.desc),
  options: getStringArrayStatusConfig(props.status.options),
  position: getCurrentStatusConfig(props.status.position),
  titleSize: getStringArrayStatusByCurrentStatus(props.status.titleSize),
  descSize: getStringArrayStatusByCurrentStatus(props.status.descSize),
  titleWeight: getCurrentStatusConfig(props.status.titleWeight),
  descWeight: getCurrentStatusConfig(props.status.descWeight),
  titleItalic: getCurrentStatusConfig(props.status.titleItalic),
  descItalic: getCurrentStatusConfig(props.status.descItalic),
  titleColor: getTextStatusConfig(props.status.titleColor),
  descColor: getTextStatusConfig(props.status.descColor),
}));

// 父组件传递自定义事件 子组件传递答案
const emits = defineEmits(['updateAnswer']);
const emitAnswer = () => {
  emits('updateAnswer', rateValue.value);
};
</script>

<style scoped></style>
