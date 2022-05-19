import react from "react"
import { useNavigate } from "react-router-dom"
import { goToTripsPage, goToLoginPage } from "../Routes/Coodinator"

import {ContainerHomePage, ContainerTitle, ContainerButton, ButtonHome} from "./StyledPages/StyledHomePage"

function HomePage(){
    const navigate = useNavigate()

    return(
        <ContainerHomePage>
            <ContainerTitle> Home </ContainerTitle>
            <ContainerButton>
                <ButtonHome onClick={() => goToTripsPage(navigate)} > <b> Viagens </b> </ButtonHome>
                <ButtonHome onClick={() => goToLoginPage(navigate)}> <b> Área Admin </b> </ButtonHome>
            </ContainerButton>
        </ContainerHomePage>
    )
}

export default HomePage