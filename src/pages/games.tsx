import { MapProps } from 'components/Map'
import client from 'graphql/client'
import { GET_PAGES } from 'graphql/queries'
import MapTemplatePage from 'templates/Games'

export default function MapPage({ games }: MapProps) {
  return <MapTemplatePage games={games} />
}

export const getStaticProps = async () => {
  const { games } = await client.request(GET_PAGES)
  return {
    props: { games }
  }
}
