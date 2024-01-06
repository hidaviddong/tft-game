import { HeroType } from '@/types'

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
    default:
      return {
        5: 0,
        4: 0,
        3: 0,
        2: 0,
        1: 0
      }
  }
}

export function drawCards(deckCards: HeroType[], probabilityByLevel: ReturnType<typeof computedProbabilityByLevel>) {
  const accumulatedWeights: number[] = []
  let totalWeight = 0

  // 创建累积权重数组
  Object.values(probabilityByLevel).forEach((probability) => {
    totalWeight += probability
    accumulatedWeights.push(totalWeight)
  })
  const handCards = []

  for (let i = 0; i < 5; i++) {
    const randomNum = Math.random() * totalWeight
    const chosenCostIndex = accumulatedWeights.findIndex((weight) => randomNum <= weight)
    const chosenCost = Object.keys(probabilityByLevel)[chosenCostIndex]

    const possibleCards = deckCards.filter((card) => card.cost === Number(chosenCost))
    if (possibleCards.length > 0) {
      const randomCard = possibleCards[Math.floor(Math.random() * possibleCards.length)]
      handCards.push(randomCard)
    }
  }
  return handCards
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
