import { describe, expect, test } from 'vitest'

import { CARD, findHeroFromDeck, pickHeroFromDeck, putHeroToDeck } from '@/lib/helper'

describe('DeckManager Operations', () => {
  test('should decrease the totalAmount of a hero in the deck when picked', () => {
    const heroName = 'foo'
    const originalHero = findHeroFromDeck(CARD, heroName)

    if (!originalHero) {
      throw new Error(`Hero ${heroName} not found in deck`)
    }

    const newCard = pickHeroFromDeck(CARD, heroName)
    const updatedHero = findHeroFromDeck(newCard, heroName)

    if (!updatedHero) {
      throw new Error(`Hero ${heroName} not found in updated deck`)
    }

    expect(updatedHero.totalAmount).toEqual(originalHero.totalAmount - 1)
  })
  test('should increase the totalAmount of a hero in the deck when put back', () => {
    const heroName = 'foo'
    const originalHero = findHeroFromDeck(CARD, heroName)

    if (!originalHero) {
      throw new Error(`Hero ${heroName} not found in deck`)
    }

    const newCard = putHeroToDeck(CARD, heroName)
    const updatedHero = findHeroFromDeck(newCard, heroName)

    if (!updatedHero) {
      throw new Error(`Hero ${heroName} not found in updated deck`)
    }

    expect(updatedHero.totalAmount).toEqual(originalHero.totalAmount + 1)
  })
})
