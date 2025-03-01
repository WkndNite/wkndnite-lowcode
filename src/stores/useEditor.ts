import { defineStore } from 'pinia';
import { markRaw } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import {
  addOption,
  removeOption,
  setColor,
  setItalic,
  setOptionsByIndex,
  setPictureLinkByIndex,
  setPosition,
  setSize,
  setText,
  setUse,
  setWeight,
  toggleRemarkType,
} from './actions';
import { isQuestionMaterial, type MaterialType } from '@/types';

import type { QuestionnaireDatabaseData, RemarkTypeStatusConfig } from '@/types';
import {
  deleteQuestionnaireById,
  saveQuestionnaire,
  updateQuestionnaireById,
} from '@/db/operations';

import {
  TitleConfig,
  DescriptionConfig,
  RemarkTypeConfig,
  PositionConfig,
  FontSizeConfig,
  FontItalicConfig,
  FontColorConfig,
  FontWeightConfig,
} from '@/components/ConfigurationPanel/index';
import remarkDefaultStatus from '@/configs/defaultStatus/remark';
const initStore = () =>
  [
    Object.assign({}, remarkDefaultStatus(), {
      status: <RemarkTypeStatusConfig>{
        type: {
          id: uuidv4(),
          currentStatus: 0,
          status: ['标题', '段落'],
          isShow: true,
          editComponent: markRaw(RemarkTypeConfig),
          name: 'remark-type-config',
        },
        title: {
          id: uuidv4(),
          status: '问卷标题',
          isShow: true,
          editComponent: markRaw(TitleConfig),
          name: 'title-config',
        },
        desc: {
          id: uuidv4(),
          status: '默认描述内容',
          isShow: false,
          editComponent: DescriptionConfig,
          name: 'desc-config',
        },
        position: {
          id: uuidv4(),
          currentStatus: 0,
          status: ['左对齐', '居中对齐'],
          isShow: false,
          editComponent: markRaw(PositionConfig),
          name: 'position-config',
        },
        titleSize: {
          id: uuidv4(),
          currentStatus: 0,
          status: ['26', '24', '22'],
          isShow: true,
          editComponent: markRaw(FontSizeConfig),
          name: 'size-config',
        },
        descSize: {
          id: uuidv4(),
          currentStatus: 0,
          status: ['16', '14', '12'],
          isShow: false,
          editComponent: markRaw(FontSizeConfig),
          name: 'size-config',
        },
        titleWeight: {
          id: uuidv4(),
          currentStatus: 1,
          status: ['加粗', '正常'],
          isShow: true,
          editComponent: markRaw(FontWeightConfig),
          name: 'weight-config',
        },
        descWeight: {
          id: uuidv4(),
          currentStatus: 1,
          status: ['加粗', '正常'],
          isShow: false,
          editComponent: markRaw(FontWeightConfig),
          name: 'weight-config',
        },
        titleItalic: {
          id: uuidv4(),
          currentStatus: 1,
          status: ['斜体', '正常'],
          isShow: true,
          editComponent: markRaw(FontItalicConfig),
          name: 'italic-config',
        },
        descItalic: {
          id: uuidv4(),
          currentStatus: 1,
          status: ['斜体', '正常'],
          isShow: false,
          editComponent: markRaw(FontItalicConfig),
          name: 'italic-config',
        },
        titleColor: {
          id: uuidv4(),
          status: '#000',
          isShow: true,
          editComponent: markRaw(FontColorConfig),
          name: 'color-config',
        },
        descColor: {
          id: uuidv4(),
          status: '#909399',
          isShow: false,
          editComponent: markRaw(FontColorConfig),
          name: 'color-config',
        },
      },
    }),
    Object.assign({}, remarkDefaultStatus(), {
      status: <RemarkTypeStatusConfig>{
        type: {
          id: uuidv4(),
          currentStatus: 1,
          status: ['标题', '段落'],
          isShow: true,
          editComponent: markRaw(RemarkTypeConfig),
          name: 'remark-type-config',
        },
        title: {
          id: uuidv4(),
          status: '默认标题内容',
          isShow: false,
          editComponent: markRaw(TitleConfig),
          name: 'title-config',
        },
        desc: {
          id: uuidv4(),
          status:
            '为了给您提供更好的服务，希望您能抽出几分钟时间，将您的感受和建议告诉我们，我们非常重视每位用户的宝贵意见，期待您的参与！现在我们就马上开始吧！',
          isShow: true,
          editComponent: markRaw(DescriptionConfig),
          name: 'desc-config',
        },
        position: {
          id: uuidv4(),
          currentStatus: 0,
          status: ['左对齐', '居中对齐'],
          isShow: true,
          editComponent: markRaw(PositionConfig),
          name: 'position-config',
        },
        titleSize: {
          id: uuidv4(),
          currentStatus: 0,
          status: ['26', '24', '22'],
          isShow: false,
          editComponent: markRaw(FontSizeConfig),
          name: 'size-config',
        },
        descSize: {
          id: uuidv4(),
          currentStatus: 0,
          status: ['16', '14', '12'],
          isShow: true,
          editComponent: markRaw(FontSizeConfig),
          name: 'size-config',
        },
        titleWeight: {
          id: uuidv4(),
          currentStatus: 1,
          status: ['加粗', '正常'],
          isShow: false,
          editComponent: markRaw(FontWeightConfig),
          name: 'weight-config',
        },
        descWeight: {
          id: uuidv4(),
          currentStatus: 1,
          status: ['加粗', '正常'],
          isShow: true,
          editComponent: markRaw(FontWeightConfig),
          name: 'weight-config',
        },
        titleItalic: {
          id: uuidv4(),
          currentStatus: 1,
          status: ['斜体', '正常'],
          isShow: false,
          editComponent: markRaw(FontItalicConfig),
          name: 'italic-config',
        },
        descItalic: {
          id: uuidv4(),
          currentStatus: 1,
          status: ['斜体', '正常'],
          isShow: true,
          editComponent: markRaw(FontItalicConfig),
          name: 'italic-config',
        },
        titleColor: {
          id: uuidv4(),
          status: '#000',
          isShow: false,
          editComponent: markRaw(FontColorConfig),
          name: 'color-config',
        },
        descColor: {
          id: uuidv4(),
          status: '#909399',
          isShow: true,
          editComponent: markRaw(FontColorConfig),
          name: 'color-config',
        },
      },
    }),
  ] as unknown as MaterialType[];

export const useEditorStore = defineStore('editorStore', {
  state: () => ({
    currentFocusedComponentIndex: -1, // 当前选中的组件索引
    questionsCount: 0, // 问卷题目的数量
    components: initStore() as MaterialType[], // 问卷题目的数组
  }),
  actions: {
    setText,
    addOption,
    removeOption,
    setPosition,
    setSize,
    setPictureLinkByIndex,
    toggleRemarkType,
    setWeight,
    setItalic,
    setColor,
    addComponent(newComponent: MaterialType) {
      this.components.push(newComponent);
      this.currentFocusedComponentIndex = -1;
      if (isQuestionMaterial(newComponent.name)) {
        this.questionsCount++;
      }
    },
    setCurrentFocusedComponentIndex(index: number) {
      this.currentFocusedComponentIndex = index;
    },
    removeComponent(index: number) {
      if (isQuestionMaterial(this.components[index].name)) {
        this.questionsCount--;
      }
      this.components.splice(index, 1);
    },
    resetComponents() {
      this.components = initStore() as MaterialType[];
      this.currentFocusedComponentIndex = -1;
      this.questionsCount = 0;
    },
    saveQuestionnaire(questionnaire: QuestionnaireDatabaseData) {
      return saveQuestionnaire(questionnaire);
    },
    setStore(data: QuestionnaireDatabaseData) {
      this.components = data.components;
      this.questionsCount = data.questionsCount;
      this.currentFocusedComponentIndex = -1;
    },
    updateQuestionnaire(id: number, data: Partial<QuestionnaireDatabaseData>) {
      return updateQuestionnaireById(id, data);
    },
    removeComponents(id: number) {
      return deleteQuestionnaireById(id);
    },
    setUse,
    setOptionsByIndex,
  },
});
