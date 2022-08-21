import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Link from 'next/link'
import { Container } from '../Grid/Container/styles'
import { useState, useRef } from 'react'

import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'
import { Select } from 'components/Select'

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

export const Map = ({ games }: MapProps) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  function showModal(e) {
    setValue(e.target.options.title)

    //setValue(e.)
    setOpen(!open)
  }
  return (
    <>
      <Container>
        <div style={{ width: '100%', height: '35vh' }}>
          <Link href="/">
            <button className="mt-2">Back</button>
          </Link>
          <br />
          <br />
          <div className="flex justify-start">
            <div className="mb-3 xl:w-96">
              <Select
                label="Escolha a cidade"
                values={['São jose', 'Jacarei', 'Ilha']}
              />

              <Select
                label="Escolha o Bairro"
                values={['São jose', 'Jacarei', 'Ilha']}
              />
            </div>
          </div>
        </div>
      </Container>
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
            const { latitude, longitude } = addressLarge
            const { coverage, net, floor } = situation
            console.log(title)

            return (
              <>
                <Marker
                  key={`place-${title}`}
                  position={[latitude, longitude]}
                  title={title}
                  eventHandlers={{
                    click: (e) => {
                      showModal(e)
                    }
                  }}
                >
                  {open && (
                    <>
                      <BottomSheet
                        open={open}
                        header={<div className="sheetHeader">{value}</div>}
                        onDismiss={() => setOpen(false)}
                        snapPoints={({ minHeight }) => minHeight}
                        sibling={<div className="sheetFooter">{title}</div>}
                      >
                        tews
                      </BottomSheet>
                    </>
                  )}
                </Marker>
                {title}
              </>
            )
          }
        )}
      </MapContainer>
    </>
  )
}

export default Map
