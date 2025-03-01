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
    <el-select
      placeholder="请选择"
      v-model="value"
      size="large"
      style="width: 240px"
      @click.stop
      @change="emitAnswer"
    >
      <el-option
        v-for="(item, index) in computedStatus.options"
        :key="index"
        :label="item"
        :value="item"
      />
    </el-select>
  </div>
</template>

<script setup lang="ts">
import MaterialsHeader from '@/components/MaterialsMarket/MaterialsHeader.vue';
import type { OptionalStatusConfig } from '@/types';
import {
  getCurrentStatusConfig,
  getStringArrayStatusConfig,
  getStringArrayStatusByCurrentStatus,
  getTextStatusConfig,
} from '@/utils';
import { computed, ref } from 'vue';

const props = defineProps<{
  serialNum: number;
  status: OptionalStatusConfig;
}>();
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
const value = ref<string>('');

// 父组件传递自定义事件 子组件传递答案
const emits = defineEmits(['updateAnswer']);
const emitAnswer = () => {
  emits('updateAnswer', value.value);
};
</script>

<style scoped></style>
