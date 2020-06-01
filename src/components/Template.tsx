import React, { FunctionComponent, useState } from 'react'

export const Template: FunctionComponent = () => {
  const [clicks, setClicks] = useState(initial)
  return (
    <>
      <p>Clicks: {clicks}</p>
      <button onClick={() => setClicks(clicks + 1)}>+</button>
      <button onClick={() => setClicks(clicks - 1)}>-</button>
    </>
  )
}
