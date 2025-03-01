import type { VueComponentType } from '../common';
import type { OptionsArray } from './optionPropsArrayType';

export interface MaterialConfigBaseProps {
  id: string;
  isShow: boolean;
  name: string;
  editComponent: VueComponentType;
}

export interface TextProps extends MaterialConfigBaseProps {
  status: string;
}

export interface OptionalProps extends MaterialConfigBaseProps {
  isUse?: boolean;
  status: OptionsArray;
  currentStatus: number;
}
