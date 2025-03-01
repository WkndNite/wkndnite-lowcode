// 题型面板对应的配置文件，用于配置题型面板的题型

import {
  ChatLineSquare,
  CircleCheck,
  User,
  EditPen,
  Files,
  Message,
} from '@element-plus/icons-vue';

export const EditorQuestionTypeList = [
  {
    title: '选择题',
    icon: CircleCheck,
    list: [
      { materialName: 'single-select', name: '单选题' },
      { materialName: 'single-picture-select', name: '图片单选题' },
      { materialName: 'multiple-select', name: '多选题' },
      { materialName: 'multiple-picture-select', name: '图片多选题' },
      { materialName: 'drop-down-select', name: '下拉选择题' },
    ],
  },
  {
    title: '文本输入',
    icon: EditPen,
    list: [{ materialName: 'text-input', name: '文本输入' }],
  },
  {
    title: '高级题型',
    icon: Files,
    list: [
      { materialName: 'rate-evaluate', name: '评价/打分' },
      { materialName: 'time-picker', name: '日期/时间' },
    ],
  },
  {
    title: '备注说明',
    icon: ChatLineSquare,
    list: [{ materialName: 'remark-note', name: '备注说明' }],
  },
  {
    title: '个人信息',
    icon: User,
    list: [
      { materialName: 'personal-name', name: '姓名' },
      { materialName: 'personal-identity', name: '身份证' },
      { materialName: 'personal-gender', name: '性别' },
      { materialName: 'personal-education', name: '学历' },
      { materialName: 'personal-age', name: '年龄' },
      { materialName: 'personal-college', name: '学校' },
      { materialName: 'personal-major', name: '专业' },
      { materialName: 'personal-industry', name: '行业' },
      { materialName: 'personal-company', name: '公司' },
      { materialName: 'personal-position', name: '职位' },
      { materialName: 'personal-career', name: '职业' },
      { materialName: 'personal-birthday', name: '生日' },
    ],
  },
  {
    title: '联系方式',
    icon: Message,
    list: [
      { materialName: 'personal-telephone', name: '手机号' },
      { materialName: 'personal-email', name: '邮箱' },
      { materialName: 'personal-address', name: '地址' },
      { materialName: 'personal-wechat', name: '微信' },
      { materialName: 'personal-qq', name: 'QQ' },
    ],
  },
];
