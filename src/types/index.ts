export interface HeroType {
  name: string
  cost: number
  totalAmount: number
  backgroundImage: string
  avatar: string
  synergies: string[]
}

export interface ProbabilityByLevelType {
  fiveCostCards: number
  fourCostCards: number
  threeCostCards: number
  twoCostCards: number
  oneCostCards: number
}
