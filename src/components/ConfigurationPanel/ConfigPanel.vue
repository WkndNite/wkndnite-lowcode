<template>
  <div class="editPanelContainer">
    <div
      v-for="(item, key) in component.status"
      :key="item.id"
      class="mb-20"
    >
      <component
        :is="item.editComponent"
        v-if="item.isShow"
        :config-key="key"
        v-bind="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MaterialType } from '@/types';
defineProps<{
  component: MaterialType;
}>();
</script>

<style scoped>
.editPanelContainer {
  padding: 30px;
  background-color: var(--bg-color);
}
</style>
