import { Loader } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useCountdown, useTodayHero } from '@/hooks'

import BenchCards from './components/benchcards'
import HandCards from './components/handcards'
export default function Home() {
  const { data, isLoading, isError, isSuccess } = useTodayHero()
  const { time, startCountdown, resetCountdown } = useCountdown(3)

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <button onClick={startCountdown}>开始挑战</button>
      <button onClick={resetCountdown}>再次挑战</button>
      {time === 0 ? '时间到!' : <span>{time}</span>}
      {isLoading && <Loader className="animate-spin" />}
      {isSuccess && (
        <Avatar className="h-16 w-16">
          <AvatarImage className="h-16 w-16" src={`https://imgtft.daviddong.me/${data}.png`} />
          <AvatarFallback> {data}</AvatarFallback>
        </Avatar>
      )}
      {isError && <h1>加载今日英雄错误!</h1>}
      <BenchCards />
      <HandCards />
    </div>
  )
}
