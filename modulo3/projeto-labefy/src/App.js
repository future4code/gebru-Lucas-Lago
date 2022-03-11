// =============================================================================================
// Importa as bibliotecas
import React from "react";

// importando os componentes de Tela
import MenuLateral from "./components/pasteMenuLateral/MenuLateral";

//Importando as telas
import SignUpScreen from "./components/pasteSignUp/SignUpScreen";
import UserListScreen from "./components/pasteUserList/UserListScreen";

// =============================================================================================
// Componente de Classe
class App extends React.Component{
  //Cria meu estado
  state = {
    renderedScreen: 'signUp'                                    //Tela inicial para renderização
  }

  // =============================================================================================
  // Controla as transições de telas
  chooseScreen = () => {
    switch (this.state.renderedScreen){
      case 'signUp':
        return <SignUpScreen goToUserListScreen={this.goToUserListScreen}/>
      case 'usersList':
        return <UserListScreen goToSignUpScreen={this.goToSignUpScreen}/>
      default:
        return alert('Página não encontrada!')
    }
  }

  // Função que envia para a página SignUp
  goToSignUpScreen = () => {
    this.setState({ renderedScreen:'signUp' })
  }
  // Função que envia para a página UserList
  goToUserListScreen = () => {
    this.setState({ renderedScreen: 'usersList' })
  }

  // =============================================================================================
  render(){
    return(
      <div>
        {/* <MenuLateral/> */}
        {this.chooseScreen()}

        
        
      </div>
    )
  }
}

export default App;
