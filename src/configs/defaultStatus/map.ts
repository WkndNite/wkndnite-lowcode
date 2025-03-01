// 定义默认状态映射表
import SingleSelectDefaultStatus from './singleSelect';
import SinglePictureSelect from './singlePictureSelect';
import Remark from './remark';
import MultipleSelectDefaultStatus from './multipleSelect';
import DropDownSelectDefaultStatus from './dropDownSelect';
import MultiplePictureSelectDefaultStatus from './multiplePictureSelect';
import TextInputDefaultStatus from './textInput';
import RateEvaluateDefaultStatus from './rateEvaluate';
import TimePickerDefaultStatus from './timePicker';

export const defaultStatusMap = {
  'single-select': SingleSelectDefaultStatus,
  'single-picture-select': SinglePictureSelect,
  'multiple-select': MultipleSelectDefaultStatus,
  'drop-down-select': DropDownSelectDefaultStatus,
  'multiple-picture-select': MultiplePictureSelectDefaultStatus,

  'text-input': TextInputDefaultStatus,

  'rate-evaluate': RateEvaluateDefaultStatus,
  'time-picker': TimePickerDefaultStatus,

  'remark-note': Remark,

  'personal-gender': SingleSelectDefaultStatus,
  'personal-education': SingleSelectDefaultStatus,
  'personal-identity': TextInputDefaultStatus,
  'personal-name': TextInputDefaultStatus,
  'personal-age': SingleSelectDefaultStatus,
  'personal-career': SingleSelectDefaultStatus,
  'personal-birthday': TimePickerDefaultStatus,
  'personal-college': TextInputDefaultStatus,
  'personal-major': TextInputDefaultStatus,
  'personal-industry': TextInputDefaultStatus,
  'personal-company': TextInputDefaultStatus,
  'personal-position': TextInputDefaultStatus,

  'personal-telephone': TextInputDefaultStatus,
  'personal-wechat': TextInputDefaultStatus,
  'personal-qq': TextInputDefaultStatus,
  'personal-email': TextInputDefaultStatus,
  'personal-address': TextInputDefaultStatus,
};
