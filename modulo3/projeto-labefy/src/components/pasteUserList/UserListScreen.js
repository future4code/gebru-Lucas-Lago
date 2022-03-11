// =============================================================================================
// Importa as bibliotecas
import React from "react";
import axios from "axios";

import InfoScreen from "../pasteInfo/InfoScreen"

// =============================================================================================
// Componente de Classe
class UserListScreen extends React.Component{
    state = {
        musicPlaylist: [],
        info: 'false'
    }

    componentDidMount(){
        this.getAllPlaylist()
    }

    // =============================================================================================
    // Pega todas as playlists do API
    getAllPlaylist = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

        axios
            .get(url, {
                headers: {
                    Authorization: 'lucas-lago-gebru'
                }
            })
            .then(res => {
                this.setState({ musicPlaylist: res.data.result.list })
            })
            .catch(err => alert('Não existem playlists'))
    }

    // =============================================================================================
    // Remove playlist da API
    deletePlaylist = (playlistId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`

        axios
            .delete(url, {
                headers: {
                    Authorization: 'lucas-lago-gebru'
                }
            })
            .then(res => {
                alert(`Playlist apagada com sucesso!`)
                this.getAllPlaylist()
            })
            .catch(err => alert('Erro ao apagar Playlist!'))
    }

    // =============================================================================================
    // Abre a página de informações da Playlist
    infoScreen = () => {
        switch(this.state.info){
            case 'true':
                return (
                <InfoScreen
                    


                />)
            case 'false': 
                return <UserListScreen/>
            default:
                return 'Esta playlist não possui informações!'
        }
    }

    goToInfoScreen = () => {
        this.setState({ info: 'true' })
    }

    render(){
        const renderedUsersPlaylist = this.state.musicPlaylist.map((playList) => {
            return (
                <div key={playList.id}> 
                    <p> {playList.name} </p>
                    <button onClick={this.goToInfoScreen}> Info </button>
                    <button onClick={() => this.deletePlaylist(playList.id)}> Apagar {playList.name}</button>
                </div>
            )
        })

        return(
            <div>
                <button onClick={this.props.goToSignUpScreen}> Adicionar PlayList </button>
                
                <h2> Minhas Playlists </h2>
            
                {renderedUsersPlaylist}
                
                
            </div>
        )
    }
}

export default UserListScreen