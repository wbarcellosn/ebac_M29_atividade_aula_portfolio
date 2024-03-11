import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontsize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontsize || '16px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: white;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <div>
      <Botao principal>Enviar</Botao>
      <Botao principal={false} fontsize="14px">
        Cancelar
      </Botao>
      <BotaoPerigo principal as="a">
        <span> Não clique aqui</span>
      </BotaoPerigo>
    </div>
  )
}

export default Teste
