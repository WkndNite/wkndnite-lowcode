// 图片单选题的 JSON Schema 配置

import SinglePictureSelect from '@/components/MaterialsMarket/Select/SinglePictureSelect.vue';
import { markRaw } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import {
  TitleConfig,
  DescriptionConfig,
  PositionConfig,
  PictureOptionsConfig,
  FontSizeConfig,
  FontItalicConfig,
  FontColorConfig,
  FontWeightConfig,
} from '@/components/ConfigurationPanel/index';

export default function () {
  return {
    type: markRaw(SinglePictureSelect),
    name: 'single-picture-select',
    id: uuidv4(),
    status: {
      title: {
        id: uuidv4(),
        status: '图片单选默认标题',
        isShow: true,
        name: 'title-config',
        editComponent: markRaw(TitleConfig),
      },
      desc: {
        id: uuidv4(),
        status: '图片单选默认描述',
        isShow: true,
        name: 'desc-config',
        editComponent: markRaw(DescriptionConfig),
      },
      options: {
        id: uuidv4(),
        status: [
          {
            picTitle: '选项1',
            picDesc: '选项1描述',
            value: '',
          },
          {
            picTitle: '选项2',
            picDesc: '选项2描述',
            value: '',
          },
        ],
        currentStatus: 0,
        isShow: true,
        name: 'option-config',
        editComponent: markRaw(PictureOptionsConfig),
      },
      position: {
        id: uuidv4(),
        status: ['左对齐', '居中'],
        currentStatus: 0,
        isShow: true,
        name: 'position-config',
        editComponent: markRaw(PositionConfig),
      },
      titleSize: {
        id: uuidv4(),
        status: ['22', '20', '18'],
        currentStatus: 0,
        isShow: true,
        name: 'size-config',
        editComponent: markRaw(FontSizeConfig),
      },
      descSize: {
        id: uuidv4(),
        status: ['16', '14', '12'],
        currentStatus: 0,
        isShow: true,
        name: 'size-config',
        editComponent: markRaw(FontSizeConfig),
      },
      titleWeight: {
        id: uuidv4(),
        status: ['加粗', '正常'],
        currentStatus: 1,
        isShow: true,
        name: 'italic-config',
        editComponent: markRaw(FontWeightConfig),
      },
      descWeight: {
        id: uuidv4(),
        status: ['加粗', '正常'],
        currentStatus: 1,
        isShow: true,
        name: 'italic-config',
        editComponent: markRaw(FontWeightConfig),
      },
      titleItalic: {
        id: uuidv4(),
        status: ['斜体', '正常'],
        currentStatus: 1,
        isShow: true,
        name: 'italic-config',
        editComponent: markRaw(FontItalicConfig),
      },
      descItalic: {
        id: uuidv4(),
        status: ['斜体', '正常'],
        currentStatus: 1,
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
