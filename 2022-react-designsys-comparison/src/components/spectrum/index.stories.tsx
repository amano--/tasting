import { Button} from '@adobe/react-spectrum'
import {SpectrumButtonProps} from '@react-types/button';
import { Meta, Story } from '@storybook/react'


export default {
  title: 'spectrum/buttons/Button',
  component: Button,
} as Meta

const Template: Story<SpectrumButtonProps> = (args) => <Button {...args} >Button</Button>

export const Default = Template.bind({})
Default.args = {
  variant:"primary",
  "aria-label": 'ボタンのラベル',
}
