import react, {useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

import {useProtectedPage} from "../Hooks/useProtectedPage"
import {goToBackPage} from "../Routes/Coodinator"

import {ContainerGeral, ContainerInput, ContainerTitle, ContainerInputNomeData, ContainerInputDestinoDescricaoDuracao, 
        ContainerInputData, ContainerInputInduvidual, ContainerInputNome, ContainerButton, ContainerButtonIndividual} 
        from "./StyledPages/StyledCreateTripPage"

function CreateTripPage(){
    const navigate = useNavigate()
    useProtectedPage()



    const [nomeViagem, setNomeViagem] = useState('')
    const [dataViagem, setDataViagem] = useState('')
    const [destinoViagem, setDestinoViagem] = useState('')
    const [descricaoViagem, setDescricaoViagem] = useState('')
    const [duracaoViagem, setDuracaoViagem] = useState('')

    const mudaNome = (e) => {
        setNomeViagem(e.target.value)
    }
    const mudaData = (e) => {
        setDataViagem(e.target.value)
    }
    const mudaDestino = (e) => {
        setDestinoViagem(e.target.value)
    }
    const mudaDescricao = (e) => {
        setDescricaoViagem(e.target.value)
    }
    const mudaDuracao = (e) => {
        setDuracaoViagem(e.target.value)
    }
    
    


    return(
        <ContainerGeral>
            <ContainerInput>
                <ContainerTitle>
                    <h2>
                        CreateTripPage
                    </h2>  
                </ContainerTitle>
                <ContainerInputNomeData>
                    <ContainerInputNome
                        type="text"
                        placeholder="Nome"
                        value={nomeViagem}
                        onChange={mudaNome}
                    />
                    <ContainerInputData
                        type="date"
                        value={dataViagem}
                        onChange={mudaData}
                    />
                </ContainerInputNomeData>
                <ContainerInputDestinoDescricaoDuracao>
                    <ContainerInputInduvidual
                        type="text"
                        placeholder="Destino"
                        value={destinoViagem}
                        onChange={mudaDestino}
                    />
                    <ContainerInputInduvidual
                        type="text"
                        placeholder="Descrição"
                        value={descricaoViagem}
                        onChange={mudaDescricao}
                    />
                    <ContainerInputInduvidual
                        type="text"
                        placeholder="Duração"
                        value={duracaoViagem}
                        onChange={mudaDuracao}
                    />
                </ContainerInputDestinoDescricaoDuracao>   
            </ContainerInput>
            <ContainerButton>
                <ContainerButtonIndividual onClick={() => goToBackPage(navigate)}> <b> VOLTAR </b> </ContainerButtonIndividual>
                <ContainerButtonIndividual> <b> CRIAR </b> </ContainerButtonIndividual>
            </ContainerButton>
        </ContainerGeral>
    )
}

export default CreateTripPage