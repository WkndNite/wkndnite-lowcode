import { ageOptions, careerOptions, educationOptions, genderOptions } from '@/configs';
import { materialsMap } from '@/configs/materialsMap';
import {
  isOptionalStatusConfig,
  isPictureArray,
  isRemarkTypeStatusConfig,
  isStringArray,
  isValueArray,
  type AllName,
  type MaterialName,
  type MaterialType,
  type OptionalProps,
  type TextProps,
  type VueComponentType,
} from '@/types';

export function getTextStatusConfig(props: TextProps) {
  return props.status;
}

export function getStringArrayStatusConfig(props: OptionalProps) {
  if (props && isStringArray(props.status)) {
    return props.status;
  }
}

export function getPicTitleDescStatusArr(props: OptionalProps) {
  if (props && isPictureArray(props.status)) {
    return props.status;
  }
}

export function getCurrentStatusConfig(props: OptionalProps) {
  if (props) return props.currentStatus;
}

export function getStringArrayStatusByCurrentStatus(props: OptionalProps) {
  if (props && isStringArray(props.status)) return props.status[props.currentStatus];
}

export function getValueStatusByCurrentStatus(props: OptionalProps) {
  if (props && isValueArray(props.status)) return props.status[props.currentStatus];
}

export function initOptionsOfPresetMaterial(
  materialNewStatus: MaterialType,
  materialNewName: MaterialName,
) {
  switch (materialNewName) {
    case 'personal-name':
      materialNewStatus.name = 'personal-name';
      materialNewStatus.status.title.status = '您的姓名是？';
      if (isRemarkTypeStatusConfig(materialNewStatus.status)) {
        materialNewStatus.status.type.isShow = false;
      }
      return materialNewStatus;
    case 'personal-birthday':
      materialNewStatus.name = 'personal-birthday';
      materialNewStatus.status.title.status = '您的生日是？';
      return materialNewStatus;
    case 'personal-identity':
      materialNewStatus.name = 'personal-identity';
      materialNewStatus.status.title.status = '您的身份证号是？';
      if (isRemarkTypeStatusConfig(materialNewStatus.status)) {
        materialNewStatus.status.type.isShow = false;
      }
      return materialNewStatus;
    case 'personal-telephone':
      materialNewStatus.name = 'personal-telephone';
      materialNewStatus.status.title.status = '您的手机号是？';
      if (isRemarkTypeStatusConfig(materialNewStatus.status)) {
        materialNewStatus.status.type.isShow = false;
      }
      return materialNewStatus;
    case 'personal-email':
      materialNewStatus.name = 'personal-email';
      materialNewStatus.status.title.status = '您的邮箱是？';
      if (isRemarkTypeStatusConfig(materialNewStatus.status)) {
        materialNewStatus.status.type.isShow = false;
      }
      return materialNewStatus;
    case 'personal-address':
      materialNewStatus.name = 'personal-address';
      materialNewStatus.status.title.status = '您的地址是？';
      if (isRemarkTypeStatusConfig(materialNewStatus.status)) {
        materialNewStatus.status.type.isShow = false;
      }
      return materialNewStatus;
    case 'personal-age':
      materialNewStatus.name = 'personal-age';
      materialNewStatus.status.title.status = '您的年龄是？';
      if (isOptionalStatusConfig(materialNewStatus.status)) {
        materialNewStatus.status.options.status = ageOptions();
      }
      return materialNewStatus;
    case 'personal-college':
      materialNewStatus.name = 'personal-college';
      materialNewStatus.status.title.status = '您的学校是？';
      if (isRemarkTypeStatusConfig(materialNewStatus.status)) {
        materialNewStatus.status.type.isShow = false;
      }
      return materialNewStatus;
    case 'personal-major':
      materialNewStatus.name = 'personal-major';
      materialNewStatus.status.title.status = '您的专业是？';
      if (isRemarkTypeStatusConfig(materialNewStatus.status)) {
        materialNewStatus.status.type.isShow = false;
      }
      return materialNewStatus;
    case 'personal-industry':
      materialNewStatus.name = 'personal-industry';
      materialNewStatus.status.title.status = '您所在行业是？';
      if (isRemarkTypeStatusConfig(materialNewStatus.status)) {
        materialNewStatus.status.type.isShow = false;
      }
      return materialNewStatus;
    case 'personal-company':
      materialNewStatus.name = 'personal-company';
      materialNewStatus.status.title.status = '您所在公司是？';
      if (isRemarkTypeStatusConfig(materialNewStatus.status)) {
        materialNewStatus.status.type.isShow = false;
      }
      return materialNewStatus;
    case 'personal-gender':
      materialNewStatus.name = 'personal-gender';
      materialNewStatus.status.title.status = '您的性别是？';
      if (isOptionalStatusConfig(materialNewStatus.status)) {
        materialNewStatus.status.options.status = genderOptions();
      }
      return materialNewStatus;
    case 'personal-career':
      materialNewStatus.name = 'personal-career';
      materialNewStatus.status.title.status = '您的职业是？';
      if (isOptionalStatusConfig(materialNewStatus.status)) {
        materialNewStatus.status.options.status = careerOptions();
      }
      return materialNewStatus;
    case 'personal-position':
      materialNewStatus.name = 'personal-position';
      materialNewStatus.status.title.status = '您的职位是？';
      if (isRemarkTypeStatusConfig(materialNewStatus.status)) {
        materialNewStatus.status.type.isShow = false;
      }
      return materialNewStatus;
    case 'personal-education':
      materialNewStatus.name = 'personal-education';
      materialNewStatus.status.title.status = '到目前为止，您的最高学历是？';
      if (isOptionalStatusConfig(materialNewStatus.status)) {
        materialNewStatus.status.options.status = educationOptions();
      }
      return materialNewStatus;
    case 'personal-wechat':
      materialNewStatus.name = 'personal-wechat';
      materialNewStatus.status.title.status = '您的微信是？';
      if (isRemarkTypeStatusConfig(materialNewStatus.status)) {
        materialNewStatus.status.type.isShow = false;
      }
      return materialNewStatus;
    case 'personal-qq':
      materialNewStatus.name = 'personal-qq';
      materialNewStatus.status.title.status = '您的QQ是？';
      if (isRemarkTypeStatusConfig(materialNewStatus.status)) {
        materialNewStatus.status.type.isShow = false;
      }
      return materialNewStatus;
    default:
      return materialNewStatus;
  }
}

export function restoreComponentStatus(componentsArray: MaterialType[]) {
  componentsArray.forEach((component) => {
    const name = component.name as AllName;
    component.type = materialsMap[name];
    for (const key in component.status) {
      const status = component.status as unknown as {
        [key: string]: { name: string; editComponent?: VueComponentType };
      };
      const name = status[key].name as AllName;
      status[key].editComponent = materialsMap[name];
    }
  });
}
