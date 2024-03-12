import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { Description, Button, SidebarContainer } from './styles'

function Sidebar() {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Title fontSize={20}>Winicius Barcellos</Title>
        <Paragraph fontSize={16} type="secondary">
          wbarcellosn
        </Paragraph>
        <Description fontSize={12} type="primary">
          Engenheiro Front-end
        </Description>
        <Button type="button">Trocar tema</Button>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar
