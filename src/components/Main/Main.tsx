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
                <h1 className="text-3xl font-bold underline">Hello world!</h1>
                <h6>Encontre jogos perto de você.</h6>
                <button type="button" className="cursor-pointer">
                  Submit
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
