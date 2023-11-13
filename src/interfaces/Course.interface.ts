export interface CourseInfo {
  informations?: {
    description: string
    whoCanParticipate: string
    observations?: string
    classContent: string
    dateSchedule: string
    hourSchedule: string
    color: string
  }
  subscriptions?: {
    status: 'Aberto' | 'Em breve' | 'Fechado'
    price: number
    subscriptionSchedule: string
  }
  status?: 'active' | 'inactive'
  title: string
}

export interface CourseStage {
  stagesID?: string
  when: string
  resultsDate?: Date
  description: string
}

export interface CourseDocument {
  docsID?: string
  title: string
  downloadLink: string
}

export interface Course {
  id?: string
  title: string
  stripeProductID?: string
  status?: 'active' | 'inactive'
  informations: {
    description: string
    whoCanParticipate: string
    observations?: string
    classContent: string
    dateSchedule: string
    hourSchedule: string
    color: string
  }
  subscriptions: {
    status: 'Aberto' | 'Em breve' | 'Fechado'
    price: number
    subscriptionSchedule: string
  }
  selectiveStages?: CourseStage[]
  documents?: CourseDocument[]
}
