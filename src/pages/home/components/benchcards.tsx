import { useAtomValue } from 'jotai'

import { Button } from '@/components/ui/button'
import { benchCardsAtom } from '@/store'

export default function BenchCards() {
  const benchCards = useAtomValue(benchCardsAtom)
  return (
    <div className="flex h-48 w-full space-x-4 bg-sky-100">
      这是备战区
      {benchCards.map((benchCard, index) => (
        <Button key={index}>{benchCard.name}</Button>
      ))}
    </div>
  )
}
