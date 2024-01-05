import { HeroType } from '@/types'

export function computedLevelByExperience(experience: number): number {
  if (experience < 6) {
    return 3 // 经验小于6，3级
  } else if (experience < 10) {
    return 4 // 经验6-9，4级
  } else if (experience < 20) {
    return 5 // 经验10-19，5级
  } else if (experience < 36) {
    return 6 // 经验20-35，6级
  } else if (experience < 48) {
    return 7 // 经验36-47，7级
  } else if (experience < 80) {
    return 8 // 经验48-79，8级
  } else {
    return 9 // 经验80及以上，9级
  }
}

export function computedProbabilityByLevel(level: number) {
  switch (level) {
    case 1: {
      return {
        fiveCostCards: 0,
        fourCostCards: 0,
        threeCostCards: 0,
        twoCostCards: 0,
        oneCostCards: 100
      }
    }
    case 2: {
      return {
        fiveCostCards: 0,
        fourCostCards: 0,
        threeCostCards: 0,
        twoCostCards: 0,
        oneCostCards: 100
      }
    }
    case 3: {
      return {
        fiveCostCards: 0,
        fourCostCards: 0,
        threeCostCards: 0,
        twoCostCards: 25,
        oneCostCards: 75
      }
    }
    case 4: {
      return {
        fiveCostCards: 0,
        fourCostCards: 0,
        threeCostCards: 15,
        twoCostCards: 30,
        oneCostCards: 55
      }
    }
    case 5: {
      return {
        fiveCostCards: 0,
        fourCostCards: 2,
        threeCostCards: 20,
        twoCostCards: 33,
        oneCostCards: 45
      }
    }
    case 6: {
      return {
        fiveCostCards: 0,
        fourCostCards: 5,
        threeCostCards: 30,
        twoCostCards: 40,
        oneCostCards: 25
      }
    }
    case 7: {
      return {
        fiveCostCards: 1,
        fourCostCards: 15,
        threeCostCards: 35,
        twoCostCards: 30,
        oneCostCards: 19
      }
    }
    case 8: {
      return {
        fiveCostCards: 4,
        fourCostCards: 25,
        threeCostCards: 35,
        twoCostCards: 20,
        oneCostCards: 16
      }
    }
    case 9: {
      return {
        fiveCostCards: 16,
        fourCostCards: 30,
        threeCostCards: 30,
        twoCostCards: 15,
        oneCostCards: 9
      }
    }
    case 10: {
      return {
        fiveCostCards: 25,
        fourCostCards: 40,
        threeCostCards: 20,
        twoCostCards: 10,
        oneCostCards: 5
      }
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
