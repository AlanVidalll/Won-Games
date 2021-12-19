import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'

import { Container } from 'components/Container'

import BannerSlider from 'components/BannerSlider'
import { HighlightProps } from 'components/Highlight'

import ShowCase from 'components/ShowCase'
import Base from 'templates/Base'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighligth: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighligth: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighligth,
  upcommingMoreGames,
  freeGames,
  freeHighligth
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <ShowCase title="News" games={newGames} />
    </S.SectionNews>

    <ShowCase
      title="Most popular"
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <S.SectionUpcoming>
      <ShowCase title=" Upcomming" games={upcommingGames} />
      <ShowCase highlight={upcommingHighligth} games={upcommingMoreGames} />
    </S.SectionUpcoming>

    <ShowCase
      title="   Free Games"
      highlight={freeHighligth}
      games={freeGames}
    />
  </Base>
)

export default Home
