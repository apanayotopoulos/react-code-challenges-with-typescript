import React, { useEffect, useState } from 'react'

export default function ScoreKeeper () {
  const SCORE = "score";
  const [score, setScore] = useState<number>(parseInt(localStorage.getItem(SCORE) || "0") || 0);
  useEffect(() => {
    localStorage.setItem(SCORE, score.toString());
  }, [score]);

  return (
    <div>
      <h1>Your score is: {score}</h1>
      <button onClick={() => setScore(prevScore => prevScore + 1)}>+</button>
      <button onClick={() => setScore(prevScore => prevScore - 1)}>-</button>
    </div>
  )
}
