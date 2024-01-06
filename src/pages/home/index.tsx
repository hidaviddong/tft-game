import { useTodayHero } from '@/hooks'

export default function Home() {
  const { data, isLoading, isError, isSuccess } = useTodayHero()
  return (
    <div className="flex h-full w-full items-center justify-center">
      {isLoading && <h1>加载今日英雄中</h1>}
      {isSuccess && <h1>{data}</h1>}
      {isError && <h1>加载今日英雄错误!</h1>}
    </div>
  )
}
