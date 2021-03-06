import Empty from 'components/Empty'
import GameItem, { GameItemProps } from 'components/GameItem'
import Heading from 'components/Heading'
import * as S from './styles'

export type OrdersListProps = {
  items?: GameItemProps[]
}

const OrderList = ({ items = [] }: OrdersListProps) => (
  <S.Wrapper>
    <Heading lineBottom lineColor="primary" color="black" size="small">
      My orders
    </Heading>

    {items.length ? (
      items.map((item, index) => (
        <GameItem key={`${item.dowloadLink} ${index}`} {...item} />
      ))
    ) : (
      <Empty
        title="You have no orders yet"
        description="Go back to the store"
      />
    )}
  </S.Wrapper>
)

export default OrderList
