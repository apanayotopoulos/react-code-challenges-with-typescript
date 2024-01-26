import React from "react";

export default function Color ({ hex, name }: { hex: string, name: string }) {
  return (
    <button
      className='color-square'
      style={{ backgroundColor: hex }}
    >
      <h2>{name}</h2>
    </button>
  )
}
