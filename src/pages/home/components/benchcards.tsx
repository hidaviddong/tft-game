import { useKeyboardEvent } from '@react-hookz/web'
import { useAtom, useSetAtom } from 'jotai'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { benchCardsAtom, deckCardsAtom } from '@/store'
import { HeroType } from '@/types'

export default function BenchCards() {
  const [hoverHero, setHoverHero] = useState<HeroType | null>(null)
  const setDeckCards = useSetAtom(deckCardsAtom)
  const [benchCards, setBenchCards] = useAtom(benchCardsAtom)

  useKeyboardEvent(
    true,
    (ev) => {
      if (ev.key.toLowerCase() === 'e') {
        if (hoverHero) {
          setBenchCards((prevBenchCards) => prevBenchCards.filter((card) => card !== hoverHero))
          setDeckCards((prevDeckCards) => [...prevDeckCards, hoverHero])
          setHoverHero(null)
        }
      }
    },
    [],
    { eventOptions: { passive: true } }
  )
  return (
    <div className="flex h-48 w-full space-x-4 bg-sky-100">
      这是备战区
      {benchCards.map((benchCard, index) => (
        <Button
          onMouseEnter={() => {
            setHoverHero(benchCard)
          }}
          onMouseLeave={() => {
            setHoverHero(null)
          }}
          key={index}>
          {benchCard.name}
        </Button>
      ))}
    </div>
  )
}
