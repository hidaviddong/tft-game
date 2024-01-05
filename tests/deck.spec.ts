import { describe, expect, test } from 'vitest'

import { findHeroFromDeck, pickHeroFromDeck, putHeroToDeck } from '@/lib/helper'

import data from '../src/data/data.json'

describe('DeckManager Operations', () => {
  test('should decrease the totalAmount of a hero in the deck when picked', () => {
    const heroName = '阿狸'
    const originalHero = findHeroFromDeck(data, heroName)

    if (!originalHero) {
      throw new Error(`Hero ${heroName} not found in deck`)
    }

    const newdata = pickHeroFromDeck(data, heroName)
    const updatedHero = findHeroFromDeck(newdata, heroName)

    if (!updatedHero) {
      throw new Error(`Hero ${heroName} not found in updated deck`)
    }

    expect(updatedHero.totalAmount).toEqual(originalHero.totalAmount - 1)
  })
  test('should increase the totalAmount of a hero in the deck when put back', () => {
    const heroName = '阿狸'
    const originalHero = findHeroFromDeck(data, heroName)

    if (!originalHero) {
      throw new Error(`Hero ${heroName} not found in deck`)
    }

    const newdata = putHeroToDeck(data, heroName)
    const updatedHero = findHeroFromDeck(newdata, heroName)

    if (!updatedHero) {
      throw new Error(`Hero ${heroName} not found in updated deck`)
    }

    expect(updatedHero.totalAmount).toEqual(originalHero.totalAmount + 1)
  })
})
