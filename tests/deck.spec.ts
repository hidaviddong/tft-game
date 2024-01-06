import { describe, expect, test } from 'vitest'

import data from '@/data/data.json'
import { computedLevelByExperience, findHeroFromDeck, pickHeroFromDeck, putHeroToDeck } from '@/lib/helper'

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
  test('returns level 3 for experience less than 6', () => {
    expect(computedLevelByExperience(5)).toBe(3)
  })

  test('returns level 4 for experience between 6 and 9', () => {
    expect(computedLevelByExperience(6)).toBe(4)
    expect(computedLevelByExperience(9)).toBe(4)
  })

  test('returns level 5 for experience between 10 and 19', () => {
    expect(computedLevelByExperience(10)).toBe(5)
    expect(computedLevelByExperience(19)).toBe(5)
  })

  test('returns level 6 for experience between 20 and 35', () => {
    expect(computedLevelByExperience(20)).toBe(6)
    expect(computedLevelByExperience(35)).toBe(6)
  })

  test('returns level 7 for experience between 36 and 47', () => {
    expect(computedLevelByExperience(36)).toBe(7)
    expect(computedLevelByExperience(47)).toBe(7)
  })

  test('returns level 8 for experience between 48 and 79', () => {
    expect(computedLevelByExperience(48)).toBe(8)
    expect(computedLevelByExperience(79)).toBe(8)
  })

  test('returns level 9 for experience 80 and above', () => {
    expect(computedLevelByExperience(80)).toBe(9)
    expect(computedLevelByExperience(100)).toBe(9)
  })
})
