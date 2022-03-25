// Importando bibliotecas necessárias
import React, {useState, useEffect} from "react";
import axios from "axios";

// Importando Layout da página
import {LayoutCardScreen, HeaderCard, LayoutButton} from "../PasteStyledScreen/StyledScreen"
import {CardChat} from "./StyledScreenChat"

// Função da ScreenChat
function ScreenChat(props){
    // useStates para a ScreenChat
    const [arrayMatch, setArrayMatch] = useState([1])

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
                setArrayMatch(res.data.matches)
                console.log(res.data)  
            })
            .catch((err) => {
                alert(err.data)
            })
    }

    const arrayMatchCard = arrayMatch.map((item) => {
        return(
            <div key={item.id}> 
                <img 
                    src={item.photo}
                    width="40px"
                    height="40px"
                />
                <p> {item.name} </p>
            </div>
        )
    })

    return(
        <LayoutCardScreen>
            <HeaderCard>
                <LayoutButton onClick={props.goToScreenStart}> Match </LayoutButton>
                <h1> AstroMatch </h1>
                <div></div>
            </HeaderCard>
            <CardChat>
                {arrayMatchCard}
            </CardChat>
        </LayoutCardScreen>
    )
}
export default ScreenChat