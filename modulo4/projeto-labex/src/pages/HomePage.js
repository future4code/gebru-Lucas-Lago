import react from "react"

import {ContainerHomePage, ContainerTitle, ContainerButton, ButtonHome} from "./StyledPages/StyledHomePage"

function HomePage(){
    return(
        <ContainerHomePage>
            <ContainerTitle> Home </ContainerTitle>
            <ContainerButton>
                <ButtonHome> <b> Viagens </b> </ButtonHome>
                <ButtonHome> <b> Área Admin </b> </ButtonHome>
            </ContainerButton>
        </ContainerHomePage>
    )
}

export default HomePage