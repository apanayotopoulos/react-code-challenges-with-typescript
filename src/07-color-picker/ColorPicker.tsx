import React, { useState } from 'react';
import Color from './Color';

const colors: ({ name: string; hex: string })[] = [{
  hex: '#91A6FF',
  name: 'Cornflower Blue'
},
{
  hex: '#FF88DC',
  name: 'Persian Pink'
},
{
  hex: '#80FF72',
  name: 'Screamin Green'
},
{
  hex: '#FF5154',
  name: 'Tart Orange'
}];

export default function ColorPicker () {
  const [backgroundColor, setBackgroundColor] = useState<string>('white');

  return (
    <div className='page' style={{ backgroundColor }}>
      {
        colors.map(color => (
          <Color key={color.hex} hex={color.hex} name={color.name} setBackgroundColor={setBackgroundColor} />
        ))
      }
    </div>
  )
}
