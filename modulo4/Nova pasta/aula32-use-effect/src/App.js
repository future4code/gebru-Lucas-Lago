import React, {useEffect, useState}from "react";
import axios from "axios";
import PokeCard from "./Components/PokeCard/PokeCard";
import styled from "styled-components";

const Container = styled.div`
    font-family: sans-serif;
    text-align: center;
`

function App () {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")

  useEffect(() => {
    getPokeList()
  }, [pokeName])

  const changePokeName = event => {
    setPokeName(event.target.value)
  };

  const getPokeList = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setPokeList(response.data.results)
      })
      .catch(err => {
        console.log(err);
      });
  }

  return(
    <Container>
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>

        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </Container>
  )  
}

export default App