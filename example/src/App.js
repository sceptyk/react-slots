import { Slot, Template } from 'react-slots'

import React from 'react'

const Parent = () => {
  return (
    <>
      <Slot name="header">
        header
      </Slot>
      <Slot>
        default content slot
      </Slot>
      <Slot>
        footer
      </Slot>
    </>
  )
}

const App = () => {
  return (
    <Parent>
      <Template slot="header">
        Custom header
      </Template>
      <Template>
        Custom content
      </Template>
    </Parent>
  )
}

export default App
