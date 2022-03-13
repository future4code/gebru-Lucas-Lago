// =============================================================================================
// Importa as bibliotecas
import React from "react";
import axios from "axios";

import {TitleSignUp, ContainerSignUp} from "./StylesSignUpScreen"

// =============================================================================================
// Componente de Classe
class SignUpScreen extends React.Component{
    // Cria um estado
    state = {
        inputName: ''
    }

    // Muda estado do input
    handleNameInput = (event) => {
        this.setState({ inputName:  event.target.value })
    }

    // Fazendo a conexão para a API
    createPlaylist = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

        const body = {
            name: this.state.inputName
        }
        axios
            .post(url, body, {
                headers: {
                    Authorization: 'lucas-lago-gebru'
                }
            })
            .then(res => {
                alert(`PlayList ${this.state.inputName} criada com sucesso!`)
                this.setState({ inputName: ''})
            })
            .catch(err => alert(err.response.data.message))
    }

    // =============================================================================================
    // render
    render(){
        return(
            <div>
                <TitleSignUp> Criar PlayList Personalizada!</TitleSignUp>
                <ContainerSignUp>
                    <input
                        placeholder='Nome da PlayList'
                        value={this.state.inputName}
                        onChange={this.handleNameInput}
                    />
                    <button onClick={this.createPlaylist}> Criar PlayList </button>
                </ContainerSignUp>
                <button onClick={this.props.goToUserListScreen}> Minhas Playlists </button>
            </div>
        )
    }
}

export default SignUpScreen