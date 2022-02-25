import react from "react"
import styled from "styled-components"

const Etapa3 = () => {
  return (
    <div>
      <h2>Etapa 3 - Informações Gerais de Ensino</h2>
      <div>
        <p>5. Motivo da desistência do Ensino Superior?</p>
        <input type="text" placeholder="Motivo"/>
      </div>
      <div>
        <p>6. Você fez algum curso complementar?</p>
        <select>
            <option>Nenhum</option>
            <option>Sim</option>
        </select>
      </div>
    </div>
  )
}

export default Etapa3;