import react from "react"
import styled from "styled-components"

const Etapa1 = () => {
  return (
    <div>
      <h1>Etapa 1 - Dados Gerais</h1>
      <div>
        <p>1. Qual o seu nome?</p>
        <input type="text" placeholder="Nome"/>
      </div>
      <div>
        <p>2. Qual sua idade?</p>
        <input type="number"placeholder="Idade"/>
      </div>
      <div>
        <p>3. Qual seu email?</p>
        <input type="email" placeholder="Email"/>
      </div>
      <div>
        <p>4. Qual sua escolaridade?</p>
        <select>
            <option>Ensino Fundamental</option>
            <option>Ensino Médio</option>
            <option>Ensino Superior</option>
            <option>Formado</option>
        </select>
      </div>
    </div>
  )
}

export default Etapa1;