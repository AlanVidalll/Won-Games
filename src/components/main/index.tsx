import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJs, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Imagem de um átomo e React Avançado" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Ilustration
      src="/img/hero-ilustration.svg"
      alt="um desenvolvedor de frente para a tela com código"
    />
  </S.Wrapper>
)

export default Main
