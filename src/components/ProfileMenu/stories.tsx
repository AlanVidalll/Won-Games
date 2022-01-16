import { Story, Meta } from '@storybook/react/types-6-0'
import ProfileMenu, { ProfileMenuProps } from '.'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    activeLink: {
      control: 'select'
    }
  }
} as Meta

export const Basic: Story<ProfileMenuProps> = (args) => (
  <ProfileMenu {...args} />
)
