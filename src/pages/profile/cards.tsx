import Profile from '../../templates/Profile'

import CardsList, { CardsListProps } from 'components/CardsList'

import mockCards from '../../components/PaymentOptions/mock'

const Cards = ({ cards }: CardsListProps) => {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}
export default Cards

export function getServerSideProps() {
  return {
    props: {
      cards: mockCards
    }
  }
}
