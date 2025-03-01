<template>
  <div
    class="survey-type-item-container pointer flex justify-content-center align-items-center self-center pl-10 pr-10 mb-10"
    @click="addComponent"
  >
    {{ item.name }}
  </div>
</template>

<script setup lang="ts">
import { defaultStatusMap } from '@/configs';
import type { MaterialType, MaterialName } from '@/types';
import { initOptionsOfPresetMaterial } from '@/utils';
import { useEditorStore } from '@/stores/useEditor';
import EventBus from '@/utils/eventBus';

const props = defineProps(['item']);
const store = useEditorStore();

const addComponent = () => {
  const targetComponentMaterialName = props.item.materialName as MaterialName;
  if (!targetComponentMaterialName) {
    console.warn('请先选择组件题型');
    return;
  }

  const targetComponentMaterialStatus = defaultStatusMap[
    targetComponentMaterialName
  ]() as MaterialType;

  initOptionsOfPresetMaterial(targetComponentMaterialStatus, targetComponentMaterialName);

  store.addComponent(targetComponentMaterialStatus);
  EventBus.emit('scrollToBottom' as never);
};
</script>

<style scoped>
.survey-type-item-container {
  width: 60px;
  height: 30px;
  background-color: var(--background-color);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-sm);
  color: var(--font-color-light);
  user-select: none;
}
.survey-type-item-container:hover {
  background-color: var(--font-color-lightest);
}
</style>
