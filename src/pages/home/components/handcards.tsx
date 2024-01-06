import { useAtom, useAtomValue } from 'jotai'

import { Button } from '@/components/ui/button'
import { drawCards } from '@/lib/helper'
import {
  deckCardsAtom,
  handCardsAtom,
  playerCoinsAtom,
  playerExperienceAtom,
  playerLevelAtom,
  probabilityByLevelAtom
} from '@/store'

export default function HandCards() {
  const playerExperience = useAtomValue(playerExperienceAtom)
  const playerLevel = useAtomValue(playerLevelAtom)
  const probabilityByLevel = useAtomValue(probabilityByLevelAtom)
  const playerCoins = useAtomValue(playerCoinsAtom)
  const deckCards = useAtomValue(deckCardsAtom)
  const [handCards, setHandCards] = useAtom(handCardsAtom)
  function refreshRandomCards() {
    const randomCards = drawCards(deckCards, probabilityByLevel)
    setHandCards(randomCards)
  }
  return (
    <div className="flex h-48 w-full flex-col items-center justify-center gap-x-4 bg-sky-200">
      <div className="flex items-center justify-center space-x-4">
        <span>用户经验：{playerExperience}</span>
        <span>用户等级：{playerLevel}</span>
        <span>用户金币：{playerCoins}</span>
        <Button onClick={refreshRandomCards}>刷新英雄</Button>
        <Button>购买经验</Button>
      </div>
      <div className="mt-4 flex gap-x-2">
        {handCards.map((handCard, index) => {
          return <span key={index}>{handCard.name}</span>
        })}
      </div>
      <div className="mt-4 flex space-x-4">
        刷新概率:
        <span>一费：{probabilityByLevel[1]}</span>
        <span>二费：{probabilityByLevel[2]}</span>
        <span>三费：{probabilityByLevel[3]}</span>
        <span>四费：{probabilityByLevel[4]}</span>
        <span>五费：{probabilityByLevel[5]}</span>
      </div>
    </div>
  )
}
