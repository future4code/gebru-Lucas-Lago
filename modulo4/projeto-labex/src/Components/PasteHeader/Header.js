import React from "react";

import LogoLabex from "../../Imagens/LogoLabex.png";
import {ContainerHeader, ContainerEsquerda, ContainerImg, ContainerTitle} from "./StyledHeader"


export const Header = () => {
    return(
        <ContainerHeader>
            <ContainerEsquerda>
                <ContainerImg src={LogoLabex}/>
                <ContainerTitle> Aviãozin </ContainerTitle>
            </ContainerEsquerda>
        </ContainerHeader>
    )
}