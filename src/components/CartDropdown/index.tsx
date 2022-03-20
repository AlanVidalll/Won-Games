import { GameItemProps } from 'components/GameItem'

import Dropdown from '../Dropdown'
import CartIcon from '../CartIcon'
import CartList from '../CartList'

import * as S from './styles'

export type CartDropdownProps = {
  items?: GameItemProps[]
  total?: string
}
const CartDropdown = ({ items = [], total }: CartDropdownProps) => (
  <S.Wrapper>
    <Dropdown title={<CartIcon quantity={items.length} />}>
      <CartList items={items} total={total} hasButton />
    </Dropdown>
  </S.Wrapper>
)

export default CartDropdown
