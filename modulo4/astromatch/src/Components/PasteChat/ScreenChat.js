// Importando bibliotecas necessárias
import React, {useState, useEffect} from "react";
import axios from "axios";

// Importando Layout da página
import {LayoutCardScreen, HeaderCard, LayoutButton} from "../PasteStyledScreen/StyledScreen"

// Função da ScreenChat
function ScreenChat(props){
    // useStates para a ScreenChat
    const [arrayMatch, setArrayMatch] = useState({})

    // useEffect retornando a função getProfileToChoose, que retorna um perfil que ainda não foi visto 
    // por você e ela é chamada sempre que um aluno entrar na página;
    useEffect(() => {
        getMatches()
    }, [])
    
    const getMatches = () => {
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucas-lago-gebru/matches`

        axios
            .get(url)
            .then((res) => {
                setArrayMatch(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                alert(err.data)
            })
    }
    console.log(arrayMatch)

    return(
        <LayoutCardScreen>
            <HeaderCard>
                <LayoutButton onClick={props.goToScreenStart}> Match </LayoutButton>
                <h1> AstroMatch </h1>
                <div></div>
            </HeaderCard>
            <div>
                {arrayMatch.photo}
            </div>
        </LayoutCardScreen>
    )
}
export default ScreenChat