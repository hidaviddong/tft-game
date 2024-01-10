import type { HeroType } from '@/types'

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

export function drawCards(cards: HeroType[], probability: ReturnType<typeof computedProbabilityByLevel>, count = 5) {
  const drawnCards = []
  for (let i = 0; i < count; i++) {
    // 确定抽卡成本
    const cost = determineCost(probability)

    // 过滤符合成本的卡牌
    const filteredCards = cards.filter((card) => card.cost === cost)

    if (filteredCards.length === 0) {
      continue // 如果没有符合条件的卡牌，则继续下一次抽取
    }

    // 随机选择一张卡牌
    const randomIndex = Math.floor(Math.random() * filteredCards.length)
    const drawnCard = filteredCards[randomIndex]

    // 添加到抽取的卡牌数组中
    drawnCards.push(drawnCard)

    // 从原数组中移除这张卡牌
    cards = cards.filter((card) => card.id !== drawnCard.id)
  }

  return drawnCards
}

function determineCost(probability: { [key: number]: number }) {
  let total = 0
  for (const cost in probability) {
    total += probability[cost]
  }

  let random = Math.random() * total
  for (const cost in probability) {
    random -= probability[cost]
    if (random <= 0) {
      return parseInt(cost)
    }
  }
}

export function findHeroFromDeck(deck: HeroType[], heroName: string) {
  return deck.find((hero) => hero.name === heroName)
}

export function pickHeroFromDeck(deck: HeroType[], hero: HeroType) {
  return deck.filter((item) => item.id !== hero.id)
}

export function putHeroToDeck(deck: HeroType[], hero: HeroType) {
  return [...deck, hero]
}
