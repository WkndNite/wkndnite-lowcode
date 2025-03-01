import type { OptionalProps, TextProps } from './configProps'

export interface BaseStatusConfig {
  title: TextProps
  desc: TextProps
  position: OptionalProps
  titleSize: OptionalProps
  descSize: OptionalProps
  titleWeight: OptionalProps
  descWeight: OptionalProps
  titleItalic: OptionalProps
  descItalic: OptionalProps
  titleColor: TextProps
  descColor: TextProps
}

export interface OptionalStatusConfig extends BaseStatusConfig {
  options: OptionalProps
}

export interface RemarkTypeStatusConfig extends BaseStatusConfig {
  type: OptionalProps
}

export function isOptionalStatusConfig(status: BaseStatusConfig): status is OptionalStatusConfig {
  return 'options' in status
}

export function isRemarkTypeStatusConfig(
  status: BaseStatusConfig,
): status is RemarkTypeStatusConfig {
  return 'type' in status
}
