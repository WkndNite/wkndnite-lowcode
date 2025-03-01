import { isQuestionMaterial, type MaterialType } from '@/types';
import { computed } from 'vue';

export function useSerialNumber(materials: MaterialType[]) {
  return computed(() => {
    let questionSerialNumber = 1;
    return materials.map((material) => {
      if (isQuestionMaterial(material.name)) {
        return questionSerialNumber++;
      }
      return null;
    });
  });
}
