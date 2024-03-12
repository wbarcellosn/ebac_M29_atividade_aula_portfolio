import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkBtn } from './styles'

const Project = () => (
  <Card>
    <Title>Projeto 1</Title>
    <Paragraph type="secondary">Descrição do projeto</Paragraph>
    <LinkBtn>Visualizar</LinkBtn>
  </Card>
)

export default Project
