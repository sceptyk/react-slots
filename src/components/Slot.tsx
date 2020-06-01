import React, { Fragment, FunctionComponent } from 'react'

interface SlotProps {
  name: string,
  scope: any
}

export const Slot: FunctionComponent<SlotProps> = ({ children }) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  )
}
