import dynamic from 'next/dynamic'
const Map = dynamic(() => import('components/Map'), { ssr: false })
export default function map() {
  return (
    <>
      <Map
        places={[
          {
            id: '2',
            name: 'São José dos Campos',
            slug: 'sao jose dos campos',
            location: {
              latitude: -23.231357952559005,
              longitude: -45.894283542523155
            }
          }
        ]}
      />
    </>
  )
}
