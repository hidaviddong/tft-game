import { HeroType, ProbabilityByLevelType } from '@/types'

export function computedLevelByExperience(experience: number): number {
  return experience * 2
}

export function computedProbabilityByLevel(level: number): ProbabilityByLevelType {
  switch (level) {
    case 1: {
      return {
        fiveCostCards: 0,
        fourCostCards: 10,
        threeCostCards: 20,
        twoCostCards: 40,
        oneCostCards: 30
      }
    }
    default:
      return {
        fiveCostCards: 0,
        fourCostCards: 10,
        threeCostCards: 20,
        twoCostCards: 40,
        oneCostCards: 30
      }
  }
}

export function findHeroFromDeck(deck: HeroType[], heroName: string) {
  return deck.find((hero) => hero.name === heroName)
}

export function pickHeroFromDeck(deck: HeroType[], heroName: string) {
  return deck.map((hero) => {
    if (hero.name === heroName && hero.totalAmount > 0) {
      return { ...hero, totalAmount: hero.totalAmount - 1 }
    } else {
      return hero
    }
  })
}

export function putHeroToDeck(deck: HeroType[], heroName: string) {
  return deck.map((hero) => {
    if (hero.name === heroName && hero.totalAmount > 0) {
      return { ...hero, totalAmount: hero.totalAmount + 1 }
    } else {
      return hero
    }
  })
}
