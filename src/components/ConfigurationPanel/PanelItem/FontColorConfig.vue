<template>
  <div>
    <ButtonGroup
      :title="`${configKey === 'titleSize' ? '标题' : '描述'}字色`"
      :status="status"
    >
      1
      <el-color-picker
        v-model="currentFontColor"
        @update:modelValue="changeHandle"
        :predefine="predefineColors"
      />
    </ButtonGroup>
  </div>
</template>

<script setup lang="ts">
import ButtonGroup from './ButtonGroup.vue';
import type { updateConfigStatus, VueComponentType } from '@/types';
import { inject, ref } from 'vue';

const props = defineProps<{
  status: string;
  isShow: boolean;
  configKey: string;
  editComponent: VueComponentType;
}>();

const currentFontColor = ref(props.status);

const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
]);

const updateStatus = inject<updateConfigStatus>('updateStatus');
function changeHandle(newColor: string) {
  currentFontColor.value = newColor;
  if (updateStatus) {
    updateStatus(props.configKey, newColor);
  } else {
    console.warn('updateStatus is not provided');
  }
}
</script>

<style lang="scss" scoped></style>
