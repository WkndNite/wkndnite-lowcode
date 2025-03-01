<template>
  <div>
    <ButtonGroup
      :title="`${configKey === 'titleSize' ? '标题' : '描述'}倾斜`"
      :status="status[currentStatus]"
    >
      <el-button-group>
        <el-button
          :class="{
            select: currentStatus === 0,
          }"
          @click="changeFontItalic(0)"
        >
          <font-awesome-icon
            icon="italic"
            size="lg"
          />
        </el-button>
        <el-button
          :class="{ select: currentStatus === 1 }"
          @click="changeFontItalic(1)"
        >
          <font-awesome-icon
            icon="italic"
            size="sm"
          />
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
  currentStatus: number;
  status: string[];
  isShow: boolean;
  configKey: string;
  editComponent: VueComponentType;
}>();

const updateStatus = inject<updateConfigStatus>('updateStatus');
function changeFontItalic(italic: number) {
  if (updateStatus) {
    updateStatus(props.configKey, italic);
  } else {
    console.warn('updateStatus is not provided');
  }
}
</script>

<style lang="scss" scoped></style>
