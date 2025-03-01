import { defineStore } from 'pinia';
import { defaultStatusMap } from '@/configs';
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
import { initOptionsOfPresetMaterial } from '@/utils';
import type { MaterialType, MaterialName } from '@/types';

// 确定哪些业务预设组件需要做初始化工作
const keyToInitStatus = [
  'personal-gender',
  'personal-education',
  'personal-telephone',
  'personal-wechat',
  'personal-qq',
  'personal-email',
  'personal-address',
  'personal-identity',
  'personal-name',
  'personal-age',
  'personal-career',
  'personal-birthday',
  'personal-college',
  'personal-major',
  'personal-industry',
  'personal-company',
  'personal-position',
] as MaterialName[];

const initResult: { [key: string]: MaterialType } = {};

keyToInitStatus.forEach((key) => {
  const oldStatus = defaultStatusMap[key]();
  const newStatus = initOptionsOfPresetMaterial(oldStatus, key);
  initResult[key] = newStatus;
});

export const useMaterialStore = defineStore('materialStore', {
  state: () => ({
    currentMaterialComponent: 'single-select',
    components: {
      'single-select': defaultStatusMap['single-select'](),
      'single-picture-select': defaultStatusMap['single-picture-select'](),
      'multiple-select': defaultStatusMap['multiple-select'](),
      'multiple-picture-select': defaultStatusMap['multiple-picture-select'](),
      'drop-down-select': defaultStatusMap['drop-down-select'](),
      'text-input': defaultStatusMap['text-input'](),
      'rate-evaluate': defaultStatusMap['rate-evaluate'](),
      'time-picker': defaultStatusMap['time-picker'](),
      'remark-note': defaultStatusMap['remark-note'](),
      'personal-gender': initResult['personal-gender'],
      'personal-education': initResult['personal-education'],
      'personal-name': initResult['personal-name'],
      'personal-identity': initResult['personal-identity'],
      'personal-age': initResult['personal-age'],
      'personal-career': initResult['personal-career'],
      'personal-birthday': initResult['personal-birthday'],
      'personal-college': initResult['personal-college'],
      'personal-major': initResult['personal-major'],
      'personal-industry': initResult['personal-industry'],
      'personal-company': initResult['personal-company'],
      'personal-position': initResult['personal-position'],

      'personal-telephone': initResult['personal-telephone'],
      'personal-wechat': initResult['personal-wechat'],
      'personal-qq': initResult['personal-qq'],
      'personal-email': initResult['personal-email'],
      'personal-address': initResult['personal-address'],
    },
  }),
  actions: {
    setCurrentMaterialComponent(component: string) {
      this.currentMaterialComponent = component;
    },
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
    setUse,
    setOptionsByIndex,
  },
});
