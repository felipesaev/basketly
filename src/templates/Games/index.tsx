import { MapProps } from 'components/Map'
import dynamic from 'next/dynamic'
const Map = dynamic(() => import('components/Map'), { ssr: false })
export default function MapTemplatePage({ games }: MapProps) {
  return (
    <>
      <Map games={games} />
    </>
  )
}
