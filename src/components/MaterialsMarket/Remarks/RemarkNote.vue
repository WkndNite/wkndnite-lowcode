<template>
  <h1
    v-if="computedStatus.type === 0"
    class="pt-10 pb-10 text-center font-weight-200"
    :class="{
      'font-italic': !computedStatus.titleItalic,
      'font-bold': !computedStatus.titleWeight,
    }"
    :style="{
      fontSize: `${computedStatus.titleSize}px`,
      color: computedStatus.titleColor,
    }"
  >
    {{ computedStatus.title }}
  </h1>
  <p
    v-else
    :class="{
      'font-italic': !computedStatus.descItalic,
      'font-bold': !computedStatus.descWeight,
      'text-center': computedStatus.position,
    }"
    :style="{
      fontSize: `${computedStatus.descSize}px`,
      color: computedStatus.descColor,
    }"
  >
    {{ computedStatus.desc }}
  </p>
</template>

<script setup lang="ts">
import type { RemarkTypeStatusConfig } from '@/types';
import {
  getCurrentStatusConfig,
  getStringArrayStatusByCurrentStatus,
  getTextStatusConfig,
} from '@/utils';
import { computed } from 'vue';

const props = defineProps<{
  status: RemarkTypeStatusConfig;
}>();

const computedStatus = computed(() => ({
  type: getCurrentStatusConfig(props.status.type),
  title: getTextStatusConfig(props.status.title),
  desc: getTextStatusConfig(props.status.desc),
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
</script>

<style scoped></style>
