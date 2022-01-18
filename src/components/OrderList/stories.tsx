import { Story, Meta } from '@storybook/react/types-6-0'
import OrderList, { OrdersListProps } from '.'

import mockItems from './mock'
export default {
  title: 'Profile/OrderList',
  component: OrderList,
  args: {
    items: mockItems
  }
} as Meta

export const Basic: Story<OrdersListProps> = (args) => <OrderList {...args} />
