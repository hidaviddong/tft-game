import { useKeyboardEvent } from '@react-hookz/web'
import { useAtom, useAtomValue } from 'jotai'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { drawCards } from '@/lib/helper'
import { benchCardsAtom, deckCardsAtom, handCardsAtom, playerLevelAtom, probabilityByLevelAtom } from '@/store'

import Hero from './hero'
export default function HandCards() {
  const [playerLevel, setPlayerLevel] = useAtom(playerLevelAtom)
  const [benchCards, setBenchCards] = useAtom(benchCardsAtom)
  const probabilityByLevel = useAtomValue(probabilityByLevelAtom)
  const [deckCards, setDeckCards] = useAtom(deckCardsAtom)
  const [handCards, setHandCards] = useAtom(handCardsAtom)

  useKeyboardEvent(
    true,
    (ev) => {
      if (ev.key.toLowerCase() === 'd') {
        refreshRandomCards()
      } else if (ev.key.toLowerCase() === 'f') {
        buyExperience()
      }
    },
    [],
    { eventOptions: { passive: true } }
  )
  function refreshRandomCards() {
    const randomCards = drawCards(deckCards, probabilityByLevel)
    setHandCards(randomCards)
  }
  function buyExperience() {
    if (playerLevel < 10) {
      setPlayerLevel(playerLevel + 1)
    } else {
      toast.error('等级已满')
    }
  }

  return (
    <div className="flex h-72 w-full flex-col items-center justify-center gap-x-4 bg-sky-200">
      <div className="mt-4 flex space-x-4 ">
        刷新概率:
        <span>一费：{probabilityByLevel[1]}</span>
        <span>二费：{probabilityByLevel[2]}</span>
        <span>三费：{probabilityByLevel[3]}</span>
        <span>四费：{probabilityByLevel[4]}</span>
        <span>五费：{probabilityByLevel[5]}</span>
      </div>
      <div className="flex items-center justify-center space-x-4 ">
        <span>用户等级：{playerLevel}</span>
        <Button onClick={refreshRandomCards}>刷新英雄</Button>
        <Button disabled={playerLevel >= 10} onClick={buyExperience}>
          购买经验
        </Button>
      </div>
      <div className="mt-4 flex gap-x-2">
        {handCards.map((handCard) => {
          return (
            <Hero
              name={handCard.name}
              cost={handCard.cost}
              key={handCard.id}
              onClick={() => {
                if (benchCards.length < 9) {
                  setDeckCards((prevDeckCards) => prevDeckCards.filter((item) => item !== handCard))
                  setHandCards((prevHandCards) => prevHandCards.filter((item) => item !== handCard))
                  setBenchCards((prevBenchCards) => [...prevBenchCards, handCard])
                } else {
                  toast.error('备战区已满')
                }
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
