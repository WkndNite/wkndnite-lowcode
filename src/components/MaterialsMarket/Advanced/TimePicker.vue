<template>
  <div
    :class="{
      'text-center': computedState.position,
    }"
  >
    <MaterialsHeader
      :serialNum="serialNum"
      :title="computedState.title"
      :titleSize="computedState.titleSize"
      :titleWeight="computedState.titleWeight"
      :titleItalic="computedState.titleItalic"
      :titleColor="computedState.titleColor"
      :desc="computedState.desc"
      :descSize="computedState.descSize"
      :descWeight="computedState.descWeight"
      :descItalic="computedState.descItalic"
      :descColor="computedState.descColor"
    />
    <el-date-picker
      v-model="datetimeValue"
      :type="computedState.type?.value"
      :format="computedState.type?.format"
      placeholder="请选择日期"
      @click.stop
      @change="emitAnswer"
    />
  </div>
</template>

<script setup lang="ts">
import MaterialsHeader from '@/components/MaterialsMarket/MaterialsHeader.vue';
import type { RemarkTypeStatusConfig } from '@/types';
import {
  getCurrentStatusConfig,
  getStringArrayStatusByCurrentStatus,
  getTextStatusConfig,
  getValueStatusByCurrentStatus,
} from '@/utils';
import { computed, ref } from 'vue';

const props = defineProps<{
  status: RemarkTypeStatusConfig;
  serialNum: number;
}>();
const emits = defineEmits(['updateAnswer']);
const datetimeValue = ref<Date | null>(null);
const computedState = computed(() => ({
  title: getTextStatusConfig(props.status.title),
  desc: getTextStatusConfig(props.status.desc),
  position: getCurrentStatusConfig(props.status.position),
  type: getValueStatusByCurrentStatus(props.status.type),
  titleSize: getStringArrayStatusByCurrentStatus(props.status.titleSize),
  descSize: getStringArrayStatusByCurrentStatus(props.status.descSize),
  titleWeight: getCurrentStatusConfig(props.status.titleWeight),
  descWeight: getCurrentStatusConfig(props.status.descWeight),
  titleItalic: getCurrentStatusConfig(props.status.titleItalic),
  descItalic: getCurrentStatusConfig(props.status.descItalic),
  titleColor: getTextStatusConfig(props.status.titleColor),
  descColor: getTextStatusConfig(props.status.descColor),
}));
const emitAnswer = () => {
  emits('updateAnswer', datetimeValue.value);
  console.log('🚀 ~ emitAnswer ~ datetimeValue.value:', datetimeValue.value);
};
</script>

<style scoped lang="scss"></style>
