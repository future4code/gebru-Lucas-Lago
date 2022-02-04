import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state ={
    post: [
      {
        nomeUsuario: 'Mingau',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'Marie',
        fotoUsuario:'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/151'
      },
      {
        nomeUsuario: 'Quemoso',
        fotoUsuario: 'https://picsum.photos/50/52',
        fotoPost: 'https://picsum.photos/200/152'
      }
    ]
  }

  render() {
    const listaDePost = this.state.post.map((publicacao) => {
      return(
        <MainContainer>
          <Post
            nomeUsuario={publicacao.nomeUsuario}
            fotoUsuario={publicacao.fotoUsuario}
            fotoPost={publicacao.fotoPost}
          />
        </MainContainer>
      )
    })
    return (
      <div>
        {listaDePost}
      </div>
    );
  }
}

export default App;
