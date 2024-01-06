import { useEffect, useState } from 'react'

export function useCountdown(initialTime = 60) {
  const [time, setTime] = useState(initialTime)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isRunning])

  const startCountdown = () => {
    setIsRunning(true)
  }

  const resetCountdown = () => {
    setTime(initialTime)
    setIsRunning(false)
  }

  return { time, startCountdown, resetCountdown }
}
