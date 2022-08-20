import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Link from 'next/link'
import { Dropdown } from 'flowbite-react'
import { Container } from '../Grid/Container/styles'
import { useState, useRef, useEffect } from 'react'
import { ModalDetail } from 'components/ModalDatail'

import {
  BottomSheet,
  BottomSheetRef,
  SheetContent,
  MetaTags,
  Expandable
} from 'react-spring-bottom-sheet'
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

function transitionPage() {
  console.log('teste')

  return <Link href="/game">dsa</Link>
}

export const Map = ({ games }: MapProps) => {
  const [open, setOpen] = useState(false)
  const [expandOnContentDrag, setExpandOnContentDrag] = useState(true)
  const focusRef = useRef<HTMLButtonElement>()
  const sheetRef = useRef<BottomSheetRef>()

  function showModal() {
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

            return (
              <Marker
                key={`place-${id}`}
                position={[latitude, longitude]}
                title={title}
                eventHandlers={{
                  click: (e) => {
                    showModal()
                  }
                }}
              >
                {open && (
                  <>
                    <BottomSheet
                      open={open}
                      header={<div className="sheetHeader">{title}</div>}
                      onDismiss={() => setOpen(false)}
                      snapPoints={({ minHeight }) => minHeight}
                      sibling={<div className="sheetFooter">{title}</div>}
                    >
                      <div className="sheetBody">{time}</div>
                      <div className="sheetBody">{address}</div>
                      <div className="sheetBody">{genre}</div>
                      <div className="sheetBody">{coverage}</div>
                      <div className="sheetBody">{net}</div>
                      <div className="sheetBody">{floor}</div>
                    </BottomSheet>
                  </>
                )}
              </Marker>
            )
          }
        )}
      </MapContainer>
    </>
  )
}

export default Map
