import type { VueComponentType } from '../common'
import type { OptionalStatusConfig, RemarkTypeStatusConfig } from './materialStatusConfig'

export interface MaterialType {
  type: VueComponentType
  name: string
  id: string
  status: OptionalStatusConfig | RemarkTypeStatusConfig
}
