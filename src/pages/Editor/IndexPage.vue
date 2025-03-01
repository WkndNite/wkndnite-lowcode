<template>
  <div>
    <div class="header">
      <PageHeader
        :isEditor="true"
        :id
      />
    </div>
    <div class="container">
      <LeftSide />
      <RightSide />
    </div>
    <div>
      <Center />
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@/components/Common/PageHeader.vue';
import LeftSide from './LeftSide/SideIndex.vue';
import RightSide from './RightSide.vue';
import Center from './CenterPart.vue';
import { useRoute } from 'vue-router';
import { computed, provide } from 'vue';
import {
  isOptionalStatusConfig,
  isPictureLink,
  isRemarkTypeStatusConfig,
  type PictureLink,
} from '@/types';
import { ElMessage } from 'element-plus';
import { useEditorStore } from '@/stores/useEditor';
import { getQuestionnaireById } from '@/db/operations';
import { restoreComponentStatus } from '@/utils';
import { isRateEvaluateObject } from '../../types/materials/optionPropsArrayType';
import { setOptionsByIndex } from '../../stores/actions';

const route = useRoute();
const store = useEditorStore();

const currentComponent = computed(() => store.components[store.currentFocusedComponentIndex]);

const id = computed(() => (route.params.id ? String(route.params.id) : undefined));

if (id.value) {
  getQuestionnaireById(Number(id.value)).then((res) => {
    if (res) {
      // 组件还原
      restoreComponentStatus(res.components);
      store.setStore(res);
    }
    console.log(res);
  });
}

const updateStatus = (
  configKey: string,
  payload?: number | string | boolean | object,
  isShowChange?: boolean,
) => {
  switch (configKey) {
    case 'type': {
      if (typeof payload === 'number' && isRemarkTypeStatusConfig(currentComponent.value.status)) {
        store.toggleRemarkType(currentComponent.value.status, payload, Boolean(isShowChange));
      }
      break;
    }
    case 'title':
    case 'desc': {
      if (typeof payload !== 'string') {
        console.error('Invalid payload type for "title or desc".Expected string!');
        return;
      } else {
        store.setText(currentComponent.value.status[configKey], payload);
      }
      break;
    }
    case 'options': {
      if (!isOptionalStatusConfig(currentComponent.value.status)) break;
      if (typeof payload === 'number') {
        const res = store.removeOption(currentComponent.value.status[configKey], payload);
        if (res) {
          ElMessage.success('删除成功');
        } else {
          ElMessage.error('至少保留两个选项');
        }
      } else if (typeof payload === 'boolean') {
        store.setUse(currentComponent.value.status[configKey], payload);
      } else if (typeof payload === 'object' && isRateEvaluateObject(payload)) {
        store.setOptionsByIndex(currentComponent.value.status[configKey], payload);
      } else if (typeof payload === 'object' && isPictureLink(payload)) {
        store.setPictureLinkByIndex(currentComponent.value.status[configKey], payload);
      } else {
        store.addOption(currentComponent.value.status[configKey]);
      }
      break;
    }
    case 'position': {
      if (typeof payload !== 'number') {
        console.error('Invalid payload type for "position".Expected number!');
        return;
      } else {
        store.setPosition(currentComponent.value.status[configKey], payload);
      }
      break;
    }
    case 'titleSize':
    case 'descSize': {
      if (typeof payload !== 'number') {
        console.error('Invalid payload type for "titleSize or descSize".Expected number!');
        return;
      } else {
        store.setSize(currentComponent.value.status[configKey], payload);
      }
      break;
    }
    case 'titleWeight':
    case 'descWeight': {
      if (typeof payload !== 'number') {
        console.error('Invalid payload type for "titleWeight or descWeight".Expected number!');
        return;
      } else {
        store.setWeight(currentComponent.value.status[configKey], payload);
      }
      break;
    }

    case 'titleItalic':
    case 'descItalic': {
      if (typeof payload !== 'number') {
        console.error('Invalid payload type for "titleItalic or descItalic".Expected number!');
        return;
      } else {
        store.setItalic(currentComponent.value.status[configKey], payload);
      }
      break;
    }

    case 'titleColor':
    case 'descColor': {
      if (typeof payload !== 'string') {
        console.error('Invalid payload type for "titleColor or descColor".Expected string!');
        return;
      } else {
        store.setColor(currentComponent.value.status[configKey], payload);
      }
    }
  }
};

const getLink = (link: PictureLink) => {
  updateStatus('options', link);
};
provide('updateStatus', updateStatus);
provide('getLink', getLink);
</script>

<style scoped>
.header {
  width: 100%;
  background-color: var(--white);
  position: fixed;
  top: 0;
  z-index: 10;
}
.container {
  width: calc(100% - 40px);
  padding: 20px;
  /* Header 50px padding 20px * 2 */
  height: calc(100vh - 50px - 40px);
  background-image: url('@/assets/img/editor_background.png');

  position: fixed;
  top: 50px;
}
</style>
