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
        5: 0,
        4: 0,
        3: 0,
        2: 0,
        1: 100
      }
    }
    case 2: {
      return {
        5: 0,
        4: 0,
        3: 0,
        2: 0,
        1: 100
      }
    }
    case 3: {
      return {
        5: 0,
        4: 0,
        3: 0,
        2: 25,
        1: 75
      }
    }
    case 4: {
      return {
        5: 0,
        4: 0,
        3: 15,
        2: 30,
        1: 55
      }
    }
    case 5: {
      return {
        5: 0,
        4: 2,
        3: 20,
        2: 33,
        1: 45
      }
    }
    case 6: {
      return {
        5: 0,
        4: 5,
        3: 30,
        2: 40,
        1: 25
      }
    }
    case 7: {
      return {
        5: 1,
        4: 15,
        3: 35,
        2: 30,
        1: 19
      }
    }
    case 8: {
      return {
        5: 4,
        4: 25,
        3: 35,
        2: 20,
        1: 16
      }
    }
    case 9: {
      return {
        5: 16,
        4: 30,
        3: 30,
        2: 15,
        1: 9
      }
    }
    case 10: {
      return {
        5: 25,
        4: 40,
        3: 20,
        2: 10,
        1: 5
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
