import type { VueComponentType } from '../common';
import type { ConfigName } from './configName';
import type { MaterialName } from './materialName';

export type AllName = MaterialName | ConfigName;
export type AllMap = {
  [key in AllName]: VueComponentType;
};

export * from './configName';
export * from './configProps';
export * from './materialName';
export * from './materialStatusConfig';
export * from './materialType';
export * from './optionPropsArrayType';
