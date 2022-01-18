import { useRouter } from 'next/router'
import * as S from './styles'
import Base from '../../templates/Base'
import { Container } from '../../components/Container'
import Heading from '../../components/Heading'
import ProfileMenu from '../../components/ProfileMenu'

export type ProfileTemplateProps = {
  children: React.ReactNode
}

const Profile = ({ children }: ProfileTemplateProps) => {
  const { asPath } = useRouter()
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My profile
        </Heading>

        <S.Main>
          <ProfileMenu activeLink={asPath} />
          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </Base>
  )
}
export default Profile
