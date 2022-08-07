import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Link from 'next/link'

type Game = {
  id: string
  title: string
  time: string
  genre: string
  address: string
  situation: {
    coverage: string
    net: boolean
    floor: string
  }
  addressLarge: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  games?: Game[]
}

export const Map = ({ games }: MapProps) => (
  <>
    <div style={{ width: '100%', height: '50vh' }}>
      <Link href="/">
        <button>Back</button>
      </Link>
      <br />
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
    <MapContainer
      center={[-23.230482, -45.8938317]}
      zoom={15}
      style={{ height: '100%', width: '100%', position: 'absolute' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {games?.map(
        ({ id, title, addressLarge, situation, time, address, genre }) => {
          console.log(situation)

          const { latitude, longitude } = addressLarge
          const { coverage, net, floor } = situation

          return (
            <Marker
              key={`place-${id}`}
              position={[latitude, longitude]}
              title={title}
            >
              <Popup>
                <span>{title}</span>
                <br />
                <span>{time}</span>
                <br />

                <span>{address}</span>
                <br />
                <span>{genre}</span>
                <br />
                <span>{coverage}</span>
                <br />
                <span>{floor}</span>
                <br />
                <span>{net}</span>
              </Popup>
            </Marker>
          )
        }
      )}
    </MapContainer>
  </>
)

export default Map
