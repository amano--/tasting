import { ChakraProvider } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Example } from '.'

export default {
  title: 'layout/fixed',
  component: Example,
} as Meta

const Template: Story = () => (
  <ChakraProvider>
    <Example />
  </ChakraProvider>
)

export const Default = Template.bind({})
Default.args = {}
