import React from "react";
import axios from "axios";

class SingUpScreen extends React.Component {
    state = {
        inputName: '',
        inputEmail: ''
    }

    handleInputName = (event) => {
        this.setState({inputName: event.target.value})
    }
    handleInputEmail = (event) => {
        this.setState({inputEmail: event.target.value})
    }

    createUser = () => {

        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

        const body = {
            name: this.state.inputName,
            email: this.state.inputEmail
        }

        axios
            .post(url, body, {
                headers: {
                    Authorization: 'lucas-lago-gebru'
                }
            })
            .then(res => {alert(`Usuárie ${this.state.inputName} criade com sucesso!`)
                this.setState({ inputName: '', inputEmail: '' })
            })
            .catch(err => alert(err.response.data.message))
    }

    render(){
        return(
            <div>
                <h3> Tela de Cadastro de Usuários </h3>
                <div>
                    <input
                        placeholder="Insira seu Nome"
                        value={this.state.inputName}
                        onChange={this.handleInputName}
                    />
                    <input
                        placeholder="Insira seu email"
                        value={this.state.inputEmail}
                        onChange={this.handleInputEmail}
                    />
                    <button onClick={this.createUser}> Cadastrar! </button>
                </div>
                <button onClick={this.props.goToUsersScreen}> Ir para Lista de Usuários </button>
            </div>
        )
    }
}
export default SingUpScreen