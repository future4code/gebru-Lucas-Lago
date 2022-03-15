// =============================================================================================
// Importa as bibliotecas
import React from "react";
import axios from "axios";

import {CardPlaylist, ButtonInfo, DivDireita, ButtonDelet, TitlePage, TitlePlaylist, Playlist} from "./StyledsUserListScreen"
import InfoScreen from "../pasteInfo/InfoScreen";

// =============================================================================================
// Componente de Classe
class UserListScreen extends React.Component{
    state = {
        musicPlaylist: [],
        playlistId: ''
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

    render(){
        const renderedUsersPlaylist = this.state.musicPlaylist.map((playList) => {
            return (
                <CardPlaylist key={playList.id}>
                    
                    <TitlePlaylist> {playList.name} </TitlePlaylist>
                    <DivDireita>
                        <ButtonInfo onClick={this.props.goToInfoScreen}> + </ButtonInfo>
                        <ButtonDelet onClick={() => this.deletePlaylist(playList.id)}> Apagar Playlist {playList.name}</ButtonDelet>
                    </DivDireita>
                </CardPlaylist>
            )
        })

        return(
            <div>
                <button onClick={this.props.goToSignUpScreen}> Adicionar PlayList </button>
                <div>
                    <TitlePage> Minhas Playlists </TitlePage>
                    <Playlist>
                        {renderedUsersPlaylist}
                    </Playlist>
                </div>
            </div>
        )
    }
}

export default UserListScreen