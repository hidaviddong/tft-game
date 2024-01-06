import { atom } from 'jotai'

import data from '@/data/data.json'
import { computedLevelByExperience, computedProbabilityByLevel } from '@/lib/helper'
import { HeroType } from '@/types'

export const deckCardsAtom = atom<HeroType[]>(data) //牌库

export const activeCardsAtom = atom([{}]) // 上场牌

export const benchCardsAtom = atom([{}]) // 备战席

export const handCardsAtom = atom([{}]) // 手牌

export const playerExperienceAtom = atom(0)
export const playerLevelAtom = atom((get) => computedLevelByExperience(get(playerExperienceAtom)))
export const probabilityByLevelAtom = atom((get) => computedProbabilityByLevel(get(playerExperienceAtom)))
export const playerCoinsAtom = atom(0)

export const countdownTimeAtom = atom(60)
export const randomIndexAtom = atom(0)
export const targetHeroAtom = atom((get) => get(deckCardsAtom)[get(randomIndexAtom)].name)

type GameStatusType = 'start' | 'end'
export const gameStatusAtom = atom<GameStatusType>('start')
