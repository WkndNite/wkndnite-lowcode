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
  </div>
  <div class="flex wrap">
    <el-radio-group
      v-model="radioValue"
      class="flex wrap"
    >
      <el-radio
        v-for="(item, index) in computedStatus.options"
        :key="index"
        :value="item.picTitle"
        class="picOption flex mb-15"
        @change="emitAnswer"
      >
        <PictureUploader
          :key="index"
          v-bind="{ ...item, index }"
        />
      </el-radio>
    </el-radio-group>
  </div>
</template>

<script setup lang="ts">
import MaterialsHeader from '@/components/MaterialsMarket/MaterialsHeader.vue';

import PictureUploader from '@/components/MaterialsMarket/PictureUploader.vue';
import type { OptionalStatusConfig } from '@/types';
import {
  getCurrentStatusConfig,
  getPicTitleDescStatusArr,
  getStringArrayStatusByCurrentStatus,
  getTextStatusConfig,
} from '@/utils';
import { computed, ref } from 'vue';

const radioValue = ref('');

const props = defineProps<{
  serialNum: number;
  status: OptionalStatusConfig;
}>();

const computedStatus = computed(() => ({
  title: getTextStatusConfig(props.status.title),
  desc: getTextStatusConfig(props.status.desc),
  options: getPicTitleDescStatusArr(props.status.options),
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
const emits = defineEmits(['updateAnswer']);

const emitAnswer = () => {
  emits('updateAnswer', radioValue.value);
};
</script>

<style scoped lang="scss">
.picOption {
  height: auto;
  flex-direction: column-reverse;
}
</style>
