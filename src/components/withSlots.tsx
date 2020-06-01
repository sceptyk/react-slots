import React from 'react'
import { Slot } from './Slot'

export const withSlots = (InnerComponent: any): React.FunctionComponent => {
  const innerComponent: any = InnerComponent()

  const Slotted: React.FunctionComponent = ({ children: templates }) => {
    const templatesBySlot = {}
    React.Children.forEach(templates, (template: React.ReactChild) => {
      if (React.isValidElement(template)) {
        const slotName = template.props.slot || 'default'
        templatesBySlot[slotName] = template
      }
    })
    return React.Children.map(innerComponent.props.children, (child) => {
      if (child.type === Slot) {
        const slot = child
        const slotName = slot.props.name || 'default'
        const template = templatesBySlot[slotName]

        if (template) {
          const scope = slot.props.scope;
          if (scope) {
            const scopeHandler = template.props.children;
            return scopeHandler(scope);
          }
          return React.cloneElement(slot, {}, template.props.children)
        }

        return slot
      }

      return child
    })
  }

  return Slotted
}