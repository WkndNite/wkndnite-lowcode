import { markRaw } from 'vue';
import { v4 as uuidv4 } from 'uuid';

import {
  TitleConfig,
  DescriptionConfig,
  PositionConfig,
  FontSizeConfig,
  FontItalicConfig,
  FontColorConfig,
  FontWeightConfig,
  TimePickerConfig,
} from '@/components/ConfigurationPanel/index';
import TimePicker from '@/components/MaterialsMarket/Advanced/TimePicker.vue';

export default function () {
  return {
    type: markRaw(TimePicker),
    name: 'time-picker',
    id: uuidv4(),
    status: {
      type: {
        currentStatus: 3,
        status: [
          {
            value: 'week',
            status: '周',
            format: '[Week] ww',
          },
          {
            value: 'year',
            status: '年',
          },
          {
            value: 'month',
            status: '月',
          },
          {
            value: 'date',
            status: '日期',
          },
        ],
        isShow: true,
        name: 'date-time-type-config',
        editComponent: markRaw(TimePickerConfig),
        id: uuidv4(),
      },
      title: {
        id: uuidv4(),
        status: '默认日期/时间标题',
        isShow: true,
        name: 'title-config',
        editComponent: markRaw(TitleConfig),
      },
      desc: {
        id: uuidv4(),
        status: '默认日期/时间描述内容',
        isShow: true,
        name: 'desc-config',
        editComponent: markRaw(DescriptionConfig),
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
