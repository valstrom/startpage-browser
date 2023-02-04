import { useState, useEffect } from 'react'

export default function Clock() {
  const [date, setDate] = useState(new Date())

  function refreshClock() {
    setDate(new Date())
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000)
    return function cleanup() {
      clearInterval(timerId)
    }
  }, [])
  return <div className="text-white font-bold text-5xl mb-5">{date.toLocaleTimeString()}</div>
}
