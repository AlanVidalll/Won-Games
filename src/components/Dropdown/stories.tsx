import { Story, Meta } from '@storybook/react/types-6-0'
import Dropdown, { DropDownProps } from '.'

export default {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story<DropDownProps> = (args) => <Dropdown {...args} />

Basic.args = {
  title: 'Click here',
  children: 'Content'
}
