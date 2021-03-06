import { Story, Meta } from '@storybook/react/types-6-0'
import PaymentOptions, { PaymentOptionsProps } from '.'
import mockCards from './mock'
export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    cards: mockCards
  },
  argTypes: {
    cards: {
      type: ''
    },
    handlePayment: {
      action: 'clicked'
    }
  }
} as Meta

export const Basic: Story<PaymentOptionsProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 400, margin: '0 auto' }}>
    <PaymentOptions {...args} />
  </div>
)
