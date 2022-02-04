import React from "react";                                      // Importa o react
import styled from "styled-components"                          // Importa o styled-components

const Header = styled.div`
  width:  60%;
  height: 100px;
  background-color: #c8c8b4;

  border: 1px solid gray;
  text-align: center;
`
const ContainerGeral = styled.div`
  display:  flex;
  flex-direction: column;
  align-items: center;
`
const FeedMensagem = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 500px;
  width:  60%;
  border: 1px solid black;
`

const CampoEnviarMensagem = styled.div`
  display: flex;
  justify-content: center;

  width: 60%;
  height: 25px;

  border: 1px solid black;
  background-color: gray;
`

const CampoUsuario = styled.input`
  width: 10%;
  margin-right: 20px;
  border-radius:  4px;
`
const CampoMensagem = styled.input`
  width: 200px;
  border-radius:  4px;
`
const BalaoDeMensagem = styled.div`
  background-color: ${props => {
    if (props.tipo === "eu") {
      return "#DDF7C8" // Verde copiado do WhatsApp
    } else if (props.tipo === "outro") {
      return "#ffffff" // Branco
    }
  }};
  align-self:  ${props => {
    if (props.tipo === "eu") {
      return "flex-end"
    } else {
      return "flex-start"
    }
  }};
  margin-right: ${props => {
    if (props.tipo === "eu") {
    return "1%"
    }
  }};
  margin-left: ${props => {
    if (props.tipo !== "eu") {
      return "1%"
    }
  }};
  max-width: 60%;
  min-width: 8%;
  margin-bottom: 1em;
  word-wrap: break-word;

  padding: 0.9em 0.8em;
  border-radius: 0.5em;
  font-weight: 450;
  line-height: 1.3;

  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
`
const ContainerNome = styled.div`
  color: #9AAC8C;
  font-size: 0.8em;
  font-weight: 600;
  margin-bottom: 0.2em;
`


// =========================================================

class App extends React.Component {
  state = {
    inputUsuario: '',
    inputMensagem: '',
    listaUsuario: [
      {id: 1, nomeUsuario: '', mensagemUsuario: ''}
    ]
  }
  
  guardaUsuario = (event) => {
    this.setState({ inputUsuario: event.target.value})
  }

  guardaMensagem = (event) => {
    this.setState({ inputMensagem: event.target.value})
  }

  addMensagem = () => {
    const NewMensagem = {
      id: Math.random(),
      nomeUsuario: this.state.inputUsuario,
      mensagemUsuario: this.state.inputMensagem
    }

    const copia = [...this.state.listaUsuario, NewMensagem]
      this.setState({ listaUsuario: copia})
      this.setState({ inputUsuario: '', inputMensagem: ''})
  }

    

  render(){
    
    const usuarios = this.state.listaUsuario.map((usuario) => {
      const nome = usuario.nomeUsuario.toLowerCase()
      if(nome === "eu" && usuario.id !== 1){
        return (
          <BalaoDeMensagem tipo={'eu'}>
            <div>{usuario.mensagemUsuario}</div>
          </BalaoDeMensagem>
        )
      } else if(usuario.id !== 1) {
        return(
          <BalaoDeMensagem tipo={"outro"}>
            <ContainerNome>{usuario.nomeUsuario}</ContainerNome> <br/>
            <div>{usuario.mensagemUsuario}</div>
          </BalaoDeMensagem>
        )
      }
    })
    
    return (
      <ContainerGeral>
          <Header>
          <h1> WhatsLab</h1>
          </Header>
          <FeedMensagem>
            {usuarios}
          </FeedMensagem>
          <CampoEnviarMensagem>
            <CampoUsuario
              placeholder={'Usuário'}
              value={this.state.nomeUsuario}
              onChange={this.guardaUsuario}
            />
            <CampoMensagem
              placeholder={'Mensagem'}
              value={this.state.mensagemUsuario}
              onChange={this.guardaMensagem}
            />
            <button onClick={this.addMensagem}> Enviar </button>
          </CampoEnviarMensagem>   
      </ContainerGeral>
    );
  }
}
export default App;