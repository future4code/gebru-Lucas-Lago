// =============================================================================================
// Importa as bibliotecas
import React from "react";

// importando os componentes de Tela
import Header from "./components/pasteHeader/Header";

//Importando as telas
import SignUpScreen from "./components/pasteSignUp/SignUpScreen";
import UserListScreen from "./components/pasteUserList/UserListScreen";
import InfoScreen from "./components/pasteInfo/InfoScreen";

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
        return <UserListScreen goToSignUpScreen={this.goToSignUpScreen} goToInfoScreen={this.goToInfoScreen}/>
      case 'info': 
        return <InfoScreen  goToUserListScreen={this.goToUserListScreen}/>
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
  // Função que envia para a página Info
  goToInfoScreen = () => {
    this.setState({ renderedScreen: 'info'})
  }

  // =============================================================================================
  render(){
    return(
      <div>
        <Header/>
        {this.chooseScreen()}
      </div>
    )
  }
}

export default App;
