import React from "react";
import Etapa1 from "./Components/Etapa1.js"
import Etapa2 from "./Components/Etapa2"
import Etapa3 from "./Components/Etapa3"
import Final from "./Components/Final"

class App extends React.Component{
  state = {
    etapa: 1
  }
  
  renderizaEtapa = () => {
    switch (this.state.etapa){
      case 1:
        return <Etapa1/>
      case 2:
        return <Etapa2/>
      case 3:
        return <Etapa3/>
      case 4:
        return <Final/>
    }
  }

  irParaProximaEtapa = () => {
    const etapaAtual = this.state.etapa
    const novaEtapa = etapaAtual + 1
  
    this.setState({ etapa: novaEtapa })
  }

  render(){
    <div>
      <Etapa1/>
      <Etapa2/>
      <Etapa3/>
      <Final/>
    </div>
  return (
    <div>
      {this.renderizaEtapa}
      <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>
    </div>
  )
  }
}
export default App