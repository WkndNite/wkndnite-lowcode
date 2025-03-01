export type StringOptionsArray = string[];
export type TimePickerOptionsArray = Array<{
  value: string;
  status: string;
  format: string;
}>;

export type RateEvaluateOptionsObject = {
  value: string;
  index: number;
};

export type PictureOptionsArray = Array<{
  picTitle: string;
  picDesc: string;
  value: string;
}>;

export type OptionsArray = StringOptionsArray | TimePickerOptionsArray | PictureOptionsArray;

export function isRateEvaluateObject(obj: object): obj is RateEvaluateOptionsObject {
  return 'value' in obj && 'index' in obj;
}

export function isStringArray(array: OptionsArray): array is StringOptionsArray {
  return Array.isArray(array) && array.every((item) => typeof item === 'string');
}

export function isValueArray(array: OptionsArray): array is TimePickerOptionsArray {
  return (
    Array.isArray(array) &&
    array.every((item) => typeof item === 'object' && 'value' in item && 'status' in item)
  );
}

export function isPictureArray(array: OptionsArray): array is PictureOptionsArray {
  return (
    Array.isArray(array) &&
    array.every(
      (item) =>
        typeof item === 'object' && 'picTitle' in item && 'picDesc' in item && 'value' in item,
    )
  );
}
