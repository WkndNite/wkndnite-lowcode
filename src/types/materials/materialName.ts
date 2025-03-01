export type SelectType =
  | 'single-select'
  | 'single-picture-select'
  | 'multiple-select'
  | 'multiple-picture-select'
  | 'drop-down-select';

export type PersonalType =
  | 'personal-gender'
  | 'personal-education'
  | 'personal-telephone'
  | 'personal-wechat'
  | 'personal-qq'
  | 'personal-email'
  | 'personal-address'
  | 'personal-identity'
  | 'personal-name'
  | 'personal-age'
  | 'personal-career'
  | 'personal-birthday'
  | 'personal-college'
  | 'personal-major'
  | 'personal-industry'
  | 'personal-company'
  | 'personal-position';
export type InputType = 'text-input';
export type AdvancedType = 'rate-evaluate' | 'time-picker';

export type QuestionType = SelectType | PersonalType | InputType | AdvancedType;

export type RemarkType = 'remark-note';
export type NonQuestionType = RemarkType;

export type MaterialName = QuestionType | NonQuestionType;

export const QuestionsMaterialArray = [
  'single-select',
  'single-picture-select',
  'multiple-select',
  'multiple-picture-select',
  'drop-down-select',
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
  'text-input',
  'rate-evaluate',
  'time-picker',
];

export function isQuestionMaterial(materialName: string): materialName is QuestionType {
  return QuestionsMaterialArray.includes(materialName);
}
