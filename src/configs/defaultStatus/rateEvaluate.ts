import { markRaw } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import RateEvaluate from '@/components/MaterialsMarket/Advanced/RateEvaluate.vue';

import {
  TitleConfig,
  DescriptionConfig,
  PositionConfig,
  FontSizeConfig,
  FontItalicConfig,
  FontColorConfig,
  FontWeightConfig,
} from '@/components/ConfigurationPanel/index';
import RateEvaluateConfig from '@/components/ConfigurationPanel/PanelItem/RateEvaluateConfig.vue';

export default function () {
  return {
    type: markRaw(RateEvaluate),
    name: 'rate-evaluate',
    id: uuidv4(),
    status: {
      title: {
        id: uuidv4(),
        status: '默认评分题标题',
        isShow: true,
        name: 'title-config',
        editComponent: markRaw(TitleConfig),
      },
      desc: {
        id: uuidv4(),
        status: '默认评分题描述',
        isShow: true,
        name: 'desc-config',
        editComponent: markRaw(DescriptionConfig),
      },
      options: {
        id: uuidv4(),
        currentStatus: 0,
        status: ['非常不满意', '不满意', '一般', '满意', '非常满意'],
        isShow: true,
        isUse: true,
        name: 'rate-text-config',
        editComponent: markRaw(RateEvaluateConfig),
      },
      position: {
        id: uuidv4(),
        currentStatus: 0,
        status: ['左对齐', '居中对齐'],
        isShow: true,
        name: 'position-config',
        editComponent: markRaw(PositionConfig),
      },
      titleSize: {
        id: uuidv4(),
        currentStatus: 0,
        status: ['22', '20', '18'],
        isShow: true,
        name: 'size-config',
        editComponent: markRaw(FontSizeConfig),
      },
      descSize: {
        id: uuidv4(),
        currentStatus: 0,
        status: ['16', '14', '12'],
        isShow: true,
        name: 'size-config',
        editComponent: markRaw(FontSizeConfig),
      },
      titleWeight: {
        id: uuidv4(),
        currentStatus: 1,
        status: ['加粗', '正常'],
        isShow: true,
        name: 'weight-config',
        editComponent: markRaw(FontWeightConfig),
      },
      descWeight: {
        id: uuidv4(),
        currentStatus: 1,
        status: ['加粗', '正常'],
        isShow: true,
        name: 'weight-config',
        editComponent: markRaw(FontWeightConfig),
      },
      titleItalic: {
        id: uuidv4(),
        currentStatus: 1,
        status: ['斜体', '正常'],
        isShow: true,
        name: 'italic-config',
        editComponent: markRaw(FontItalicConfig),
      },
      descItalic: {
        id: uuidv4(),
        currentStatus: 1,
        status: ['斜体', '正常'],
        isShow: true,
        name: 'italic-config',
        editComponent: markRaw(FontItalicConfig),
      },
      titleColor: {
        id: uuidv4(),
        status: '#000',
        isShow: true,
        name: 'color-config',
        editComponent: markRaw(FontColorConfig),
      },
      descColor: {
        id: uuidv4(),
        status: '#909399',
        isShow: true,
        name: 'color-config',
        editComponent: markRaw(FontColorConfig),
      },
    },
  };
}
