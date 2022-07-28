import Button from 'components/Button/Button'
import { Center } from 'components/Grid/Center/styles'
import { Column } from 'components/Grid/Column/styles'
import { Container } from 'components/Grid/Container/styles'
import { Row } from 'components/Grid/Row/styles'
import { Heading } from 'components/Heading/Heading'
import { Spacing } from 'components/Spacing/styles'

const Main = () => (
  <Container>
    <Row>
      <Column grid="12">
        <Row>
          <Column grid="6">
            <img src="/img/main-image.png" />
            <Center>
              <Heading color="white" size="huge">
                Basketly
              </Heading>
              <Spacing bottom />

              <h6>Encontre jogos perto de você.</h6>
              <Spacing top />
              <Button size="medium">Encontre jogos</Button>
            </Center>
          </Column>
        </Row>
      </Column>
    </Row>
  </Container>
)

export default Main
