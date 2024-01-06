import { atom } from 'jotai'

import data from '@/data/data.json'
import { computedProbabilityByLevel, drawCards } from '@/lib/helper'
import { HeroType } from '@/types'

export const deckCardsAtom = atom<HeroType[]>(data) //牌库

export const benchCardsAtom = atom<HeroType[] | []>([]) // 备战席

export const handCardsAtom = atom<HeroType[]>(drawCards(data, computedProbabilityByLevel(3))) // 手牌

export const playerLevelAtom = atom(3)
export const probabilityByLevelAtom = atom((get) => computedProbabilityByLevel(get(playerLevelAtom)))
export const playerCoinsAtom = atom(50)

type GameStatusType = 'start' | 'end'
export const gameStatusAtom = atom<GameStatusType>('start')
