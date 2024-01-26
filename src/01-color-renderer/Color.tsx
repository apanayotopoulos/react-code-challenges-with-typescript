import React from "react";

export default function Color ({ hex, name }: { hex: string, name: string }) {
  return (
    <div
      className='color-square' style={{ backgroundColor: hex }}
    >
      <h2>{name}</h2>
    </div>
  )
}
