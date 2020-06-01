import React, { Fragment, FunctionComponent } from 'react'

interface TemplateProps {
  slot: string
}

export const Template: FunctionComponent<TemplateProps> = ({
  slot,
  children
}) => {
  return (
    <Fragment>
      {slot}
      {children}
    </Fragment>
  )
}
