import { useAtom, useAtomValue } from 'jotai'

import { Button } from '@/components/ui/button'
import { drawCards, pickHeroFromDeck } from '@/lib/helper'
import { benchCardsAtom, deckCardsAtom, handCardsAtom, playerLevelAtom, probabilityByLevelAtom } from '@/store'

export default function HandCards() {
  const [playerLevel, setPlayerLevel] = useAtom(playerLevelAtom)
  const [benchCards, setBenchCards] = useAtom(benchCardsAtom)
  const probabilityByLevel = useAtomValue(probabilityByLevelAtom)
  const [deckCards, setDeckCards] = useAtom(deckCardsAtom)
  const [handCards, setHandCards] = useAtom(handCardsAtom)
  function refreshRandomCards() {
    const randomCards = drawCards(deckCards, probabilityByLevel)
    setHandCards(randomCards)
  }
  function buyExperience() {
    setPlayerLevel((prevLevel) => prevLevel + 1)
  }
  return (
    <div className="flex h-48 w-full flex-col items-center justify-center gap-x-4 bg-sky-200">
      <div className="flex items-center justify-center space-x-4">
        <span>用户等级：{playerLevel}</span>
        <Button onClick={refreshRandomCards}>刷新英雄</Button>
        <Button disabled={playerLevel === 10} onClick={buyExperience}>
          购买经验
        </Button>
      </div>
      <div className="mt-4 flex gap-x-2">
        {handCards.map((handCard, index) => {
          return (
            <Button
              key={index}
              onClick={() => {
                if (benchCards.length < 9) {
                  setDeckCards(pickHeroFromDeck(deckCards, handCard.name))
                  setHandCards((prevHandCards) => prevHandCards.filter((item) => item !== handCard))
                  setBenchCards((prevBenchCards) => [...prevBenchCards, handCard])
                }
              }}>
              {handCard.name}
            </Button>
          )
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
