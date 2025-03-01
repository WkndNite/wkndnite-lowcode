import type { RateEvaluateOptionsObject } from './materials';
import type { MaterialType } from './materials/materialType';

export type PictureLink = {
  link: string;
  index: number;
};

export function isPictureLink(pictureObj: object): pictureObj is PictureLink {
  return 'link' in pictureObj && 'index' in pictureObj;
}

export type GetLink = (pictureObj: PictureLink) => void;

export type updateConfigStatus = (
  configKey: string,
  payload?: number | string | boolean | PictureLink | RateEvaluateOptionsObject,
  isShowChange?: boolean,
) => void;

export function isAccessedToGeneratePDF(materialName: string): boolean {
  const isAccessedMaterialName = [
    'single-select',
    'single-picture-select',
    'multiple-select',
    'multiple-picture-select',
    'drop-down-select',
    'text-input',

    'personal-name',
    'personal-age',
    'personal-telephone',
    'personal-email',
    'personal-address',
    'personal-birthday',
    'personal-identity',
    'personal-career',
    'personal-college',
    'personal-major',
    'personal-industry',
    'personal-company',
    'personal-position',
    'personal-wechat',
    'personal-qq',
    'personal-gender',
    'personal-education',
    'remark-note',
  ];
  return isAccessedMaterialName.includes(materialName);
}

export type QuestionnaireData = {
  questionsCount: number;
  components: MaterialType[];
};
