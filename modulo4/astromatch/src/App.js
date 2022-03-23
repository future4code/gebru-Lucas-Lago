import React, {useState, useEffect} from "react";
import axios from "axios";

//Importação das telas
import ScreenStart from "./Components/PasteScreenStart/ScreenStart"
import ScreenChat from "./Components/PasteChat/ScreenChat"

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

  return(
    <div>
      
      {chooseScreen()}
    </div>
  )
}
export default App