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
      return (
        <div key={usuario.id}>
          {usuario.nomeUsuario}
          {usuario.mensagemUsuario} 
        </div>
      )
    })

    // const nome = this.props.inputUsuario.toLowerCase()
    //   if( nome === 'eu'){
    //     return(
    //       <div>{this.props.inputMensagem}</div>
    //     )
    //   } else {
    //     <div>
    //       <div>{this.props.inputUsuario}</div>
    //       <div>{this.props.inputMensagem}</div>
    //     </div>
    //   }
    


    return (
      <ContainerGeral>
          <Header>
          <h1> WhatsLab</h1>
          </Header>
          <FeedMensagem>
          {usuarios}
          {/* {tabelaDeDados} */}
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
