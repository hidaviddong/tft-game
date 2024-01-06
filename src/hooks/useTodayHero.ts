import { useQuery } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'

import data from '@/data/data.json'
interface RandomType {
  value: number
}
async function getHeroName() {
  const response = await axios.get<RandomType>('/random')
  const { value } = response.data
  const randomIndex = Math.floor(value * data.length)
  return data[randomIndex].name
}
export function useTodayHero() {
  return useQuery<string, AxiosError>({
    queryKey: ['heroName'],
    queryFn: getHeroName
  })
}
