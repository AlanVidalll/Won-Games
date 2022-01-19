import GamesTemplate, { GamesTemplateProps } from '../templates/Games/index'
import filterItemsMock from '../components/ExplorerSidebar/mock'
import gamesMock from '../components/GameCardSlider/mock'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      games: gamesMock,
      filterItems: filterItemsMock
    }
  }
}
