import {
  isPictureArray,
  isStringArray,
  type OptionalProps,
  type PictureLink,
  type RateEvaluateOptionsObject,
  type RemarkTypeStatusConfig,
  type TextProps,
} from '@/types';

export function setText(textProps: TextProps, text: string) {
  textProps.status = text;
}

export function addOption(optionProps: OptionalProps) {
  if (isStringArray(optionProps.status)) {
    const lastOption = optionProps.status[optionProps.status.length - 1];
    const lastDigit = lastOption.split('').reverse()[0];
    if (!isNaN(Number(lastDigit))) {
      optionProps.status.push(`新增选项${Number(lastDigit) + 1}`);
    } else {
      optionProps.status.push(`新增选项1`);
    }
  } else if (isPictureArray(optionProps.status)) {
    const lastOption = optionProps.status[optionProps.status.length - 1];
    const lastDigit = lastOption.picTitle.split('').reverse()[0];
    if (!isNaN(Number(lastDigit))) {
      optionProps.status.push({
        value: '',
        picTitle: `新增图片标题${Number(lastDigit) + 1}`,
        picDesc: `新增图片描述${Number(lastDigit) + 1}`,
      });
    } else {
      optionProps.status.push({
        value: '',
        picTitle: `新增图片标题1`,
        picDesc: `新增图片描述1`,
      });
    }
  }
}

export function removeOption(optionProps: OptionalProps, index: number) {
  if (optionProps.status.length <= 2) {
    return false;
  }
  optionProps.status.splice(index, 1);
  return true;
}

export function setPosition(optionProps: OptionalProps, index: number) {
  optionProps.currentStatus = index;
}

export function setSize(optionProps: OptionalProps, index: number) {
  optionProps.currentStatus = index;
}

export function setWeight(optionProps: OptionalProps, index: number) {
  console.log('enter setWeight');
  optionProps.currentStatus = index;
}

export function setItalic(optionProps: OptionalProps, index: number) {
  optionProps.currentStatus = index;
}

export function setColor(textProps: TextProps, newVal: string) {
  textProps.status = newVal;
}

export function setPictureLinkByIndex(optionProps: OptionalProps, payload: PictureLink) {
  if (isPictureArray(optionProps.status)) {
    optionProps.status[payload.index].value = payload.link;
  }
}

export function setOptionsByIndex(optionProps: OptionalProps, payload: RateEvaluateOptionsObject) {
  optionProps.status[payload.index] = payload.value;
}

export function toggleRemarkType(
  status: RemarkTypeStatusConfig,
  type: number,
  isShowChange: boolean,
) {
  if (type !== status.type.currentStatus) {
    status.type.currentStatus = type;
    if (isShowChange) {
      status.title.isShow = !status.title.isShow;
      status.desc.isShow = !status.desc.isShow;
      status.position.isShow = !status.position.isShow;
      status.titleSize.isShow = !status.titleSize.isShow;
      status.descSize.isShow = !status.descSize.isShow;
      status.titleWeight.isShow = !status.titleWeight.isShow;
      status.descWeight.isShow = !status.descWeight.isShow;
      status.titleItalic.isShow = !status.titleItalic.isShow;
      status.descItalic.isShow = !status.descItalic.isShow;
      status.titleColor.isShow = !status.titleColor.isShow;
      status.descColor.isShow = !status.descColor.isShow;
    }
  }
}
export function setUse(optionsProps: OptionalProps, isUse: boolean) {
  optionsProps.isUse = isUse;
}
