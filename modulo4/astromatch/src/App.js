import React, {useState, useEffect} from "react";
import axios from "axios";

//Importação das telas
import ScreenStart from "./Components/PasteScreenStart/ScreenStart"
import ScreenChat from "./Components/PasteChat/ScreenChat"

import {ContainerApp, ContainerMatch, ContainerButton, ButtonLimpar} from "./StyledApp"

function App() {
  const [renderScreen, setRenderScreen] = useState('ScreenStart')

  const chooseScreen = () => {
    switch(renderScreen){
      case 'ScreenStart':
        return  <ScreenStart goToScreenChat={goToScreenChat} />
      case 'ScreenChat':
        return  <ScreenChat  goToScreenStart={goToScreenStart} />
      default:
        return <h2> Erro! Página não existe! </h2>
    }
  }
  const goToScreenChat = () => {
    setRenderScreen('ScreenChat')
  }
  const goToScreenStart = () => {
    setRenderScreen('ScreenStart')
  }

  const clear = () => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucas-lago-gebru/clear`
  
    axios 
      .put(url, {
        headers: {
          ContentType: 'application/json'
        }
      })
      .then((res) => res)
      .catch((err) => {
        alert(err.data)
      })
  }

  return(
    <ContainerApp>
      <ContainerMatch>
        {chooseScreen()}
      </ContainerMatch>
      
      <ContainerButton className="ButtonLimpar" onClick={() => clear()}> Limpar AstroMatch</ContainerButton>
    </ContainerApp>
  )
}
export default App