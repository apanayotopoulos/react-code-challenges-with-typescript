import React from "react";

export default function Color ({ hex, name, setBackgroundColor }: { hex: string, name: string, setBackgroundColor: (hex: string) => void }) {
  return (
    <button
      className='color-square'
      style={{ backgroundColor: hex }}
      onClick={() => setBackgroundColor(hex)}
    >
      <h2>{name}</h2>
    </button>
  )
}
