import React, { useState, useEffect } from 'react';

export default function Timer () {
  const [time, setTime] = useState<number>(60);
  useEffect(() => {
    const decrementTime = () => setTime(prevTime => prevTime - 1);
    let decrementTimer: NodeJS.Timer = setInterval(decrementTime, 1000);
    return () => {
      clearInterval(decrementTimer);
    }
  }, [])
  return (
    <div>
      <h1>Time Remaining</h1>
      <h2>{time}</h2>
    </div>
  )
}
