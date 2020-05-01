import React from 'react'
import { render, prettyDOM } from '@testing-library/react'
import GroupingRow, { GroupingRowProps } from './GroupingRow'

const DEBUG = true
test('two plus two is four', () => {
  const Label = () => <span>Label</span>

  const props: GroupingRowProps = {
    label: Label,
    nodeList: [<span key="1">Node</span>]
  }

  const { baseElement } = render(<GroupingRow {...props} />)
  const domText = prettyDOM(baseElement)
  if (DEBUG) console.debug(domText)

  expect(domText).toContain('Label')
})
