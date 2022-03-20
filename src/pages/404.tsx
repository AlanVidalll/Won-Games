import { Container } from 'components/Container'
import Empty from 'components/Empty'
import Base from 'templates/Base'

export default function Page404() {
  return (
    <Base>
      <Container>
        <Empty
          title="404: not found"
          description="Ops...this page does not exits. Go back to the stores and enjoy our offres."
          hasLink
        />
      </Container>
    </Base>
  )
}
