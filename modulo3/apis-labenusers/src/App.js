import React from "react";
import SingUpScreen from "./Components/PastaTelaCadastro/telaCadastro";
import UsersScreen from "./Components/PastaTelaUsuario/telaUsuario";

class App extends React.Component {
  state = {
    telaRenderizada: 'singUp'
  }

  chooseScreen = () => {
    switch (this.state.telaRenderizada){
      case 'singUp':
        return <SingUpScreen goToUsersScreen={this.goToUsersScreen}/>
      case 'userList':
        return <UsersScreen goToSingUpScreen={this.goToSingUpScreen}/>
      default:
        return <h2> Erro página não encontrada!</h2>
    }
  }

  goToSingUpScreen = () => {
    this.setState({ telaRenderizada: 'singUp' })
  }

  goToUsersScreen = () => {
    this.setState({ telaRenderizada: 'userList' })
  }

  render(){
    return(
      <div>
        <h1> LabenUsers </h1>
        {this.chooseScreen()}
        
      </div>
    )
  }
}
export default App