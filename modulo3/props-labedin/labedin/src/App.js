import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import { CardPequeno } from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemPerfil from './img/FotoDePerfil.png';
import LogoEmail from './img/EmailLogo.png'
import LogoEndereco from './img/EnderecoLogo.png'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImagemPerfil}
          nome="Lucas Coimbra Rocha Lago" 
          descricao=" Oi, eu sou o Lucas Coimbra. Sou o estudante de desenvolvimento FullStack da Labenu. 
                      Gostei muito do conteúdo abordado nas aulas até agora, a parte mais difícil até o 
                      momento está sendo React"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>


      <div className="page-section-container">
        <h2> Contato </h2>
        <CardPequeno
          imagem={LogoEmail}
          nome="Email: "
          descricao=" lucascoimbralago@gmail.com"                   
          />
      </div>
      <div className="page-section-container">
        <CardPequeno
          imagem={LogoEndereco}
          nome="Endereço: "
          descricao="Aldeia da Folha"                   
          />
      </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
