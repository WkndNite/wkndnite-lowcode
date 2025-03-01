import SingleSelect from '@/components/MaterialsMarket/Select/SingleSelect.vue';
import SinglePictureSelect from '@/components/MaterialsMarket/Select/SinglePictureSelect.vue';
import Remark from '@/components/MaterialsMarket/Remarks/RemarkNote.vue';

import type { AllMap } from '@/types';
import { markRaw } from 'vue';

import {
  TitleConfig,
  DescriptionConfig,
  PositionConfig,
  FontSizeConfig,
  FontItalicConfig,
  FontColorConfig,
  FontWeightConfig,
  RemarkTypeConfig,
  OptionsConfig,
  TextInputConfig,
} from '@/components/ConfigurationPanel';
import PictureOptionsConfig from '@/components/ConfigurationPanel/PanelItem/PictureOptionsConfig.vue';
import MultipleSelect from '@/components/MaterialsMarket/Select/MultipleSelect.vue';
import MultiplePictureSelect from '@/components/MaterialsMarket/Select/MultiplePictureSelect.vue';
import DropDownSelect from '@/components/MaterialsMarket/Select/DropDownSelect.vue';
import TextInput from '@/components/MaterialsMarket/Input/TextInput.vue';
import RateEvaluate from '@/components/MaterialsMarket/Advanced/RateEvaluate.vue';
import TimePicker from '@/components/MaterialsMarket/Advanced/TimePicker.vue';
import RateEvaluateConfig from '@/components/ConfigurationPanel/PanelItem/RateEvaluateConfig.vue';
import TimePickerConfig from '@/components/ConfigurationPanel/PanelItem/TimePickerConfig.vue';

export const materialsMap: AllMap = {
  'single-select': markRaw(SingleSelect),
  'single-picture-select': markRaw(SinglePictureSelect),
  'multiple-select': markRaw(MultipleSelect),
  'multiple-picture-select': markRaw(MultiplePictureSelect),
  'drop-down-select': markRaw(DropDownSelect),
  'text-input': markRaw(TextInput),
  'remark-note': markRaw(Remark),
  'rate-evaluate': markRaw(RateEvaluate),
  'time-picker': markRaw(TimePicker),
  'personal-name': markRaw(TextInput),
  'personal-identity': markRaw(TextInput),
  'personal-age': markRaw(SingleSelect),
  'personal-birthday': markRaw(TimePicker),
  'personal-gender': markRaw(SingleSelect),
  'personal-education': markRaw(SingleSelect),
  'personal-college': markRaw(TextInput),
  'personal-major': markRaw(TextInput),
  'personal-industry': markRaw(TextInput),
  'personal-company': markRaw(TextInput),
  'personal-position': markRaw(TextInput),
  'personal-career': markRaw(SingleSelect),
  'personal-address': markRaw(TextInput),
  'personal-email': markRaw(TextInput),
  'personal-telephone': markRaw(TextInput),
  'personal-qq': markRaw(TextInput),
  'personal-wechat': markRaw(TextInput),

  'title-config': markRaw(TitleConfig),
  'desc-config': markRaw(DescriptionConfig),
  'position-config': markRaw(PositionConfig),
  'size-config': markRaw(FontSizeConfig),
  'italic-config': markRaw(FontItalicConfig),
  'color-config': markRaw(FontColorConfig),
  'weight-config': markRaw(FontWeightConfig),
  'remark-type-config': markRaw(RemarkTypeConfig),
  'options-config': markRaw(OptionsConfig),
  'pic-options-config': markRaw(PictureOptionsConfig),
  'rate-text-config': markRaw(RateEvaluateConfig),
  'text-input-type-config': markRaw(TextInputConfig),
  'date-time-type-config': markRaw(TimePickerConfig),
};
