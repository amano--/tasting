import { SwitchProps } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react'

import { MyToggle } from '.'


export default {
  title: 'headlessui/buttons/MyToggle',
  component: MyToggle,
} as Meta

const Template: Story<SwitchProps> = (args) => <MyToggle {...args} />

export const Default = Template.bind({})
Default.args = {"aria-label": 'ボタンのラベル',
}
