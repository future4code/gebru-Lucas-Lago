// Importando React e Axios
import React from "react";
import axios from "axios";

// Definido as constantes de url e headers no código
const urlUsersList = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
  headers:{
    Authorization: "lucas-coimbra-Gebru"
  }
}

export default class App extends React.Component {
  state = {
    usersList: [],
    usersNameListInput: '',
    usersEmailListInput: ''
  }

  componentDidMount(){
    this.getAllUsers()
  }

  getAllUsers = () => {
    axios
    .get(urlUsersList, headers)
    .then((res) => {
      this.setState({usersList: res.data})
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  //Função para criação de uma lista nova de usuários
  createUsers = () => {
    const body = {
      name: this.state.usersNameListInput,
      email: this.state.usersEmailListInput
    }
  
    axios
    .post(urlUsersList, body && body, headers)
    .then(() => {
      alert(`O usuário ${this.state.usersNameListInput} foi criado com sucesso!`)
      this.setState({usersNameListInput: ''})
      this.setState({usersEmailListInput: ''})

      this.getAllUsers()
    })
    .catch((err) => {
      console.log(err)
      alert("Cadastro inválido")
    })
  }

  // Pega dos valores de nome e email digitados nos inputs
  mudaUsersName = (event) => {
    this.setState({usersNameListInput: event.target.value})
  }
  mudaUsersEmail = (event) => {
    this.setState({usersEmailListInput: event.target.value})
  }

  render(){
    const usersListComponents = this.state.usersList.map((users) => {
      return <li key={users.id}> {users.name} </li>
    })

    return (
      <div>
        <button onClick={this.usersListComponents}> Trocar de Tela </button>
        <div>
        <p> Digite o nome: </p>
          <input
            value={this.state.usersNameListInput}
            placeholder="Nome"
            onChange={this.mudaUsersName}
          />

          <p> Digite o email: </p>
          <input
            value={this.state.usersEmailListInput}
            placeholder="Email"
            onChange={this.mudaUsersEmail}
          />
        </div>
        <div>
          <button onClick={this.createUsers}> Enviar </button>
        </div>
        {usersListComponents}
      </div>
    );
  } 
}