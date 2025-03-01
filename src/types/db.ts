import type { MaterialType } from './materials/materialType'

export interface QuestionnaireDatabaseData {
  createdAt: number
  updatedAt: number
  title: string
  questionsCount: number
  components: MaterialType[]
}

export interface QuestionnaireTableRow extends QuestionnaireDatabaseData {
  id: number
}
