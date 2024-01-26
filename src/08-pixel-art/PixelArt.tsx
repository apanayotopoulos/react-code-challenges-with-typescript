import React from 'react';

interface Pixel extends React.JSX.Element {}

function ColorPicker () {
  const colors: string[] = ['red', 'blue', 'yellow', 'green', 'black', 'white', 'purple'];
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map(color => <button key={color} style={{ backgroundColor: color }} />)}
    </div>
  )
}

function Pixel (): Pixel {
  return <div style={{ height: '20px', width: '20px', backgroundColor: 'lightGrey', margin: '1px' }} />
}

function Pixels () {
  const pixels: Pixel[] = []
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />)
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', width: '210px', margin: '0 auto' }}>
      {pixels}
    </div>
  )
}

export default function PixelArt () {
  return (
    <div>
      <ColorPicker />
      <Pixels />
    </div>
  )
}
