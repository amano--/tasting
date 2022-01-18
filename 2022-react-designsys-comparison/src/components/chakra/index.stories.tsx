import { Button, ButtonProps } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react'


export default {
  title: 'chakra/buttons/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args: ButtonProps) => <Button {...args} >Button</Button>

export const Default = Template.bind({})
Default.args = {
  variant:"solid",
  "aria-label": 'ボタンのラベル',
}
