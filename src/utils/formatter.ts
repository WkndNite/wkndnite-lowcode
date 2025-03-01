import type { TableColumnCtx } from 'element-plus';
import type { QuestionnaireDatabaseData } from '@/types';

export function formatDate(
  row: QuestionnaireDatabaseData,
  column: TableColumnCtx<QuestionnaireDatabaseData>,
  cellValue: number,
) {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  return new Intl.DateTimeFormat('zh-CN', options).format(new Date(cellValue));
}
