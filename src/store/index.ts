import { atom } from 'jotai'

import { CARD, computedLevelByExperience, computedProbabilityByLevel } from '@/lib/helper'
import { HeroType } from '@/types'

export const deckCardsAtom = atom<HeroType[]>(CARD) //牌库

export const activeCardsAtom = atom([{}]) // 上场牌

export const benchCardsAtom = atom([{}]) // 备战席

export const handCardsAtom = atom([{}]) // 手牌

export const playerExperienceAtom = atom(0)
export const playerLevelAtom = atom((get) => computedLevelByExperience(get(playerExperienceAtom)))
export const probabilityByLevelAtom = atom((get) => computedProbabilityByLevel(get(playerExperienceAtom)))
export const playerCoinsAtom = atom(0)
