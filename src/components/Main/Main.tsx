import { Center } from 'components/Grid/Center/styles'
import { Column } from 'components/Grid/Column/styles'
import { Container } from 'components/Grid/Container/styles'
import { Row } from 'components/Grid/Row/styles'

const Main = () => {
  const handleClick = () => {
    console.log('ok')
  }
  return (
    <Container>
      <Row>
        <Column grid="12">
          <Row>
            <Column grid="6">
              <img src="/img/main-image.png" />
              <Center>
                <h1 className="title-font sm:text-4xl text-5xl mb-4 font-bold text-gray-900">
                  Basktly
                </h1>
                <h6>Encontre jogos perto de você.</h6>
                <button
                  type="button"
                  className="bg-primary text-white rounded-sm p-2 mt-4 cursor-pointer"
                >
                  Encontrar jogos
                </button>
              </Center>
            </Column>
          </Row>
        </Column>
      </Row>
    </Container>
  )
}

export default Main
