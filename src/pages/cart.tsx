import Cart, { CartTemplateProps } from 'templates/Cart/index'
import gamesMock from '../components/GameCardSlider/mock'
import highlightMock from '../components/Highlight/mock'
import CartListMock from '../components/CartList/mock'
import mockCards from '../components/PaymentOptions/mock'
export default function CartPage(props: CartTemplateProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      recommendedGames: gamesMock,
      recommendedHighlight: highlightMock,
      items: CartListMock,
      total: 'R$ 330,00',
      cards: mockCards
    }
  }
}
