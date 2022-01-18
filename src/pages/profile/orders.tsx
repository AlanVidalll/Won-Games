import Profile from '../../templates/Profile'

import OrdersList, { OrdersListProps } from '../../components/OrderList'

import mockItems from '../../components/OrderList/mock'

const Orders = ({ items }: OrdersListProps) => {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}
export default Orders

export function getServerSideProps() {
  return {
    props: {
      items: mockItems
    }
  }
}
