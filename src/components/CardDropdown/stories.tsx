import { Story, Meta } from '@storybook/react/types-6-0'
import CardDropdown, { CardDropdownProps } from '.'
import items from 'components/CartList/mock'

export default {
  title: 'CardDropdown',
  component: CardDropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    items: items,
    total: 'R$ 300,00'
  }
} as Meta

export const Basic: Story<CardDropdownProps> = (args) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CardDropdown {...args} />
  </div>
)
export const Empty: Story<CardDropdownProps> = () => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CardDropdown />
  </div>
)
