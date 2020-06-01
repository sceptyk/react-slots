# react-slots

> Vue like React slots

[![NPM](https://img.shields.io/npm/v/react-slots.svg)](https://www.npmjs.com/package/react-slots) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add react-slots
```

## Usage

```jsx
import { Slot, Template, withSlots } from 'react-slots'

import React from 'react'

const Parent = withSlots(() => {
  return (
    <>
      <Slot name='header'>default header</Slot>
      <Slot scope={{ value: 'World' }}>default content slot</Slot>
      <div>Other content</div>
      <Slot name="footer">default footer</Slot>
    </>
  )
})

const App = () => {
  return (
    <Parent>
      <Template slot='header'>Custom header</Template>
      <Template>
        {({ value }) => `Hello ${value}`}
      </Template>
    </Parent>
  )
}

export default App
```

## License

MIT © [@sceptyk](https://github.com/@sceptyk)
