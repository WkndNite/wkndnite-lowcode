export type BaseConfigName =
  | 'title-config'
  | 'desc-config'
  | 'position-config'
  | 'size-config'
  | 'italic-config'
  | 'weight-config'
  | 'color-config';

export type OptionalConfigName = 'options-config' | 'pic-options-config';
export type RemarkTypeConfigName = 'remark-type-config';
export type RateTextConfigName = 'rate-text-config';
export type TextInputTypeConfigName = 'text-input-type-config';
export type DateTimeTypeConfigName = 'date-time-type-config';

export type ConfigName =
  | BaseConfigName
  | OptionalConfigName
  | RemarkTypeConfigName
  | RateTextConfigName
  | TextInputTypeConfigName
  | DateTimeTypeConfigName;
