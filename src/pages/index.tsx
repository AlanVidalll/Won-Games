import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from '../components/BannerSlider/mock'
import gamesMock from '../components/GameCardSlider/mock'
import highLightMock from '../components/Highlight/mock'
export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

// ATENÇÃO:
// os meétodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES!

// getStaticProps => vai gerar um estático em build time
// getServerSideprops => gerar via ssr cada request

export function getStaticProps() {
  // faz lógica
  // pode ser buscar dados em uma api
  // fazer caculo/leitura de context

  //retorno dos dados
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highLightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighligth: highLightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighligth: highLightMock
    }
  }
}
