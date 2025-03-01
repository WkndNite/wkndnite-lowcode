import type { OptionalProps, TextProps } from './materials/configProps';
import type { MaterialName } from './materials/materialName';
import type { RemarkTypeStatusConfig } from './materials/materialStatusConfig';
import type { MaterialType } from './materials/materialType';
import type { PictureLink } from './tools';
import type { RateEvaluateOptionsObject } from './materials';

export interface Actions {
  setText: (currentConfig: TextProps, newValue: string) => void;
  addOption: (currentConfig: OptionalProps) => void;
  removeOption: (currentConfig: OptionalProps, index: number) => boolean;
  setPosition: (currentConfig: OptionalProps, newPosition: number) => void;
  setSize: (currentConfig: OptionalProps, newSize: number) => void;
  setPictureLinkByIndex: (currentConfig: OptionalProps, pictureLinkObj: PictureLink) => void;
  setOptionsByIndex: (
    currentConfig: OptionalProps,
    rateEvaluateObj: RateEvaluateOptionsObject,
  ) => void;
  toggleRemarkType: (
    currentConfig: RemarkTypeStatusConfig,
    type: number,
    isShowChange: boolean,
  ) => void;
  setWeight: (currentConfig: OptionalProps, newWeight: number) => void;
  setItalic: (currentConfig: OptionalProps, newItalic: number) => void;
  setColor: (currentConfig: TextProps, newColor: string) => void;
  setUse: (currentConfig: OptionalProps, isUse: boolean) => void;
}

export interface MaterialStore extends Actions {
  currentMaterialComponent: MaterialName;
  components: Record<MaterialName, MaterialType>;
  setCurrentMaterialName: (name: MaterialName) => void;
}
