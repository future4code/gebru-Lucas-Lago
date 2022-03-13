// =============================================================================================
// Importa as bibliotecas
import React from "react";
import axios from "axios";

// =============================================================================================
// Componente de Classe
class InfoScreen extends React.Component {
    state ={
        musicList: [],

        playlistId: '',

        musicName: '',
        artistName: '',
        musicLink: ''
    }
    componentDidMount(){
        this.getPlaylistTracks()
    }
    
    getPlaylistTracks = (playlistId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`
        axios
            .get(url, {
                headers: {
                    Authorization: 'lucas-lago-gebru'
                }
            })
            .then(res => {
                this.setState({ musicList: res.data.result.tracks})
            })
            .catch(err => alert('Playlist não existe!'))
    }

    handleMusicName = (event) => {
        this.setState({ musicName: event.target.value })
    }
    handleArtistName = (event) => {
        this.setState({ artistName: event.target.value})
    }
    handleMusicLink = (event) => {
        this.setState({ musicLink: event.target.value})
    }

    addTrackToPlaylist = (playlistId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`

        const body = {
            name: this.state.musicName,
            artist: this.state.artistName,
            url: this.state.musicLink
        }
        axios
            .post(url, body, {
                headers: {
                    Authorization: 'lucas-lago-gebru'
                }
            })
            .then(res => {
                this.setState({ musicList: res.data.result.tracks})
            })
            .catch(err => alert('Música já adicionada!'))
    }

    render(){
        const musicListInfo = this.state.musicList.map((music) => {
            return (
                <div>
                    
                    Nome da música: {music.name}
                    Nome do Artista/Cantor(a)/Banda {music.artist}
                    Link da Música: {music.url}
                </div>
            )
        })
        return(
            <div>
                <button onClick={this.props.goToUserListScreen}> Minhas Playlists </button>
                <h2> Adicionar Música Nesta Playlist</h2>
                <div>
                    <div> <p>Nome da Música:</p> 
                        <input
                            placeholder="Nome da Música"
                            value={this.state.musicName}
                            onChange={this.handleMusicName}
                        />
                    </div> 
                    <div>  <p>Nome do Artista: </p>
                        <input
                            placeholder="Nome do Artista"
                            value={this.state.artistName}
                            onChange={this.handleArtistName}
                        />
                    </div>
                    <div> <p>Link do Arquivo de áudio: </p>
                        <input
                            placeholder="Link do arquivo"
                            value={this.state.musicLink}
                            onChange={this.handleMusicLink}
                        />
                    </div>
                    <button onClick={this.addTrackToPlaylist}> Adicionar Música</button>
                </div>
                <div>
                    {musicListInfo}
                </div>
            </div>
        )
    }
}

export default InfoScreen