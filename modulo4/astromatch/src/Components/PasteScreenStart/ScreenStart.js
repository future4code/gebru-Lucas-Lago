// Importando bibliotecas necessárias
import React, {useState, useEffect} from "react";
import axios from "axios";

// Importando Layout da página
import {LayoutCardScreen, HeaderCard, LayoutButton} from "../PasteStyledScreen/StyledScreen"
import {LayoutCard, ContainerInfo, ContainerButton, ImagemMatch} from "./StyledScreenStart"

// Função Da ScreenStart
function ScreenStart(props){
    const [profileId, setProfileId] = useState({})

    // useEffect retornando a função getProfileToChoose, que retorna um perfil que ainda não foi visto 
    // por você e ela é chamada sempre que um aluno entrar na página;
    useEffect(() => {
        getProfileToChoose()
    }, [])

    // Função getProfleToChoose que importa os dados da API
    const getProfileToChoose = () => {
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucas-lago-gebru/person`

        axios
            .get(url)
            .then((res) => {
                setProfileId(res.data.profile)
                
            })
            .catch((err) => {
                // alert(err)
                console.log(err)
            })
    }
    console.log(profileId)

    // Função de Match, chamada sempre que o botão de 'OK' é acionado, ela invoca a função getProfileToChoose 
    // novamente, que procura um novo perfil na API. E invoca a função choosePerson, que diz quem você deu Match.
    const getIdMatch = () => {
        getProfileToChoose()
        choosePerson()
    }
    // Função Unmatch, invoca a função getProfileToChoose, que chama uma nova pessoa.
    const getUnmatch = () => {
        getProfileToChoose()
    }

    // Função choosePerson, envia para a API seu Match.
    const choosePerson = () => {
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucas-lago-gebru/choose-person`

        const body = {
            id: profileId.id,
            choise: true
        }

        axios
            .post(url, body, {
                headers: {
                    ContentType: application/json
                }
            })
            .then((res) => {
                console.log('ENVIADO')
            })
            .catch((err) => {
                alert(err.data)
            })
    }
        
    return(
        <LayoutCardScreen>
            <HeaderCard>
                <div></div>
                <h1> AstroMatch </h1>
                <LayoutButton onClick={props.goToScreenChat}> Chat </LayoutButton>            
            </HeaderCard>
        
            <LayoutCard>
                <ImagemMatch>
                    <img className="ImagemMatch" src={profileId.photo}/>
                </ImagemMatch>
                <ContainerInfo>
                    <p className="NameMatch"> <strong> {profileId.name} </strong>, {profileId.age} </p>
                    <p className="BioMatch" > {profileId.bio} </p>
                </ContainerInfo>  
            </LayoutCard>                  
            
            <ContainerButton>
                <button className="button1" onClick={getUnmatch}> X </button>
                <button className="button2" onClick={getIdMatch}> OK </button>
            </ContainerButton>
        </LayoutCardScreen>
    )
}
export default ScreenStart