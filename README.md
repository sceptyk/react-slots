# react-slots

> Vue like React slots

## Install

Configure .npmrc:

```
@sceptyk:registry=https://npm.pkg.github.com
```

Add package to your project:

```bash
yarn add @sceptyk/react-slots
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
