import React, { useState } from 'react';
import WindowEvent from './WindowEvent';

export default function ToggleWindowEvent () {
  const [windowEvent, setWindowEvent] = useState<boolean>(false)
  return (
    <div>
      <button onClick={() => setWindowEvent(prevState => !prevState)}>Toggle Window Event</button>
      {windowEvent && <WindowEvent />}
    </div>
  )
}
