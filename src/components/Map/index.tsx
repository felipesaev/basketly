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

  useEffect(() => {
    setOpen(true)
  }, [])

  function close() {
    setOpen(false)
  }

  function onDismiss() {
    setOpen(false)
  }

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
              <label>Escolha a cidade</label>
              <select
                className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option selected>São José dos Campos</option>
                <option value="1">Jacarei</option>
                <option value="2">Taubate</option>
                <option value="3">São Sebastião</option>
              </select>

              <br />

              <label>Escolha ao bairro</label>
              <select
                className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option selected>São José dos Campos</option>
                <option value="1">Jacarei</option>
                <option value="2">Taubate</option>
                <option value="3">São Sebastião</option>
              </select>
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
