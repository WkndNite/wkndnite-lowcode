<template>
  <div class="right-side-container">
    <div
      v-if="store.currentFocusedComponentIndex === -1"
      class="content flex justify-content-center align-items-center"
    >
      点击题型进行编辑
    </div>
    <div v-else>
      <ConfigPanel :component="currentComponent" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEditorStore } from '@/stores/useEditor';
import ConfigPanel from '@/components/ConfigurationPanel/ConfigPanel.vue';
import { computed } from 'vue';

const store = useEditorStore();
const currentComponent = computed(() => store.components[store.currentFocusedComponentIndex]);
</script>

<style scoped lang="scss">
.right-side-container {
  width: 320px;
  height: calc(100vh - 50px - 40px);
  position: fixed;
  right: 20px;
  top: 70px;
  background-color: var(--white);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  overflow-y: scroll;
}
.content {
  height: 100%;
}
</style>
